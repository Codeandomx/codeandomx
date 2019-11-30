---
title: Webpack crear un servidor local
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guia de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en este articulo aprenderemos a configurar nuestro **entorno de desarrollo** con webpack para poder crear un servidor local y poder correr nuestra aplicación sin ningun problema, realmente es muy sencillo hacerlo, pongamos manos a la obra.

## Webpack dev server

Si seguiste la guia, notaras que cada vez que realices un cambio en el cóidgo debes de jecutar el comando.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

Pero esto no es lo ideal, lo mejor seria que aparte de poder visualizar su aplicación en el navegador, tambien puedas recompilar todo tu código cuendo realices cambios en el de forma automatica.

Vamos hacer uso de la dependencia webpack-dev-server, así que la instalamos.-

{% highlight javascript linenos %}
$ npm install -D webpack-dev-server
{% endhighlight %}

Y configuramos su uso en los scripts del archivo "package.json" quedando de la siguiente forma.-

{% highlight javascript linenos %}
...
"scripts": {
  "dev": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
...
{% endhighlight %}

Ahora solo guardamos los cambios y vamos a ejecutar nuestro servidor.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

Y veremos un mensaje en la consola que nos muestra información sobre el servidor de pruebas.-

{% highlight javascript linenos %}
> webpack-for-react@1.0.0 dev /home/codeando/github/webpack-for-react
> webpack-dev-server --mode development --open

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wdm｣: Hash: 8eec1d3fad2740addc7c
Version: webpack 4.29.0
Time: 7692ms
...
{% endhighlight %}

Nuestra aplicación la podemos visualizar desde la url.-

[localhost:8080](http://127.0.0.1:8080)

## Conclusiones

Con esto finalizamos nuestra guia de webpack, pero agregare un par de articulos interesantes para darle una configuración mas robusta, te recomiendo ahora empezar con el [curso basico de React](http://blog.codeando.club/articulos/introduccion-a-react-creando-aplicacion-basica.html) para que puedas seguir con esta curva de aprendizaje.

Que tengan feliz código.