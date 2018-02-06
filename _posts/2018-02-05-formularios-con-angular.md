---
title: Formularios con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

![Formularios forms con Angular](http://blog.codeando.org/img/angular2.jpg)

El uso de formularios es indispensable en cualquier tipo de aplicación (inicio de sesión, contacto, ayuda, etc), y con Angular no podría ser la excepción, si ya has trabajado con formularios utilizando Javascript puro (un trabajo un poco tedioso), te sorprenderá la diferencia al trabajar con formularios en Angular ya que es muy sencillo.

> En Angular 5+, existen dos formas de trabajar con formularios, Template Driven y Reactive Forms, nosotros utilizaremos en este curso la primer forma, formularios basados en plantilla, donde todo lo que necesita nuestro formulario es declarado en la plantilla del componente.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/04_formularios" target="_blank">Github</a>.
</div>

## Modelos

En Javascript puro, nos encargamos de capturar cada uno de los datos de los "input" mediante eventos y/o métodos del DOM, estos datos los almacenamos en variables para su posterior uso, pero con Angular nos vamos olvidar de este proceso, ya que en su lugar declararemos un **modelo de datos** y con ayuda de este, capturaremos los datos.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Un modelo determina la estructura lógica y el modo en como vamos a almacenar, organizar y manipular nuestros datos (generalmente en la base de datos), en nuestro caso aun no trabajaremos con base de datos, pero es ideal trabajar con modelos para cada uno de nuestros formularios.

> Para crear los modelos no utilizaremos [Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), lo haremos de forma manual.

Dentro del directorio "app" vamos a crear un directorio al que llamaremos "models" (aquí guardaremos todos nuestros modelos), dentro de este directorio creamos un archivo al que llamamos "SiteModel.ts" con el siguiente contenido.-

{% highlight javascript linenos %}
export class SiteModel
{
    name : string;
    url : string;

    // Metodos getter
    getName() {
        // Quitamos espacios en blanco
        let name = this.name.trim();
        // Ponemos en minusculas la primer letra
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    getUrl() {
        // Ponemos el string en minusculas
        let url = this.url.toLowerCase();
        // Quitamos todos los espacios en blanco
        return url.replace(/ /g, "");
    }

    // Metodos
    toObject(){
        return {
            name: this.getName(),
            url: this.getUrl()
        }
    }
}
{% endhighlight %}

> Los modelos normalmente son clases, por eso el nombre del archivo debe iniciar con mayúscula, además, recuerde que en angular los archivos deben tener la extensión TS por que trabajamos con TypeScript.

Nuestro modelo es una clase y en la linea 1 al ser declara la exportamos para poder utilizarla en cualquiera de los componentes, en las lineas 3 y 4 tenemos declaradas las propiedades de nuestro modelo, en este caso son los datos que obtendremos mediante el formulario.

En las lineas 6 - 18 tenemos declarados (opcionalmente) los métodos getter (en Javascript no son muy necesario trabajar con métodos setter, aunque puedes utilizarlos) los cuales devuelven el valor de cierta propiedad (referenciada en el nombre del método) pero con las modificaciones pertinentes.

Por ultimo en las lineas 20 - 27 tenemos un método que nos devolverá un objeto en formato JSON ya con las propiedades modificadas, más adelante lo vamos a necesitar.

## Dependencias necesarias

Si creaste la aplicación con Angular CLI (o utilizas el ejemplo del curso) el uso de formularios ya viene integrado en nuestra aplicación, de lo contrario abre el modulo principal de la aplicación (app.module.ts) y añade el soporte para formularios.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

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

En la linea 3 importamos "FormsModule", un modulo de Angular que nos permitirá trabajar con formularios, además, en la linea 16 la añadimos a la propiedad "imports", para que este disponible en nuestra aplicación.

Abrimos nuestro componente home (home.component.ts), y añadimos los módulos necesarios para los formularios, también importamos nuestro modelo "SiteModel.ts" como se muestra a continuación.-

{% highlight javascript linenos %}
import { FormControl, Validators, NgForm } from '@angular/forms';
import { SiteModel } from '../../models/SiteModel';
{% endhighlight %}

Ya tenemos lo necesario para empezar a trabajar con formularios en Angular.

## Trabajando con formularios en Angular

La mayor parte de nuestro trabajo estará en la plantilla del componente, así que abrimos el archivo "home.component.html" y nos enfocamos en la parte del formulario.-

{% highlight html linenos %}
<form>
    <input type="text" name="name" placeholder="Ingrese el nombre del sitio"  required>
    <input type="text" name="url" placeholder="Ingrese la url del sitio" required>
    <input type="submit" bind-value="btnText">
</form>
{% endhighlight %}

Vamos a modificar la primer linea, al elemento "form" le vamos añadir la directiva "ngSubmit" con la que indicamos el método de nuestro componente que sera activado al enviar el formulario, además, añadimos el identificador para nuestro formulario de la siguiente forma.-

{% highlight html linenos %}
<form (ngSubmit)="onSubmit(siteForm)" #siteForm="ngForm">
    ...
</form>
{% endhighlight %}

> En las versiones recientes de Angular los identificadores se utilizan con el símbolo # y no con id="".

Note que al identificador del formulario (#siteForm) le asignamos la directiva "ngForm", la cual nos permitirá crear grupos de control para nuestro formulario, además de darle algunas funcionalidades adicionales.

Ahora trabajemos con los "input" del formulario, cada uno de estos es considerado un control del formulario, a estos controles le vamos a añadir la directiva "ngModel" la cual nos va permitir registrar las entradas de datos en "ngForm".-

{% highlight html linenos %}
<input type="text" name="name" minlength="10" placeholder="Ingrese el nombre del sitio" [(ngModel)]="siteModel.name" required />
<input type="text" name="url" minlength="10" placeholder="Ingrese la url del sitio" [(ngModel)]="siteModel.url" required />
{% endhighlight %}

En la directiva "ngModel" indicamos que el dato ingresado en el "input" sea almacenado en la propiedad "name" de nuestro modelo "siteModel" (tomando en cuenta el primer input).

En los controles del formulario utilizamos los atributos "minlength" y "required", esto lo hacemos con el fin de mantener cierta validez antes de procesarlo, ahora modificamos el "input" tipo "submit".-

{% highlight html linenos %}
<input type="submit" [disabled]="!siteForm.form.valid" bind-value="btnText" />
{% endhighlight %}

Note que añadimos un [manejador de eventos](/articulos/interpolacion-property-y-event-binding-con-angular.html) para deshabilitar el envió del formulario, el cual recibe un "true" si se cumple con la validez asignada en todos los controles del formulario, es decir, cada "input" de nuestro formulario deberá contener al menos 10 caracteres para poder enviar el formulario.

Por ultimo necesitamos crear el método "onSubmit" en la clase de nuestro componente, este método recibe un parámetro del tipo "ngForm" en el cual van los datos capturados por los controles del formulario.-

{% highlight javascript linenos %}
// manejador del formulario
onSubmit(f: NgForm) {
    this.sitiosInteres.unshift(this.siteModel.toObject());
    f.reset();
}
{% endhighlight %}

El método añade a nuestro objeto "sitiosInteres" los datos capturados por el formulario, si corren la aplicación notaran que al ingresar un sitio en el formulario este se añade al principio de la lista del lado derecho, por ultimo en la linea 4, reseteamos (borramos los datos) los controles del formulario.

## Conclusiones

Realmente es muy fácil trabajar con formularios en Angular, aunque este articulo maneja los conceptos básicos ya que podemos añadir más funcionalidades a estos.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/04_formularios)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior:  [interpolacion, property y event binding en Angular](http://blog.codeando.org/articulos/interpolacion-property-y-event-binding-con-angular.html)
* Articulo siguiente: [Servicios con Angular](http://blog.codeando.org/articulos/servicios-con-angular.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.