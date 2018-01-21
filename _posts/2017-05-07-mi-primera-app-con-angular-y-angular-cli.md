---
title: Mi primera app con Angular y Angular CLI
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Angular](/img/angular2.jpg)

En el articulo anterior vimos una [introducción a Angular](/articulos/un-vistazo-a-angular-2.html) donde hablamos de algunas comparaciones entre la versión anterior (AngularJS 1.x) y la versión nueva (llamada solamente **Angular**), donde a grandes rasgos explicaba que **Angular fue reconstruido desde cero** y por lo tanto hay un gran cambio en su funcionamiento el cual ahora esta **basado en componentes**, así como su sintaxis donde ocuparemos [trabajar con es6](/articulos/introduccion-a-es6-javascript.html) o como lo recomienda la comunidad de Angular con **TypeScript**.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>.
</div>

## Que necesitamos

Para poder **trabajar con Angular** vamos a necesitar tener instalado [NodeJS](/articulos/introduccion-a-nodejs.html) en nuestro ordenador, ya que las dependencias a utilizar serán instaladas desde su gestor de paquetes (NPM), puedes descargar el instalador desde su [página oficial](https://nodejs.org).

> Te recomiendo trabajar con la **versión LTS**, la cual nos garantiza estabilidad y soporte a largo plazo.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Para comprobar si ya tenemos instalado NodeJS en nuestro sistema puedes ejecutar la siguiente instrucción en la terminal.-

{% highlight javascript linenos %}
$ node -v
{% endhighlight %}

Nos tendrá que mostrar la versión instalada, así también podemos verificar la versión de NPM.-

{% highlight javascript linenos %}
$ npm -v
{% endhighlight %}

## Angular CLI

**Angular CLI** (Angular Command Line Interface) es una **herramienta imprescindible** para crear nuestros proyectos de Angular, se trata de una interfaz de linea de comandos (parecido a NPM en cuanto a la construcción de proyectos para NodeJS) desde la cual **vamos a crear nuestro proyecto**, así como la estructura de directorios que necesitamos.

Angular CLI **es una herramienta muy confiable** ya que la proporciona el equipo de desarrollo de Angular (un ejemplo similar es Artesan para Laravel)

Para instalarlo abrimos nuestra shell (terminal) y ejecutamos la siguiente instrucción.-

{% highlight javascript linenos %}
$ npm install -g @angular/cli
{% endhighlight %}

> Si estas trabajando con Linux o Mac no olvides darle **privilegios de administrador** para que no tengas problemas con la instalación.

Ten en cuenta que este comando nos **instala Angular CLI de forma global** mediante el flag -g, así que no es necesario que lo incluyas a tu proyecto (mediante el flag -D), para verificar que se instalo de forma correcta en la terminal ejecutamos la siguiente instrucción con el cual verificaremos la versión instalada.-

{% highlight javascript linenos %}
ng -v
{% endhighlight %}

Y nos tendrá que aparecer algo como esto.-

![Angular CLI](/img/angularcli.jpg)

Para interactuar con Angular CLI mediante nuestra terminal lo podremos hacer mediante la instrucción "ng" (un nombre muy particular de Angular), por ejemplo, para saber todo lo que podemos hacer con Angular CLI podemos usar el flag --help y así nos mostrará una lista de dichas operaciones.-

{% highlight javascript linenos %}
$ ng --help
{% endhighlight %}

> De igual forma funciona sin hacer uso del flag --help, simplemente ejecuta la instrucción "ng help".

## Crear nuestra primera aplicación Angular

Llego el momento de empezar a **crear nuestra aplicación mediante Angular CLI**, así que abrimos nuestra terminal y nos ubicamos en el directorio donde queremos crear nuestro proyecto y ejecutamos la siguiente instrucción.-

{% highlight javascript linenos %}
$ ng new project_name && cd project_name
{% endhighlight %}

Donde tendremos que cambiar "project_name" por el nombre de nuestra aplicación, a finalizar la instalación (depende de nuestra conexión de internet) tendríamos la siguiente estructura de archivos y directorios.-

![Estructura de archivos y directorio](/img/estructura_angular_cli.jpg)

Una vez creado nuestro proyecto en la misma instrucción le indicamos que ingresemos a este y ahora solo falta arrancar el servidor para ver correr nuestra aplicación.

> Si necesitas crear el proyecto en un directorio que ya existe simplemente ingresa al directorio y ejecuta el comando: ng new nombre_directorio_existente.

## Problema en Windows 10

Si no utilizas Windows has caso omiso a esta parte del articulo, en ocasiones al tratar de instalar las dependencias a utilizar mediante npm (parte del proceso de Angular CLI) nos puede lanzar el siguiente error.-

{% highlight javascript linenos %}
$ ng new project_name
Cannot find module 'process-nextick-args'
Error: Cannot find module 'process-nextick-args'
...
{% endhighlight %}

Para solucionar este problema basta con instalar de forma global la dependencia "process-nextick-args" con la siguiente instrucción.-

{% highlight javascript linenos %}
$ npm install -g process-nextick-args
{% endhighlight %}

Listo, ya puedes continuar de forma normal.

## Servidor para angular

Entre las muchas herramientas que encontraremos en nuestra nueva aplicación, se encuentra un servidor para lanzar nuestras aplicaciones, para iniciarlo ejecutamos la siguiente instrucción.-

{% highlight javascript linenos %}
$ ng serve
{% endhighlight %}

> El inicio del servidor puede ser un poco tardado, debido a que compila todo nuestro código para poder correr la aplicación.

Una vez iniciado el servidor podremos ver nuestra aplicación en la url localhost:4200 (127.0.0.1:4200).-

![Servidor angular cli](/img/server_angular_cli.jpg)

> Si queremos cambiar el host y puerto para nuestra aplicación podemos agregarle a la instrucción "ng serve" los flags - -host para servidor y - -port para el puerto.

## Conclusiones

Esto fue solo una pequeña muestra de lo que podemos hacer con **Angular CLI**, ya que lo utilizaremos para la gestión de nuestra aplicación tanto en modo desarrollo como producción, además en este articulo vimos un ejemplo del típico **hola mundo con Angular**.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Un vistazo a Angular](/articulos/un-vistazo-a-angular-2.html)
* Articulo siguiente: [Arquitetura de componentes en Angular](/articulos/arquitectura-de-componentes-en-angular.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código!.