---
title: Webpack anulando la entrada y salida por defecto
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

[MicroPost] Siguiendo con la **[guía básica de Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)** en esta micro entrada vamos a aprender a anular los puntos de entrada y salida que tiene Webpack por defecto, recordando que no necesitamos generar un archivo de configuración para lograrlo.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/webpack-for-react" target="_blank">Curso de Webpack</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de Github.
</div>

## Puntos de entrada y salida

> Los puntos de entrada y salida vienen preestablecidos por el **zero conf de Webpack**, si quieres profundizar un poco más en la configuración puedes visitar la [documentación oficial de Webpack](https://webpack.js.org/configuration/).

Si vienes siguiendo la guía o bien ya tienes algo de experiencia con Webpack, sabrás que por defecto el **punto de entrada** es el siguiente.- 

{% highlight javascript linenos %}
./src/index.js
{% endhighlight %}

Y el punto de salida.-

{% highlight javascript linenos %}
./dist/main.js
{% endhighlight %}

Aun que en mi opinión me parece bien esta estructura de directorios y archivos, podemos modificarlos desde el archivo "package.json", lo abrimos y modificamos los scripts "dev" y "build" de la siguiente forma.-

{% highlight javascript linenos %}
"scripts": {
  "dev" : "webpack --mode development ./src/js/index.js --output ./src/main.js" , 
  "build" : "webpack --mode production ./src/js/index.js --output ./src/main.js"
}
{% endhighlight %}

> Los dos scripts anteriores los declaramos en el articulo [Webpack modo de producción y desarrollo](articulos/webpack-modo-de-produccion-y-desarrollo.html) te recomiendo que le des una leída.

Donde.-

{% highlight javascript linenos %}
./src/js/index.js
{% endhighlight %}

Es el punto de entrada para Webpack y el punto de salida es.-

{% highlight javascript linenos %}
./src/main.js
{% endhighlight %}

> Para asignar el punto de salida utilizamos el flag --output.

Por ultimo solo queda crear los directorios y el archivo que utilizaras como punto de entrada (los directorios y archivo de salida se generan automáticamente).

## Conclusiones

Ahora ya tenemos listos nuestros puntos de entrada y salida personalizados con Webpack, poco a poco vamos ir agregando configuraciones para preparar nuestro entorno de desarrollo para [crear aplicaciones con react](/articulos/introduccion-a-react-creando-aplicacion-basica.html).

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/webpack-for-react).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Webpack modo de producción y desarrollo](/articulos/webpack-modo-de-produccion-y-desarrollo.html)
* Articulo siguiente: [Webpack trnaspilando código javascipt es6 con babel](/articulos/webpack-transpilando-javascript-es6-con-babel-7.html) 
* Curso: [Curso de Webpack](https://github.com/Codeandomx/webpack-for-react)

Que tengan feliz código.