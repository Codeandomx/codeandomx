---
title: Crear componentes en Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Angular](/img/angular2.jpg)

En el articulo anterior explicamos en que consiste la [arquitectura del componente principal de Angular](/articulos/arquitectura-de-componentes-en-angular.html) (este componente lo obtenemos por defecto al **crear nuestro proyecto**), te recomiendo que le des una leída para que puedas tener los conocimientos sobre la función que realiza cada uno de los archivos en el componente y de esta forma se facilite la **creación de nuevos componentes**, sin más empecemos.

## Crear mi primer componente

Para **crear nuestro componente** vamos a utilizar [Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), al utilizar esta herramienta estaremos optimizando en gran parte nuestro trabajo, así que para empezar necesitamos abrir nuestra terminal (símbolo del sistema en Windows) y ubicarnos en la carpeta principal de nuestro proyecto y ejecutar el siguiente comando.-

{% highlight javascript linenos %}
$ ng generate component name_component
{% endhighlight %}

> Recuerda que ng es el comando principal para utilizar **Angular CLI**, puedes obtener más información sobre este comando si ejecutas en la terminal "ng help".

Antes de ejecutar el comando anterior solo hay que cambiar "name_component" por el nombre que le queremos dar a nuestro componente, por ejemplo podemos crear el componente "demo", si todo marcha bien se nos mostrara en la terminal lo siguiente.-

{% highlight javascript linenos %}
installing componen/articulos/arquitectura-de-componentes-en-angular.htmlt
    create src/app/demo/demo.component.css
    create src/app/demo/demo.component.html
    create src/app/demo/demo.component.spec.ts
    create src/app/demo/demo.component.ts
    update src/app/app.module.ts
{% endhighlight %}

Si leiste el articulo sobre [arquitectura de componentes en Angular](/articulos/arquitectura-de-componentes-en-angular.html) ya estarás familiarizado con los archivos que se acaban de crear y entenderás la funcionalidad de cada uno.

## Analizando el componente creado

Lo primero en tomar a cuenta es que nuestro componente se genero dentro de un directorio nuevo (con el nombre que le dimos al componente), esto para tener un mejor control sobre su **estructura de archivos**, la parte lógica la encontramos en el archivo "demo.component.ts" que vemos a continuación.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})

export class DemoComponent implements OnInit
{
   	constructor() { }

	  ngOnInit() { }
}
{% endhighlight %}

El componente nuevo es idéntico en su estructura al componente principal de la aplicación con una sola diferencia, esta es la implementación de OnInit (el cual también se **importa desde el core de Angular**) en la linea 9, y por lo tanto podemos hacer uso del método ngOnInit().

La funcionalidad de este método es la misma que el constructor de la clase del componente, solo que se recomienda el uso de ngOnInit() en lugar del constructor de la clase para inicializar las propiedades que vamos a utilizar en la clase del componente con el fin de optimizar los test que vallamos a realizar en nuestra aplicación, por ejemplo podemos declarar un objeto con sitios de interés.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css'],
})

export class DemoComponent implements OnInit
{
    sitiosInteres: any = [];

   	constructor() { }

	  ngOnInit() {
        this.sitiosInteres = [
            { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
    }
}
{% endhighlight %}

> Para programar la aplicación de Angular debemos utilizar Typescript, aunque no es obligatorio, les recomiendo que lo utilicen, de esta forma facilitaremos tanto programar cada pate de nuestra aplicación y el trabajo pesado se lo dejaremos a la compilación (transpilación) automática de de Angular.

Las propiedades y métodos que declaremos en la clase del componente los podemos utilizar en la plantilla del mismo, los cuales encontramos en los archivos "demo.component.html" que es la plantilla y "demo.component.css" que es donde colocamos los estilos del componente, un ejemplo de la plantilla puede ser el siguiente.-

{% highlight html linenos %}
<div *ngFor="let temp  of sitiosInteres">
    <p><a href="{{temp.url}}">{{temp.name}}</a></p>
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
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent
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

En la linea 7 se importa nuestro componente y en la linea 12 declaramos el componente en la propiedad "declarations" para que de esta forma pueda estar disponible en el momento que lo vallamos utilizar.

Si necesitas que el componente nuevo sea declarado en otro modulo, lo puedes indicar al momento de crearlo mediante el flag "--modulo" como se muestra a continuación.-

{% highlight javascript linenos %}
$ ng generate component name_component --module path_module
{% endhighlight %}

> Solo hay que cambiar el nombre del componente y el path_module es la ubicacion relativa del modulo, por ejemplo.- "modules/demo.module".

## Utilizar el componente

Por ultimo solo nos queda utilizar nuestro componente en el proyecto, para ello solo necesitamos utilizar el elemento que declaramos "app-demo".-

{% highlight html linenos %}
<app-code></app-code>
{% endhighlight %}

> El componente lo podemos utilizar dentro de templates de otros componentes (incluyendo el principal) o directamente en el "index.html".

## Conclusiones

Acabos de aprender la forma más simple de crear componentes y registrarlos como parte de nuestra aplicación con Angular CLI, aunque también podemos crearnos manualmente, pero ya se los dejo a su elección.

Que tengan feliz código.