---
title: Webpack Instalación y primeros pasos
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

Webpack es un paquete de módulos estáticos para nuestras a**plicaciones JavaScript modernas**. Cuando el Webpack procesa nuestra aplicación, genera internamente un gráfico de dependencia que mapea cada módulo (como lo muestra la imagen de abajo) que nuestro proyecto necesita y genera uno o más paquetes según nuestra configuración.

![Webpack map](/img/webpack map.jpg)

## Archivo de configuración de webpack

Desde la versión 4.0.0, **Webpack** no requiere un archivo de configuración para agrupar nuestro proyecto, sin embargo, es fácilmente configurable para adaptarse mejor a  nuestras necesidades, te comparto el enlace por si necesitas saber mas sobre esta configuración.-

[Webpack configuración](https://webpack.js.org/configuration)

## Instalación de wWbpack

Lo primero que debemos hacer al comenzar un proyecto desde 0 es crear su directorio y entrar en el.-

{% highlight javascript linenos %}
$ mkdir webpack-for-react && cd webpack-for-react
{% endhighlight %}

> Para continuar debes de tener instalado [NodeJS y NPM](http://nodejs.org) si trabajas con Windows puedes descargar el instalador desde su página principal o puedes seguir el articulo [instalar Nodejs desde Ubuntu](/articulos/instalar-nodejs-y-npm-en-ubuntu.html).

Inicializamos nuestro proyecto creando el archivo "package.json" con el siguiente comando.-

{% highlight javascript linenos %}
$ npm inti
{% endhighlight %}

Llenamos los campos que nos soliciten y al finalizar nos va a generar el archivo en el directorio principal de nuestro proyecto, un ejemplo del "package.json" es el siguiente.-

{% highlight json linenos %}
{
  "name": "webpack-for-react",
  "version": "1.0.0",
  "description": "Configuracion de webpack para react",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Codeandomx/webpack-for-react.git"
  },
  "keywords": [
    "webpack",
    "react",
    "javascript",
    "es6"
  ],
  "author": "Paulo Andrade",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Codeandomx/webpack-for-react/issues"
  },
  "homepage": "https://github.com/Codeandomx/webpack-for-react#readme"
}
{% endhighlight %}

Ahora procedemos a instalar Webpack con el siguiente comando.-

{% highlight javascript linenos %}
$ npm i -D webpack webpack-cli
{% endhighlight %}

> Recuerda que si estas trabajando desde Ubuntu Linux debes de dar privilegios de super usuario con sudo en caso de ser necesario.

Las dependencias que utilizamos son las siguientes.-

* Webpack.- Es el paquete principal, el nucleo.
* Webpack-cli.- Proporciona un conjunto flexible de comandos para que los desarrolladores aumenten la velocidad al configurar un proyecto webpack personalizado.

## Iniciar Webpack

Aun nos faltan un par de detalles antes de correr nuestra primera aplicación sobre Webpack, la primera es crear un directorio llamado "src".-

{% highlight javascript linenos %}
$ mkdir src
{% endhighlight %}

> Recuerde ejecutar el comando anterior desde el directorio principal del proyecto.

Y creamos un archivo "index.js" (este sera nuestro punto de entrada de la aplicación) dentro del directorio "src", como contenido podemos poner un console.log().-

{% highlight javascript linenos %}
// index.js
console.log('Hola webpack');
{% endhighlight %}

Lo segundo es abrir nuestro archivo "package.json" y agregar un script para iniciar Webpack desde la terminal, lo agregamos en la llave "scripts".-

{% highlight javascript linenos %}
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack"
},
{% endhighlight %}

Y por ultimo ejecutamos el comando el siguiente comando para iniciar Webpack.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

Si todo marcha bien, en nuestro directorio principal se creo el directorio "dist" y dentro de este el archivo "main.js" que es nuestro archivo de salida.

## Warning in configuration Webpack

Si al iniciar Webpack te muestra la siguiente advertencia.-

{% highlight javascript linenos %}
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
{% endhighlight %}

No te preocupes, lo vamos a solucionar en el próximo articulo donde aprenderemos a configurar el modo de desarrollo y producción.

## Conclusiones

En este articulo dimos los primeros pasos para trabajar con Webpack, poco a poco vamos ir agregando configuraciones para preparar nuestro entorno de desarrollo para crear aplicaciones con [react](/articulos/introduccion-a-react-creando-aplicacion-basica.html).

Que tengan feliz código.