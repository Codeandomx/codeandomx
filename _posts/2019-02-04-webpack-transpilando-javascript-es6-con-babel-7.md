---
title: Webpack transpilando javascript es6 con babel 7
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6 babel
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guía de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en este articulo aprenderemos a configurar nuestro **entorno de desarrollo** con Webpack para que pueda **transpilar código es6** (también transpila código de es7) a Javascript convencional (ES5), para lograrlo utilizaremos la librería **Babel**, pongamos manos a la obra.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/webpack-for-react" target="_blank">Curso de Webpack</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de Github.
</div>

## Por que utilizar un transpilador como babel

Actualmente los estándares mas actualizado de Javascript los encontramos con [ES6](/articulos/introduccion-a-es6-javascript.html) y ES7, pero el principal problema radica en que no todos los navegadores soportan estos estándares de forma nativa.

Por otro lado, Webpack no sabe como realizar esta trasnpilación de código, pero tiene cargadores que le pueden ayudar con esta tarea como [babel-loader](https://www.npmjs.com/package/babel-loader).

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

Ahora vamos a configurar babel-loader, y tenemos dos opciones para hacerlos.-

* Archivo de configuración de Webpack.
* Desde los scripts en el archivo "package.json".

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

> Nota, los archivos ".babelrc" y "webpack.config.js" se deben de crear en el directorio raíz de nuestro proyecto.

La segunda opción es muy sencilla, basta con añadir a nuestros scripts el flag --module-bind de la siguiente forma.-

{% highlight javascript linenos %}
"scripts": {
  "dev" : "webpack --mode development --module-bind js=babel-loader" , 
  "build" : "webpack --mode production --module-bind js=babel-loader"
}
{% endhighlight %}

Y es todo, ahora Webpack ya puede transpilar el código es6 y es7.

## Conclusiones

Ahora nuestro entorno de desarrollo con Webpack es más robusto, solo nos quedan algunas configuraciones más para poder empezar a [desarrollar con React](/articulos/introduccion-a-react-creando-aplicacion-basica.html).

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/webpack-for-react).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Webpack anulando la entrada y salida por defecto](/articulos/webpack-anulando-la-entrada-y-salida-por-defecto.html)
* Curso: [Curso de Webpack](https://github.com/Codeandomx/webpack-for-react)

Que tengan feliz código.