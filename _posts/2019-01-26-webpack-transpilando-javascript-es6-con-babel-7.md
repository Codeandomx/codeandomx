---
title: Webpack transpilando javascript es6 con babel 7
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6 babel
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guia de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en este articulo aprenderemos a configurar nuestro **entorno de desarrollo** con webpack para que pueda **transpilar código es6** (tambien transpila código de es7) a javascript tradicional, para lograrlo utilizaremos **Babel**, pongamos manos a la obra.

## Por que utilizar un transpilador como babel

Actualmente los estandares mas actualizado de Javascript los encontramos con [ES6](/articulos/introduccion-a-es6-javascript.html) y ES7, pero el principal problema radica en que no todos los navegadores soportan estos estandares de forma nativa.

Por otro lado, webpack no sabe como realizar esta trasnpilación de código, pero tiene cargadores que le pueden ayudar con esta tarea como [babel-loader](https://www.npmjs.com/package/babel-loader).

> **babel-loader** es el cargador de paquetes web para transpiling de código ES6 y superior, hasta ES5 (lo que conocemos simplemente como Javascript).

Para lograr que Webpack pueda transpilar vamos a utilizar las siguientes dependencias.-

* babel core.
* babel loader.
* babel preset-env.

## Instalando y configurando Babel en Webpack

Lo primero que debemos hacer es instalar las dependencias necesarias.-

{% highlight javascript linenos %}
$ npm install -D @babel/core babel-loader @babel/preset-env
{% endhighlight %}

Cuando termine la instalación vamos a crear un archivo al que llamaremos ".babelrc" y agregaremos a su contenido la configuración para Babel.-

{% highlight javascript linenos %}
{
  "presets": [
    "@babel/preset-env"
  ]
}
{% endhighlight %}

Ahora vamos a configurar babel-loader, y tenemos dos opciones para hacerlos,.-

* Archivo de configuración de webpack.
* Desde los scripts en el archivo package.json.

Vamos a ver las dos formas y elige la que más te convenga, empezamos con el archivo de configuración de Webpack creamos un archivo al que llamaremos "webpack.config.js" con el siguiente contenido.-

{% highlight javascript linenos %}
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
{% endhighlight %}

> Nota, los archivos .babelrc y webpack.config.js se deben de crear en el directorio raiz de nuestro proyecto.

La segunda opción es muy sencilla, basta con añadir a nuestros scripts el flag --module-bind de la siguiente forma.-

{% highlight javascript linenos %}
"scripts": {
  "dev" : "webpack --mode development --module-bind js=babel-loader" , 
  "build" : "webpack --mode production --module-bind js=babel-loader"
}
{% endhighlight %}

Y es todo, ahora Webpack ya puede transpilar el codigo es6 y es7.

## Conclusiones

Ahora nuetro entorno de desarrollo con Webpack es más robusto, solo nos quedan algunas configuraciones más para poder empezar a [desarrollar con react](/articulos/introduccion-a-react-creando-aplicacion-basica.html).

Que tengan feliz código.