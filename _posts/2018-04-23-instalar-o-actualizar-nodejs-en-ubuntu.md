---
author: Paulo Andrade
categories: nodejs
tags: nodejs ubuntu
title: Instalar o actualizar NodeJS en Ubuntu
---

![Instalar o actualizar nodejs en ubuntu](/img/nodejs.jpg)

[MicroPost] En este articulo vamos a ver como instalar o actualizar la versión de [NodeJS](https://nodejs.org) que tenemos instalada en nuestro ordenar de una forma muy sencilla, cabe mencionar que no solo funciona para Ubuntu, si no, para la mayoría de distros GNU Linux.

## Instalar NodeJS

Como primer paso debemos instalar [n](https://www.npmjs.com/package/n.).-

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
$ npm install -g n
{% endhighlight %}

> La dependencia N nos proporciona el REPL de NodeJS con lodash y moment (interfaz con algunos módulos requeridos ya cargados por defecto).

Una vez instalado n, tenemos varios comandos para ver que versión de NodeJS queremos instalar, a continuación los listo.-

> Nota.- Si ya tienes una versión instalada de NodeJS, esta sera remplazada por la nueva.

Instalar la versión más reciente con la nuevas características (versión no estable).-

{% highlight javascript linenos %}
$ sudo n latest
{% endhighlight %}

Instalar la versión estable más reciente.-

{% highlight javascript linenos %}
$ sudo n stable
{% endhighlight %}

Instalar la versión LTS más reciente (estable).-

{% highlight javascript linenos %}
$ sudo n lts
{% endhighlight %}

Instalar una versión en especifico de NodeJS.-

{% highlight javascript linenos %}
$ sudo n 8.9.0
{% endhighlight %}

> en esta ultima opción solo cambie la versión por la que necesite instalar.

## Conclusiones

Realmente es muy fácil actualizar nuestra versión de NodeJS con n, por ultimo si deseas conocer el listado de versiones de NodeJS, puedes ejecutar el siguiente comando.-

{% highlight javascript linenos %}
$ npm info node
{% endhighlight %}

Que tengan feliz código.