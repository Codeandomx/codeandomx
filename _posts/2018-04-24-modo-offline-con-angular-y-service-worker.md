---
title: Modo offline con Angular y service worker
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Modo offline con Angular y service worker](/img/angular2.jpg)

Un problema habitual de las SPA (Single Page Application) es que tarda mucho en cargar por que toda la lógica de la aplicación se carga en un solo archivo, gracias a la API de service worker (incluidos en Angular 5+) podemos cargar más rápido nuestra aplicación y hacer que funcione fuera de linea (sin internet), en este articulo vamos a crear una aplicación con angular y a configurar un service worker para la misma.

<div class="redes-background">
Te interesa el tema?, accede al <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, , puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/development-angular-app-with-service-worker" target="_blank">Github</a>.
</div>

## Que es un service worker

Es un programa que se ejecuta de manera independiente en el navegador web, trabaja como un intermediario entre nuestra aplicación y la red, entre las tareas que puede realizar se encuentran.-

* Almacenar archivos estáticos en la cache del navegador.
* Decidir que acciones realizar cuando se pierda la conexión a internet.
* Cuando carga la aplicación puede tomar los archivos estáticos de la cache del navegador para mejorar la velocidad de carga.

En otras palabras tenemos mucha flexibilidad para manipular el comportamiento de nuestra aplicación, puedes encontrar más información  en [Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=es).

## Crear aplicación con Angular CLI

Para este articulo debemos trabajar con la ultima versión de [Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), la puedes instalar con el siguiente comando.-

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
$ npm install -g @angular/cli@latest
{% endhighlight %}

Una ves instalado Angular CLI vamos a crear nuestro proyecto y acceder a el.-

{% highlight javascript linenos %}
$ ng new angular-service-worker && cd angular-service-worker
{% endhighlight %}

## Configurar el service worker

Vamos a **configurar nuestro service worker** en la aplicación que recién creamos, así que como primer paso creamos el archivo "service-worker.js" en el directorio src del proyecto y lo vamos a dejar vació.

![crear service workwer angular](/img/sw1.jpg)

Ahora vamos a agregar el siguiente código en el archivo "index.html", este código debe colocarse justa antes de la etiqueta de cierre del elemento "body".-

{% highlight javascript linenos %}
// Service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker registered');
    }).catch(function(err) {
        console.log('Service Worker registration failed: ', err);
    });
}
{% endhighlight %}

Les explico, en la linea 2 verificamos si el navegador donde se carga la aplicación tiene soporte para la **API de service worker**, si es así, en la linea 3 registramos el servicio, en caso contrario, en la linea 6 mostramos un mensaje de error.

También necesitamos indicarle a Angular CLI que el archivo "service-worker.js" debe incluirse entre los archivos que forman parte del proyecto al momento de compilarse, para esto incluimos en el archivo "angular-cli.json" lo siguiente (linea 4).-

{% highlight javascript linenos %}
"assets": [
    "assets",
    "favicon.ico",
    "service-worker.js"
],
{% endhighlight %}

## Generar service worker con SW Precache

Crear el código para un servie worker es bastante tedioso, afortunadamente existen librerías como [SW Precache](https://github.com/GoogleChromeLabs/sw-precache) que nos ayudan a generar services worker para nuestras aplicaciones, para utilizarla debemos instalarla con el siguiente comando.-

{% highlight javascript linenos %}
$ npm install --save-dev sw-precache
{% endhighlight %}

SW Precache necesita configurarse para trabajar, así que debemos crear el archivo "sw-precache-config.js" en el directorio principal de la aplicación, y agregamos el siguiente código.-

{% highlight javascript linenos %}
module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css'
    ]
};
{% endhighlight %}

A grandes rasgos, indicamos que los archivos que se van a tomar para generar el service worker estén en el directorio "dist" (donde se generan los archivos listos para producción) y que el archivo de entrada sea "index.html", además, indicamos que los archivos estáticos a cachear sean el "index.html" y los que terminen con extensión css y js.

Si queremos también cachear algunos recursos podemos incluir el directorio "assets" como se muestra a continuación.-

