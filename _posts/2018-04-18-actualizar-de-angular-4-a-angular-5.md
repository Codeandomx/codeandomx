---
title: Actualizar de Angular 4 a Angular 5
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Angular](/img/angular2.jpg)

[MicroPost] si estas interesado en actualizar un proyecto ya existente de Angular tienes dos opciones para elegir, la primera es [actualizar Angular CLI](http://blog.codeando.org/articulos/actualizar-angular-cli-y-crear-proyecto-para-angular-5.html) y crear un nuevo proyecto en Angular 5, si lo haces de esta forma, una vez creado el proyecto nuevo solo debes copiar los archivos (componentes, servicios, etc) de tu proyecto anterior al nuevo.

La segunda opción es la que describimos a continuación, en mi opinión es mejor.

<div class="redes-background">
Puedes acceder al <a href="http://github.com/codeandomx/curso-de-introduccion-a-angular" target="_blank">curso gratuito de Angular</a> para aprender más sobre este framework.
</div>

## Actualizar a Angular 5

Lo primero que debemos hacer es actualizar las dependencias de Angular del archivo package.json como se muestra a continuación.-

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
{
    "name": "update-to-angular-5",
    "version": "0.0.0",
    "license": "MIT",
    "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e"
    },
    "private": true,
    "dependencies": {
        "@angular-devkit/core": "^0.5.6",
        "@angular/common": "^5.2.9",
        "@angular/compiler": "^5.2.9",
        "@angular/core": "^5.2.9",
        "@angular/forms": "^5.2.9",
        "@angular/http": "^5.2.9",
        "@angular/platform-browser": "^5.2.9",
        "@angular/platform-browser-dynamic": "^5.2.9",
        "@angular/platform-server": "^5.2.9",
        "@angular/router": "^5.2.9",
        "core-js": "^2.4.1",
        "webpack": "^4.5.0",
        "zone.js": "^0.8.14"
    },
    "devDependencies": {
        "@angular/cli": "1.5.0",
        "@angular/compiler-cli": "^5.2.9",
        "@angular/language-service": "^5.0.0",
        "@types/jasmine": "~2.5.53",
        "@types/jasminewd2": "~2.0.2",
        "@types/node": "~6.0.60",
        "codelyzer": "~3.2.0",
        "jasmine-core": "~2.6.2",
        "jasmine-spec-reporter": "~4.1.0",
        "karma": "~1.7.0",
        "karma-chrome-launcher": "~2.1.1",
        "karma-cli": "~1.0.1",
        "karma-coverage-istanbul-reporter": "^1.2.1",
        "karma-jasmine": "~1.1.0",
        "karma-jasmine-html-reporter": "^0.2.2",
        "protractor": "~5.1.2",
        "rxjs": "^5.5.10",
        "ts-node": "~3.2.0",
        "tslint": "~5.7.0",
        "typescript": "^2.4.2"
    }
}
{% endhighlight %}

Puede que las versiones actuales de Angular 5 estén más actualizadas, por tal motivo vamos a instalar las dependencias con el siguiente comando (sin indicar una versión en especifico).-

{% highlight javascript linenos %}
$ npm install --save @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/platform-server @angular/router
{% endhighlight %}

También necesitamos instalar estas dependencias.-

{% highlight javascript linenos %}
$ npm install --save-dev @angular/compiler-cli typescript@2.4.2 rxjs@'^5.5.2'
{% endhighlight %}

> Si estas trabajando con sistemas GNU Linux recuerda dar privilegios de súper usuario con SUDO.

Ahora vamos a obtener las ultimas versiones de las dependencias instaladas.-

{% highlight javascript linenos %}
$ npm update
{% endhighlight %}

Listo, nuestro proyecto esta actualizado.

## Problemas con webpack
Si llegas a tener problemas con webpack (al momento de compilar la app con "ng serve").-

{% highlight javascript linenos %}
** NG Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ **
  0% compilingCannot read property 'thisCompilation' of undefined
TypeError: Cannot read property 'thisCompilation' of undefined
{% endhighlight %}

Debemos realizar un par de opciones, primero removemos la versión actual de webpack.-

{% highlight javascript linenos %}
$ npm remove --save webpack
{% endhighlight %}

Y por ultimo instalamos la siguiente versión de webpack.-

{% highlight javascript linenos %}
$ npm install --save webpack@3.11.0
{% endhighlight %}

## Modulo de animación de Angular

El modulo para realizar animaciones en Angular no se utiliza regularmente y por tal motivo lo omitimos en el proceso de actualización, si en tu caso lo necesitas solo añade al package.json la siguiente dependencia.-

{% highlight javascript linenos %}
"@angular/animations": "^5.2.9",
{% endhighlight %}

Ahora solo instala la dependencia.-

{% highlight javascript linenos %}
$ npm install --save @angular/animations
{% endhighlight %}

Y por ultimo la actualizamos.-

{% highlight javascript linenos %}
$ npm update
{% endhighlight %}

## Conclusiones

Esta es una de las formas  mas fáciles de actualizar Angular que encontré, si tienes problemas en el proceso, comparte tu duda en los comentarios y con gusto te ayudaremos a resolver tu duda o problema.

Que tengan feliz código.