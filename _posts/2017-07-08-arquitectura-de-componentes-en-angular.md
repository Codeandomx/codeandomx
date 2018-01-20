---
title: Arquitectura de componentes en Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Angular](/img/angular2.jpg)

En este articulo vamos a adentrarnos un poco mas a la temática de **Angular** conociendo su componente principal, si quieres seguir este articulo es necesario **crear un proyecto nuevo con angular** como lo hicimos en el articulo anterior (también puedes utilizar algún proyecto que ya tengas).

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>.
</div>

## Conociendo el componente principal

En la estructura del proyecto de Angular podemos encontrar el componente principal dentro de la carpeta "app" como se puede observar en la siguiente imagen.-

![Componente principal](/img/estructura_angular_cli.jpg)

### app.component.ts

En la carpeta encontramos 5 archivos en los que encontraremos la **declaración e importación del componente al proyecto** para que este pueda utilizarse correctamente, el primer archivo que nos interesa es "app.component.ts" en el que encontramos el siguiente código.-

{% highlight javascript linenos %}
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Bienvenidos a codeando';
}
{% endhighlight %}

Ahora vamos a analizar el código, en la linea 1 se importa "Component" del núcleo de angular, "Component" es un decorador que utiliza angular para poder marcar una clase como un componente de angular y de esta forma proporcionar metadatos adicionales que determinan cómo se debe procesar, instanciar y utilizar el componente en tiempo de ejecución de nuestra aplicación, puedes obtener mas información sobre el decorador Componente en la [documentación oficial de  Angular](https://angular.io/api/core/Component).

> Un **componente en Angular** facilita la escritura de una aplicación de forma similar a la utilización de **Web Components** siendo este el nuevo estilo de arquitectura de aplicación de Angular.  Ventajas de los componentes:  Configuración más sencilla; Optimizado para la arquitectura basada en componentes.

> Los decoradores forman parte de [ES6](/articulos/introduccion-a-es6-javascript.html) y dedicare un articulo completo para explicar su funcionamiento.

De la linea 3 a la 7 le pasamos algunas propiedades al decorador "Component" para que pueda marcar nuestro componente y de esta forma poder utilizarlo, entre las propiedades que predefinidas para componentes estamos utilizamos las siguientes.-

* selector.- Indicamos el nombre del elemento HTML con el que podremos acceder al componente.
* templateUrl.- Indicamos la ruta relativa del template a utilizar para nuestro componente, aunque no es muy recomendado tambien podemos utilizar HTML directamente.
* styleUrls.- Indicamos la o las rutas relativas de los archivos CSS que utiliza nuestro componente.

Por ultimo en las lineas 9 a 11 se exporta una clase con el nombre de nuestro componente en la cual podemos declarar propiedades para utilizar en el template del componente.

### app.component.css

En este archivo se coloca el código CSS que el componente principal va a utilizar, por defecto el archivo esta vació. Cabe mencionar que el CSS declarado en este archivo solo afrectara al componente al que pertenece.

### app.component.html

Se trata del template para nuestro componente, lo podemos estructurar mediante HTML y con ayuda de algunas directivas de Angular darle funcionalidad, al crear la aplicación se tiene el siguiente código por defecto.-

{% highlight html linenos %}
<h1>
    { { title } }
</h1>
{% endhighlight %}

### app.component.spec.ts

En este archivo encontraremos la configuración para el componente, no es necesario adentrarnos en su funcionamiento ya que se crea de forma automática.

## Modulo principal de la aplicación

En el archivo "app.module.ts" tenemos declarado el modulo principal de nuestra aplicación de Angular, contiene el siguiente código.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent
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

Por el momento solo nos importa entender algunas lineas de código, empezamos con la linea 6, en esta linea importamos el **componente principal** descrito anteriormente, en la linea 9 a 11 mediante la propiedad "declarations" se esta declarando al componente principal como parte del modulo, de esta forma podemos utilizarlo sin ningún problema, en esta propiedad se declaran todos los componentes que nuestra aplicación tendrá, el componente principal debe ser el primero en ser declarado.

Por ultimo en la linea 18 mediante la propiedad "bootstrap" se indica que al inicializar el modulo se inicie nuestro componente principal también.

## Inicializar la aplicación

Al llegar a este punto se debe de entender el proceso que hace Angular para poder trabajar con el componente y modulo principal, resumiendolo, se declara el componente con sus respectivos archivos (CSS, template) y después de declaran en el modulo principal de la aplicación, pero ahora solo falta saber como se inicializa dicho modulo, observen el siguiente código.-

{% highlight javascript linenos %}
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
{% endhighlight %}

En la linea 4 importamos el modulo y en la linea 11 indicamos que cuando se inicialice la aplicación sea llamado el modulo principal.

> Se trata del archivo "main.ts" y lo puedes encontrar en el directorio "src" del proyecto.

## Utilizar un componente

Para utilizar un componente basta con llamarlo de la siguiente forma, puede ser en cualquier plantilla (componente) o directamente en el index.html de la aplicación, ejemplo.-

{% highlight html linenos %}
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>CodeandoAngular</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
    <app-root>Loading...</app-root>
</body>
</html>
{% endhighlight %}

En la linea 12 es donde mandamos llamar a nuestro componente princiapl.

## Conclusiones

De esta forma es como trabaja Angular, es importante entenderla para no perdernos en los siguientes artículos donde ya empezaremos a crear código.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Mi primera aplicación con Angular y Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html).
* Articulo siguiente: [Crear componentes en Angular](/articulos/crear-componentes-en-angular.html).
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.