{% highlight javascript linenos %}
module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/**.*'
    ]
};
{% endhighlight %}

Por ultimo vamos a añadir a nuestro "package.json" las instrucciones para la creación de nuestro service worker, las añadimos a la propiedad "scripts" (ultima linea).-

{% highlight javascript linenos %}
"scripts": {
    "start": "ng serve",
    "lint": "tslint \"src/**/*.ts\"",
    "test": "ng test",
    "pree2e": "webdriver-manager update",
    "e2e": "protractor",
    "sw": "sw-precache --root=dist --config=sw-precache-config.js"
}
{% endhighlight %}

Ahora empecemos el proceso para la creación de nuestro service worker, vamos a compilar nuestro proyecto para el entorno de producción con el siguiente comando.-

{% highlight javascript linenos %}
$ ng build --prod
{% endhighlight %}

Si todo marcha bien veremos lo siguiente en pantalla.-

{% highlight javascript linenos %}
Date: 2018-02-07T03:04:54.031Z                                                          
Hash: c66cb87c2db13f260ae4
Time: 94624ms
chunk {0} polyfills.f20484b2fa4642e0dca8.bundle.js (polyfills) 59.4 kB [initial] [rendered]
chunk {1} main.34c2037568943aee5abc.bundle.js (main) 152 kB [initial] [rendered]
chunk {2} styles.9c0ad738f18adc3d19ed.bundle.css (styles) 79 bytes [initial] [rendered]
chunk {3} inline.ef66fc99c35b976a47ae.bundle.js (inline) 1.45 kB [entry] [rendered]
{% endhighlight %}

Y en nuestro proyecto se creara el directorio "dist" donde encontraremos los archivos de nuestro proyecto optimizados para subirlos al servidor como se muestra en la siguiente imagen.-

![Build Angular](/img/sw2.jpg)

Estos archivos son con los que utilizaremos para configurar nuestro service worker, para hacerlo ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ npm run sw
{% endhighlight %}

Si todo marcha bien veremos lo siguiente en pantalla.-

{% highlight javascript linenos %}
> sw-precache --root=dist --config=sw-precache-config.js

Total precache size is about 214 kB for 5 resources.
dist/service-worker.js has been generated with the service worker contents.
{% endhighlight %}

Nuestro service worker esta listo para trabajar.

## Servidor web para service worker

Angular CLI incorpora su propio servidor web local para pruebas de la aplicación, pero tiene una limitante, y es que no podemos trabajar con los archivos generados para producción, por tal motivo vamos a instalar y configurar un servidor local para trabajar con estos tipos de archivos.

Instalamos el servidor local con el siguiente comando.-

{% highlight javascript linenos %}
$ npm install -g live-server
{% endhighlight %}

Y vamos a añadir a nuestro "package.json" las instrucciones para que pueda correr nuestra aplicación con este servidor local y que la ruta principal sea el directorio "dist", las añadimos a la propiedad "scripts" (ultima linea).-

{% highlight javascript linenos %}
"scripts": {
    "start": "ng serve",
    "lint": "tslint \"src/**/*.ts\"",
    "test": "ng test",
    "pree2e": "webdriver-manager update",
    "e2e": "protractor",
    "sw": "sw-precache --root=dist --config=sw-precache-config.js",
    "static-serve": "cd dist && live-server --port=4200 --host=localhost --entry-file=/index.html"
},
{% endhighlight %}

Corremos el servidor y podemos ver funcionando la aplicación en el navegador.-

{% highlight javascript linenos %}
$ npm run static-serve
{% endhighlight %}

Ingresamos al servidor local y abrimos las herramientas para desarrollador, vamos al apartado "aplicaciones" y vemos como se ha instalado nuestro service worker y esta corriendo.-

![Instalando y corriendo nuestro service worker](/img/sw3.jpg)

Ahora para verificar que realmente funciona el service worker, seleccionamos la casilla "Offline" y recargamos la pagina, veremos que que nos muestra la aplicación como si estuviéramos en linea.-

![Aplicación Angular con service worker](/img/sw4.jpg)

## Conclusiones

Ahora nuestra aplicación funciona fuera de linea, un plus para nuestros cliente, los service worker son muy practicos, si quieres aprender más sobre el tema te recomiendo que pruebes creando un service worker manualmente, es decir, sin utilizar librerías.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/development-angular-app-with-service-worker).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular).

Que tengan feliz código.