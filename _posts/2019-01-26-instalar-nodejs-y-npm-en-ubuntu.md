---
title: Instalar NodeJS y NPM en ubuntu
layout: post
author: Paulo Andrade
categories: nodejs
tags: nodejs ubuntu
---

![Instalar o actualizar nodejs en ubuntu](/img/nodejs.jpg)

[MicroPost] En este articulo vamos a ver una pequeña guía paso a paso de como instalar de una forma muy sencilla [NodeJS](https://nodejs.org), para aprovechar la plataforma de desarrollo de Javascript y poder programar aplicaciones y utilidades tanto para el frontend como el backend.

## Instalación de NodeJS

Vamos a poner manos a la obra y empecemos con actualizar nuestra lista de repositorios de Ubuntu con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get update
{% endhighlight %}

Una vez terminada la actualización, procedemos con la instalación de Ubuntu.-

{% highlight javascript linenos %}
$ sudo apt-get install nodejs
{% endhighlight %}

Para validar que se instalo correctamente, ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ nodejs --version
{% endhighlight %}

Y nos mostrara la versión instalada de NodeJs, ejemplo.-

{% highlight javascript linenos %}
$ v8.10.0
{% endhighlight %}

## Instalación de NPM

NPM como sus siglas en ingles lo indican, nos permitirá gestionar el manejo de paquetes para NodeJS, así que es necesario, lo instalamos con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get install npm
{% endhighlight %}

Validamos que se instalo correctamente consultando su versión.-

{% highlight javascript linenos %}
$ npm --version
{% endhighlight %}

Nos aparecerá algo parecido a lo siguiente.-

{% highlight javascript linenos %}
$ 3.5.2
{% endhighlight %}

## Conclusiones

Realmente es muy fácil instalar NodeJS en las distros de Ubuntu, por ultimo si deseas conocer el listado de versiones de NodeJS, puedes ejecutar el siguiente comando.-

{% highlight javascript linenos %}
$ npm info node
{% endhighlight %}

También, existen otras alternativas para poder [instalar NodeJS](/articulos/instalar-nodejs-y-npm-en-ubuntu.html).

Que tengan feliz código.