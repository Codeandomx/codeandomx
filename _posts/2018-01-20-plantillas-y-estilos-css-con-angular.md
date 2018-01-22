---
title: Plantillas y estilos CSS con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

En este articulo aprenderemos a trabajar con plantillas (templates) y estilos CSS para nuestros componentes, Angular nos proporciona un poderoso sistema de plantillas basado en HTML que nos permite comunicarnos ya sea de la plantilla al componente o viceversa (este ultimo lo veremos en el siguiente articulo), además, Angular nos permite trabajar con preprocesadores de CSS como [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html), [Sass](http://sass-lang.com/) y [Stylus](http://stylus-lang.com/), aunque nosotros vamos a trabajar con CSS en este articulo (sin preprocesador).

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de [Github](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/02_plantillas_y_estilos_css).
</div>

## Plantillas

Normalmente a la parte de las plantillas en una aplicación se les conoce como vistas siguiendo el modelo MVC, por lo pronto,  seguiremos trabajando con el ejemplo del articulo anterior (obtenlo en [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/01_Creacion_de_componentes)), abrimos el archivo "home.component.ts".-

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
            { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
    }
}
{% endhighlight %}

Pongamos atención en la linea 5 a la propiedad "templateUrl", en esta propiedad indicamos la ruta del archivo que contiene la plantilla de nuestro componente o podemos declarar la plantilla directamente como se muestra a continuación cambiando el nombre de la propiedad a "template", ejemplo.-

{% highlight javascript linenos %}
@Component({
    selector: 'app-home',
    template:  `
        <div *ngFor="let temp of sitiosInteres">
            <p><a href="{ { temp.url } }">{ { temp.name } }</a></p>
        </div>
    `,
    styleUrls: ['./home.component.css'],
})
{% endhighlight %}

Aunque este ultima forma no es la ideal ya que tendremos en un solo archivo la plantilla y la lógica del componente, lo mejor es tener la plantilla en el archivo designado para esto, así que abrimos el archivo "home.component.html".-

{% highlight html linenos %}
<div *ngFor="let temp of sitiosInteres">
    <p><a href="{ { temp.url } }">{ { temp.name } }</a></p>
</div>
{% endhighlight %}

Borramos su contenido y creamos la plantilla para nuestro componente.-

{% highlight html linenos %}
<div class="container title">
    <div class="col">
        <p>Agrega un item a la lista</p>
    </div>
    <div class="col">
        <p>Lista de items</p>
    </div>
</div>
<div class="container content">
    <div class="col">
        <form>
            <input type="text" name="name" placeholder="Ingrese el nombre del sitio">
            <input type="text" name="url" placeholder="Ingrese la url del sitio">
            <input type="submit" value="Agregar item">
        </form>
    </div>
    <div class="col">
        <p>No tiene ningun item.</p>
    </div>
</div>
{% endhighlight %}

Nuestra plantilla nos proporcionara un formulario para agregar items y mostrarlos en pantalla después de haberlos procesado en nuestro componente, si en este momento corremos la publicación se vera de la siguiente forma.-

![Plantilla sin estilo en Angular](/img/angular1.jpg)

Ahora aplicaremos estilos para mejorar la apariencia.

## Estilos (CSS)

Para empezar hablar de los estilos en Angular debemos volver al componente home (home.component.ts).-

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
            { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
    }
}
{% endhighlight %}

La propiedad que ahora nos interesa esta en la linea 6 "styleUrl", en esta propiedad indicamos la url del archivo de estilos de nuestro componente, o podemos utilizar la propiedad "style" para incorporar los estilos directamente en el componente como se ve a continuación.-

{% highlight javascript linenos %}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    style: [`
        body
        {
            background-color: #00cbff;
            color: #333;
            font-family: 'Source Sans Pro', 'verdana';
            font-size: 18px;
        }
    `]
})
{% endhighlight %}

Pero al igual que las plantillas, lo mejor es declarar el código CSS en el archivo .css del componente, en este caso "home.component.css", lo abrimos y ponemos el siguiente código en el.-

{% highlight javascript linenos %}
container {
    display: grid;
    grid-template-columns: 50% auto;
}
.col {
    padding: 0.5em 1em;
}
.title {
    background-color: #2277ff;
    color: #fcfcfc;
    font-size: 1.2em;
    text-align: center;
}
.content {
    background-color: #4499ff;
    color: #fcfcfc;
    padding: 2em 0;
}
.content input[type="text"] {
    border: 0;
    margin-bottom: 1em;
    padding: 0.8em;
    width: 80%;
}
.content input[type="submit"] {
    background-color: #00ff3b;
    border: 0;
    cursor: pointer;
    margin-bottom: 1em;
    padding: 0.8em;
    transition: all 0.25 ease-in;
}
.content input[type="submit"]:hover {
    background-color: #33ff6e;
}
.content p {
    background-color: #66bbff;
    margin: 0 0 1em 0;
    padding: .5em;
    width: 80%;
}
{% endhighlight %}

Estos estilos solo afectaran al componente "home", así que no afectaran el estilo del titulo ya que este se encuentra declarado en el componente principal (app.component.ts) de la aplicación, para ello abrimos el archivo "app.component.css" y agregamos el siguiente código.-

{% highlight javascript linenos %}
h1 {
    color: #fcfcfc;
}
{% endhighlight %}

También debemos crear algunos estilos globales para nuestra aplicación, para esto, angular ponen a disposición el archivo "styles.css" ubicado en el directorio "src", lo abrimos y agregamos el siguiente código.-

{% highlight javascript linenos %}
/* You can add global styles to this file, and also import other style files */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

html {
    height: 101%;
}
body {
    background-color: #00cbff;
    color: #333;
    font-family: 'Source Sans Pro', 'verdana';
    font-size: 18px;
}
ul {
    list-style: none;
    margin: 0 0 1.5em 0;
    padding: 0;
}
ul li {
    display: inline-block;
}
ul li a {
    color: #555;
    text-decoration: none;
    transition: 0.25 all ease-in;
}
ul li a:hover {
    color: #999;
}
{% endhighlight %}

Si corremos la aplicación debemos ver el siguiente resultado.-

![Aplicación con estilos en Angular](/img/angular3.jpg)

## Conclusiones

Si has seguido el curso, ya deberías de contar con una aplicación funcional hasta cierto punto, en el siguiente articulo empezaremos a trabajar con el enlace de datos de plantilla a componente y viceversa.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/02_plantillas_y_estilos_css)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Crear componentes en Angular](http://blog.codeando.org/articulos/crear-componentes-en-angular.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.