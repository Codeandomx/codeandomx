---
title: Servicios con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

![Servicios con Angular](/img/angular2.jpg)

Los servicios son la mejor forma de **compartir datos y funcionalidades entre componentes** con Angular, ya sean datos propios (datos almacenados temporalmente en nuestra aplicación) u obtenidos desde una **API Rest**, en nuestra aplicación trabajamos con un objeto en donde almacenamos nuestros datos, pero este objeto esta declarado en un componente, así que solo existe en su scope (ámbito) y no podemos acceder a estos datos desde otras partes de la aplicación.

Para solucionar este problema vamos a **crear un servicio** para almacenar nuestros sitios de interés y a la vez utilizaremos un observable para poder estar a la espera de cambios y reflejarlos de inmediato.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/05_servicios" target="_blank">Github</a>.
</div>

## Crear servicios

[Angular CLI](http://blog.codeando.org/articulos/mi-primera-app-con-angular-y-angular-cli.html) nos facilitara el trabajo, vamos a crear un servicio y lo incluiremos en el modulo principal de la aplicación y al componente donde vamos a utilizarlo, abrimos la shell y nos ubicamos en el directorio principal de la aplicación, ejecutamos el siguiente comando.-

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight javascript linenos %}
ng generate service services/site --module app.module
{% endhighlight %}

El comando anterior creará un directorio llamado "services" y dentro de este el archivo "site.service.ts" con el siguiente contenido.-

{% highlight javascript linenos %}
import { Injectable } from '@angular/core';

@Injectable()
export class SiteService {
    constructor() { }
}
{% endhighlight %}

Para poder utilizar el servicio en nuestra aplicación este debe ser registrado en el modulo principal (o en el modulo requerido) "app.module.ts".-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SiteService } from './services/site.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [SiteService],
    bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}

El servicio es importado en la linea 8, y en la linea 20 es declarado como un proveedor, de esta forma estará disponible en nuestra aplicación.

> Un servicio debe de ser declarado en la propiedad "providers" cuando es creado, Angular CLI nos ayuda con este proceso.

## Utilizar observables en nuestro servicio

Los observables no son una característica particular de Angular, si no de del nuevo estándar de Javascript ES7 (ECMAScript 7), un observable abre un canal de comunicación continuo en el que podemos estar emitiendo datos, esto nos permite generar un patrón de manejo de datos (tipo array) para analizar, actualizar y mantener nuestros datos.

Vamos a declarar un observable en nuestro servicio, abrimos el archivo "site.service.ts" y agregamos el modulo "BehaviorSubject" el cual nos ayudará con este proceso.-

{% highlight javascript linenos %}
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
{% endhighlight %}

> BehaviorSubject representa un valor que cambia con el tiempo, los observables pueden suscribirse a este para recibir un valor inicial, actualizaciones o el ultimo valor disponible.

La clase de nuestro servicio debe quedar de la siguiente forma.-

{% highlight javascript linenos %}
@Injectable()
export class SiteService {
    private sites = new BehaviorSubject<any>([]);
    site = this.sites.asObservable();

    constructor() { }

    changeSites(site) {
        this.sites.next(site);
    }
}
{% endhighlight %}

Les explico el funcionamiento del servicio, en la linea 3 declaramos la propiedad "sites" que sera el array (objeto) donde estaremos almacenando nuestros datos, este array sera del tipo "BehaviorSubject" para poder utilizar observables.

En la linea 4 a partir de la propiedad "sites" creamos nuestro observable, lo declaramos como publico ya que accederemos a este observable desde nuestro componente.

Por ultimo en las lineas 9 - 10 creamos un método para actualizar la información de nuestro array de datos.

## Utilizando nuestro servicio

Teniendo nuestro servicio listo, vamos a realizar algunos cambios en nuestro "home.component.ts" para adaptar el funcionamiento del mismo al servicio, primero importamos nuestro servicio al componente.-

{% highlight javascript linenos %}
import { SiteService } from '../../services/site.service';
{% endhighlight %}

Vamos a inicializar el servicio, esto lo hacemos en el constructor de la clase del componente, donde creamos la propiedad "_site" del tipo de nuestro servicio, de esta forma podremos acceder al observable y al método que actualiza los datos.-

{% highlight javascript linenos %}
constructor(private _site: SiteService)  {  }
{% endhighlight %}

Recordamos que en el método ngOnInit() tenemos inicializado manualmente el array sitiosInteneres, borramos esta parte ya que no sera necesaria.-

{% highlight javascript linenos %}
this.sitiosInteres = [
    { name: 'Blog Codeando', url: 'http://blog.codeando.club' },
    { name: 'Github', url: 'https://github.com/codeandomx' },
    { name: 'Twitter', url: 'https://twitter.com/codeandoclub' },
    { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
];
{% endhighlight %}

Ahora vamos a inicializar este array con los datos que provienen desde el servicio por medio del observable (dentro del método ngOnInit), para hacerlo debemos suscribirnos al observable.-

{% highlight javascript linenos %}
this._site.site.subscribe((res) => { this.sitiosInteres = res });
{% endhighlight %}

Ahora ya tenemos sincronizados los datos entre el componente y el servicio, solo falta actualizar el método onSubmit() para que además de almacenar los datos en el array "sitiosInteres" los actualice en el observable, de esta forma estarán disponibles para cualquier parte de la aplicación que utilice el servicio.-

{% highlight javascript linenos %}
onSubmit(f: NgForm) {
    this.sitiosInteres.unshift(this.siteModel.toObject());
    f.reset();
    this._site.changeSites(this.sitiosInteres);
}
{% endhighlight %}

Lo único que hacemos es pasar los datos provenientes del formulario al array del servicio mediante el método changesSites(), el cual se encarga de actualizar los datos en el servicio.

## Conclusiones

Puedes probar corriendo la aplicación y veras que todo funciona igual que antes, con la diferencia de que ahora los datos están almacenados en un servicio y por tanto están disponibles para toda la aplicación.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/05_servicios)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior:  [Formularios con Angular](http://blog.codeando.org/articulos/formularios-con-angular.html)
* Articulo siguiente: [Mostrar y ocultar elementos en Angular]()
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.