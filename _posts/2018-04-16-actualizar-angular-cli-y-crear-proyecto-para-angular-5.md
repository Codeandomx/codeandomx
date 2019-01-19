---
title: Actualizar Angular CLI y crear proyecto para Angular 5
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Angular](/img/angular2.jpg)

[Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html) es una herramienta de linea de comandos imprescindible para crear nuestros proyectos con Angular, normalmente para poder tener la ultima versión estable de Angular (actualmente la versión 5 es la estable y la versión 6 esta en fase de desarrollo) es necesario actualizar, lo cual aprenderemos a hacer en este articulo.

<div class="redes-background">
Puedes acceder al <a href="http://github.com/codeandomx/curso-de-introduccion-a-angular" target="_blank">curso gratuito de Angular</a> para aprender más sobre este framework.
</div>

## Fase previa (NodeJS)

Si estas trabajando con Angular lo más seguro es que tengas instalado NodeJs, a menos que tu proyecto no este creado con Angular CLI, puedes comprobarlo ejecutando el siguiente comando.-

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
$ node -v
{% endhighlight %}

Y obtendremos la versión de NodeJS, la versión puede variar.-

{% highlight javascript linenos %}
$ v8.11.1
{% endhighlight %}

En caso de no tener instalado NodeJS, puedes descargarlo de su [pagina oficial](https://nodejs.org), te recomiendo instalar la versión LTS.

## Actualizar Angular CLI

Como primer paso debemos desinstalar las versiones anteriores de Angular CLI.-

{% highlight javascript linenos %}
$ npm remove -g angular-cli
$ npm remove -g @angular/cli
{% endhighlight %}

> Si estas trabajando con sistemas GNU Linux recuerda dar privilegios de súper usuario con SUDO.

Antes de instalar nuevamente Angular CLI (en una versión más reciente) debemos limpiar la cache de npm.-

{% highlight javascript linenos %}
$ npm cache clean
{% endhighlight %}

Por ultimo instalamos la versión más reciente de Angular CLI.-

{% highlight javascript linenos %}
$ npm install -g @angular/cli@latest
{% endhighlight %}

Para comprobar la nueva versión, podemos ejecutar el siguiente comando.-

{% highlight javascript linenos %}
$ ng -v 
{% endhighlight %}

Nos saldrá algo parecido a lo siguiente.-

{% highlight javascript linenos %}

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
    
Angular CLI: 1.6.7
Node: 8.11.1
OS: linux x64
Angular: 
...

{% endhighlight %}

## Crear un nuevo proyecto con Angular 5

Ahora que tenemos actualizado Angular CLI, vamos a [crear un nuevo proyecto](/articulos/mi-primera-app-con-angular-y-angular-cli.html) (donde se instalaran las librerías y paquetes necesarios para trabajar con Angular 5).-

{% highlight javascript linenos %}
$ ng ne project_name && cd project_name
{% endhighlight %}

Si queremos correr el nuevo proyecto, ejecutamos el servidor.-

{% highlight javascript linenos %}
$ ng serve
{% endhighlight %}

Además, puede comprobar en el archivo package.json la versión de Angular instalada.-

{% highlight javascript linenos %}
"dependencies": {
    "@angular/cli": "1.5.0",
    "@angular/common": "^5.2.9",
    "@angular/compiler": "^5.2.9",
    "@angular/compiler-cli": "^5.2.9",
    "@angular/core": "^5.2.9",
    "@angular/forms": "^5.2.9",
    "@angular/http": "^5.2.9",
    "@angular/language-service": "^5.0.0",
    "@angular/platform-browser": "^5.2.9",
    "@angular/platform-browser-dynamic": "^5.2.9",
    "@angular/platform-server": "^5.2.9",
    "@angular/router": "^5.2.9",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60"
}
{% endhighlight %}

## Conclusiones

Si tienes problemas en cualquiera de los procesos anteriores, dejala en el área de comentarios y con gusto de ayudaremos a resolver el problema o duda.

Que tengan feliz código.