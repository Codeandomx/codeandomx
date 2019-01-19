---
title: Interpolación, property y event binding con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

![Interpolación, properties y databinding en Angular](/img/angular2.jpg)

Nuestra aplicación de Angular ya cuenta con un componente que nos va a permitir agregar y mostrar en pantalla enlaces de interés mediante un pequeño formulario, pero en este momento aun no realiza nada útil nuestra aplicación, es decir, aun no es funcional, en este articulo nos vamos a dedicar a darle un poco de esa funcionalidad que se necesita.

Puedes acceder al articulo anterior [plantillas y estilos CSS con Angulra](/articulos/plantillas-y-estilos-css-con-angular.html) para ver el proceso de creación de la plantilla y estilos con los que trabajaremos en este articulo, o si lo prefieres, puedes acceder a nuestro [repositorio de github](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/02_plantillas_y_estilos_css) para obtener el código directamente.

Al correr la aplicación se debe de ver de esta forma.-

![Aplicación con Angular](/img/angular3.jpg)

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/03_interpolacion_properties_y_databinding" target="_blank">Github</a>.
</div>

## Interpolación (interpolation)

La interpolación nos va a permitir mostrar el valor de las propiedades (declaradas en la clase de nuestro componente) en nuestra plantilla, la sintaxis es la siguiente.-

{% highlight javascript linenos %}
{ { propertyName  } }
{% endhighlight %}

La sintaxis anterior se debe de utilizar en nuestra plantilla, en la cual debemos de  colocar el nombre de la propiedad a mostrar entre doble llaves, vamos a ver un ejemplo en nuestra proyecto, abrimos el archivo "home.component.ts".-

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
            { name: 'Blog Codeando', url: '' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
    }
}
{% endhighlight %}

Vemos que en la linea 11 tenemos declarada una propiedad y la inicializamos dentro del método ngOnInit(), ahora vamos a declarar dos nuevas propiedades en la que almacenaremos algunos textos de nuestra plantilla.-

{% highlight javascript linenos %}
formTitle: string;
listTitle: string;
{% endhighlight %}

Y las inicializamos dentro del método ngOnInit().-

{% highlight javascript linenos %}
this.formTitle = "Agrega un item a la lista";
this.listTitle = "Lista de items";
{% endhighlight %}

Ahora mostraremos el valor de estas propiedades en nuestra plantilla mediante interpolación, la modificamos y debe quedar de esta forma.-

{% highlight html linenos %}
<div class="container title">
    <div class="col">
        <p>{ { formTitle } }</p>
    </div>
    <div class="col">
        <p>{ { listTitle } }</p>
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

Al correr nuestra aplicación debe lucir exactamente igual, con la diferencia de que ya estamos enlazando datos del componente a la plantilla.

## Enlace de propiedades (property binding)

El enlace de propiedades es unidirecciónal, al igual que la interpolación, podemos vincular datos de nuestro componente a la plantilla, para ver un ejemplo, creamos una propiedad.-

{% highlight javascript linenos %}
btnText: string;
{% endhighlight %}

Y la inicializamos dentro de nuestro método ngOnInit().-

{% highlight javascript linenos %}
btnText = "Agregar item";
{% endhighlight %}

Ahora para vincular la propiedad con nuestra plantilla existen otras dos formas además de la interpolación, una forma es la siguiente, debemos colocar el nombre del atributo entre corchetes y como valor de este atributo el nombre de la propiedad.-

{% highlight html linenos %}
<input type="submit" [value]="btnText">
{% endhighlight %}

La segunda forma es añadir "bind-" al atributo donde lo queremos mostrar y como valor de este atributo el nombre de la propiedad.-

{% highlight html linenos %}
<input type="submit" bind-value="btnText">
{% endhighlight %}

>La diferencia entre la interpolación y el enlace de propiedades (property binding) es que esta ultima es ideal para vincular propiedades de nuestro componente a valores de atributos de nuestra plantilla.

## Uso de la directiva ngFor

En nuestro componente tenemos una propiedad llamada "sitiosInteres" la cual inicializamos con 4 sitios, para mostrarlos en pantalla utilizamos la directiva ngFor (entraremos en detalle sobre directivas de angular en artículos posteriores), modificamos nuestra plantilla cambiamos esta parte.-

{% highlight html linenos %}
<div class="col">
    <p>No tiene ningun item.</p>
</div>
{% endhighlight %}

Por esta.-

{% highlight html linenos %}
<div class="col">
    <p *ngFor="let sitio of sitiosInteres">
        { { sitio.name } }: <br>
        <small>{ { sitio.url } }</small>
    </p>
</div>
{% endhighlight %}

