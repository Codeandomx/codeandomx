---
title: Crear componentes en Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

![Angular](/img/angular2.jpg)

En el articulo anterior explicamos en que consiste la [arquitectura del componente principal de Angular](/articulos/arquitectura-de-componentes-en-angular.html) (este componente lo obtenemos por defecto al **crear nuestro proyecto**), te recomiendo que le des una leída para que puedas tener los conocimientos sobre la función que realiza cada uno de los archivos delcomponente y de esta forma se facilite la **creación de nuevos componentes**, sin más empecemos.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>.
</div>

## Crear mi primer componente

Para **crear nuestro componente** vamos a utilizar [Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), al utilizar esta herramienta estaremos optimizando en gran parte nuestro trabajo, así que para empezar necesitamos abrir la shell (símbolo del sistema en Windows) y ubicarnos en la carpeta principal de nuestro proyecto y ejecutar el siguiente comando.-

{% highlight javascript linenos %}
$ ng generate component name_component
{% endhighlight %}

> Recuerda que ng es el comando principal para utilizar **Angular CLI**, puedes obtener más información sobre este comando si ejecutas en la terminal "ng help".

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Antes de ejecutar el comando anterior solo hay que cambiar "name_component" por el nombre que le queremos dar a nuestro componente, por ejemplo podemos crear el componente "home" utilizamos el siguiente comando.-

{% highlight javascript linenos %}
$ ng generate component components/home
{% endhighlight %}

Nuestro componente se creara dentro del directorio components, esto lo hacemos con la finalidad de modularizar aun más nuestra aplicación, si todo marcha bien se nos mostrara en la terminal lo siguiente.-

{% highlight javascript linenos %}
installing component
    create src/app/components/home/home.component.css
    create src/app/components/home/home.component.html
    create src/app/components/home/home.component.spec.ts
    create src/app/components/home/home.component.ts
    update src/app/app.module.ts
{% endhighlight %}

Si leiste el articulo sobre [arquitectura de componentes en Angular](/articulos/arquitectura-de-componentes-en-angular.html) ya estarás familiarizado con los archivos que se acaban de crear y entenderás la funcionalidad de cada uno.

## Analizando el componente creado

Lo primero en tomar a cuenta es que nuestro componente se genero dentro de un directorio nuevo (con el nombre que le dimos al componente), esto para tener un mejor control sobre su **estructura de archivos**, la parte lógica la encontramos en el archivo "home.component.ts" que vemos a continuación.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit
{
    constructor() { }

    ngOnInit() { }
}
{% endhighlight %}

El componente nuevo es idéntico en su estructura al componente principal de la aplicación, con una sola diferencia, en este nuevo componente tenemos la implementación del método OnInit (el cual también se **importa desde el core de Angular**) en la linea 9.

La funcionalidad de este método es la misma que el constructor de la clase del componente, solo que se recomienda el uso de ngOnInit() en lugar del constructor de la clase para inicializar las propiedades que vamos a utilizar, esto con el fin de optimizar los test que vallamos a realizar en nuestra aplicación, por ejemplo podemos declarar un objeto con sitios de interés como se muestra a continuación.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit
{
    sitiosInteres: any = [];

    constructor() { }

    ngOnInit() {
        this.sitiosInteres = [
            { name: 'Blog Codeando', url: 'http://blog.codeando.club' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeandoclub' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
    }
}
{% endhighlight %}

> Para programar la aplicación de Angular debemos utilizar Typescript, aunque no es obligatorio, les recomiendo que lo utilicen, de esta forma facilitaremos tanto programar cada pate de nuestra aplicación y el trabajo pesado se lo dejaremos a la compilación (transpilación) automática de de Angular.

Las propiedades y métodos que declaremos en la clase del componente los podemos utilizar en la plantilla del mismo, los cuales encontramos en los archivos "home.component.html" que es la plantilla y "home.component.css" que es donde colocamos los estilos del componente, un ejemplo de la plantilla puede ser el siguiente.-

{% highlight html linenos %}
<div *ngFor="let temp of sitiosInteres">
    <p><a href="{ { temp.url } }">{ { temp.name } }</a></p>
</div>
{% endhighlight %}

Aunque nos adelantamos un poco al tema de las **directivas en Angular**, lo que hace el ejemplo anterior es mostrar la información que tenemos guardada en la propiedad sitiosInteres.

## Declarar el componente nuevo

Aparte de la creación del componente, Angular CLI también declara de forma automática nuestro componente en el modulo principal de la aplicación como se muestra en el siguiente código.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}

En la linea 7 importamos el componente y en la linea 12 lo incluimos en la propiedad "declarations" para que de esta forma pueda estar disponible en el momento en que lo vallamos utilizar.

Si necesitas que el componente nuevo sea declarado en otro modulo, lo puedes indicar al momento de crearlo mediante el flag "--module" como se muestra a continuación.-

{% highlight javascript linenos %}
$ ng generate component name_component --module path_module
{% endhighlight %}

> Solo hay que cambiar el nombre del componente y el path_module es la ubicacion relativa del modulo, por ejemplo.- "modules/home.module".

## Utilizar el componente

Por ultimo solo nos queda utilizar nuestro componente en el proyecto, para ello solo necesitamos utilizar el elemento que declaramos "app-home".-

{% highlight html linenos %}
<app-home></app-home>
{% endhighlight %}

> El componente lo podemos utilizar dentro de templates de otros componentes (incluyendo el principal) o directamente en el "index.html".

En nuestro caso lo vamos a incluir en la plantilla principal del proyecto (app.component.html) como se muestra a continuación.-

{% highlight html linenos %}
<h1>
{ {  title  } }
</h1>
<app-home></app-home>
{% endhighlight %}

Iniciamos el servidor de angular.-

{% highlight html linenos %}
$ ng serve
{% endhighlight %}

Y visualizaremos lo siguiente en pantalla.-

![Componentes angular](/img/component1.jpg)

## Conclusiones

Acabamos de aprender la forma más simple de crear componentes y registrarlos como parte de nuestra aplicación con Angular CLI, aunque también podemos crearnos manualmente, pero ya se los dejo a su elección.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Arquitectura de componentes en Angular](http://blog.codeando.org/articulos/arquitectura-de-componentes-en-angular.html)
* Articulo siguiente: [Plantillas y estillos CSS en Angular](http://blog.codeando.org/articulos/plantillas-y-estilos-css-con-angular.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.