---
title: Webpack anulando la entrada y salida por defecto
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

[MicroPost] Siguiendo con la guia de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)** en esta micro entrada vamos a aprender a anular los puntos de entrada y salida que tiene Webpack por defecto, recordando que no necesitamos generar un archivo de configuración para lograrlo.

Si vienes siguiendo la guia o bien ya tienen algo de experiencia con Webpack, sabras que por defecto el **punto de entrada** es el siguiente.- 

{% highlight javascript linenos %}
./src/index.js
{% endhighlight %}

Y el pundo de salida.-

{% highlight javascript linenos %}
./dist/main.js
{% endhighlight %}

Aun que en mi opinion me parece bien esa estructura de directorios y archivos, podemos modificarlos desde el archivo package.json, asi que lo abrimos y modificamos los scripts "dev" y "build" de la siguiente forma.-

{% highlight javascript linenos %}
"scripts": {
  "dev" : "webpack --mode development ./src/js/index.js --output ./src/main.js" , 
  "build" : "webpack --mode production ./src/js/index.js --output ./src/main.js"
}
{% endhighlight %}

Donde.-

{% highlight javascript linenos %}
./src/js/index.js
{% endhighlight %}

Es el punto de entrada para Webpack y el punto de salida es.-

{% highlight javascript linenos %}
./src/main.js
{% endhighlight %}

> Para asignar el punto de salida utilizamos el flag --output.

Que tengan feliz código.