Debemos ver en pantalla lo siguiente.-

![Aplicacion angular](/img/angular4.jpg)

## Enlace de eventos (event binding)

Los enlaces de eventos nos van a permitir comunicar datos y/o acciones de la plantilla a nuestro componente, veremos un ejemplo sencillo para entender este proceso, lo primero que vamos hacer es modificar nuevamente la plantilla del componente añadiendo un elemento "div" para mostrar un sitio seleccionado.-

{% highlight html linenos %}
<div class="col">
    <div>
        <p class="red">
            { { site.name } }: <br>
            <small>{ { site.url } }</small>
        </p>
    </div>
    <p *ngFor="let sitio of sitiosInteres">
        { { sitio.name } }: <br>
        <small>{ { sitio.url } }</small>
    </p>
</div>
{% endhighlight %}

Añadimos la clase "red" a nuestro archivo "home.component.css".-

{% highlight css linenos %}
.red {
    background-color: #f73d3d !important;;
}
{% endhighlight %}

Noten que en la linea 4 y 5 del código de la plantilla interpolamos el objeto "site", así que vamos a nuestro componente y crearemos una interfaz para nuestro objeto.-

{% highlight javascript linenos %}
interface iSite{
    name: string,
    url: string
}
{% endhighlight %}

> La interfaz debe ser declarada después de la clase para que no interfiera con la asignación de la clase al decorador Component.

Esta interfaz nos permitirá definir las propiedades y tipos de estas para el objeto "site", ahora dentro de la clase de nuestro componente creamos la propiedad "site" y como tipo de esta le asignamos la interfaz "iSite", como se muestra a continuación.-

{% highlight javascript linenos %}
site: iSite;
{% endhighlight %}

La inicializamos dentro del método ngOnInit() con los valores del primer sitio de interés que utilizamos.-

{% highlight javascript linenos %}
this.site = { name: 'Blog Codeando', url: '' };
{% endhighlight %}

Si corremos nuestra aplicación deberemos de ver lo siguiente en pantalla.-

![Aplicacion Angular](/img/angular5.jpg)

Ahora empezaremos a trabajar con enlace de eventos (event binding), estos eventos son con los que normalmente podemos trabajar con Javascript (no son propios de Angular), en nuestro caso trabajaremos con el evento "click", para utilizarlo debemos encerrarlo entre paréntesis y asignarle como valor el método que sera ejecutado al hacer clic en el elemento, modificamos esta parte de la plantilla.-

{% highlight html linenos %}
<p *ngFor="let sitio of sitiosInteres">
    { { sitio.name } }: <br>
    <small>{ { sitio.url } }</small>
</p>
{% endhighlight %}

Por esta.-

{% highlight html linenos %}
<p *ngFor="let sitio of sitiosInteres" (click)="setSite(sitio)">
    { { sitio.name } }: <br>
    <small>{ { sitio.url } }</small>
</p>
{% endhighlight %}

Vemos que añadimos el evento "click" y como argumento del método pasamos el objeto "sitio", ahora en la clase del componente creamos el método setSite().-

{% highlight javascript linenos %}
setSite(site: iSite) {
    this.site = site;
}
{% endhighlight %}

Lo que hace este método es recibir el objeto "sitio" en el que hacemos clic y lo asigna a la propiedad "site", de esta forma se mostrara en pantalla (en el recuadro rojo) la información  actualizada del sitio de interés seleccionado.

El código de nuestro componente queda de esta forma.-

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
    formTitle: string;
    listTitle: string;
    btnText: string;
    site: iSite;

    constructor() { }

    ngOnInit() {
        this.sitiosInteres = [
            { name: 'Blog Codeando', url: '' },
            { name: 'Github', url: 'https://github.com/codeandomx' },
            { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
            { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
        ];
        this.formTitle = "Agrega un item a la lista";
        this.listTitle = "Lista de items";
        this.btnText = "Agregar item";
        this.site = { name: 'Blog Codeando', url: '' };
    }
		
    setSite(site: iSite) {
        this.site = site;
    }
}

interface iSite{
    name: string,
    url: string
}
{% endhighlight %}

## Conclusiones

Además de estos conceptos que vimos, existe el enlace de datos bidireccional (two way data binding) que es una combinación de los tipos de enlaces anterior, lo veremos en funcionamiento en el siguiente ejemplo cuando veamos como trabajar con el formulario de nuestra aplicación.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/03_interpolacion_properties_y_databinding)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Plantillas y estilos CSS con Angular](/articulos/plantillas-y-estilos-css-con-angular.html)
* Articulo siguiente: [Formularios con Angular](/articulos/formularios-con-angular.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.