---
title: Crear usuarios en Ubuntu server
layout: post
author: Paulo Andrade
categories: ubuntu
tags: ubuntu server
---

![Ubuntu Linux](/img/ubuntu.jpg)

En este articulo aprenderemos a **crear un usuario en ubuntu server** (funciona en cualquier versión de Ubuntu), normalmente después de instalar ubuntu server se nos asigna un **usuario root** para realizar las tareas necesarias en nuestro sistema, lo ideal es crear un usuario personalizado y darle privilegios de super usuario para no limitarlo en las tareas que pueda realizar.

> Cuando creas una maquina virtual (en [cloud Google](https://cloud.google.com/) por ejemplo) accedes a tu servidor mediante un comando que ellos te asignan (conectas mediante SSH) pero no te dan acceso a la contraseña de la cuenta, y el problema viene cuando por alguna razón se bloquea el puerto 22 (conexiones SSH) y necesitas ingresar por medio del puerto serial para corregir el problema y como te imaginaras no tendrás acceso por no tener  a la mano el usuario y contraseña del servidor.

## Por que no utilizar el usuario root?

En entornos Linux el usuario root es el que tiene los más altos privilegios de administración del sistema, y por lo tanto puede realizar cualquier cambio, inclusive los cambios más drásticos del sistema, estos últimos normalmente se realizan por accidente.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Entonces lo recomendable es crear un usuario y utilizarlo para la administración del servidor y solo utilizar al usuario root cuando sea necesario.

## Crear usuario en ubuntu

Crear un usuario es muy fácil, solo ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ adduser codeando
{% endhighlight %}

Donde codeando es el nombre del usuario que vamos a crear, al ejecutar el comando, iniciara un asistente que nos ayudara en el proceso de creación del usuario, lo primero que nos pedirá sera ingresar el password y confirmarlo, después nos pedirá información sobre el usuario (esta información es opcional) y listo.

## Dar privilegios de superusuario

Nuestro usuario no podrá realizar acciones de administrador del sistema (super usuario), así que necesitaremos darle ciertos privilegios, lo hacemos con el siguiente comando.-

{% highlight javascript linenos %}
$ usermod -aG sudo codeando
{% endhighlight %}

Ya tenemos listo nuestro usuario para poder administrar nuestro sistema sin problemas.

## Usar el nuevo usuario

Hay dos formas de empezar a trabajar con el usuario, la primera es iniciar una conexión SSH utilizando el usuario recién creado, pero también podemos cambiar el usuario sobre la marcha mediante el siguiente comando.-

{% highlight javascript linenos %}
$ su codeando
{% endhighlight %}

Y nos pedirá el password del usuario, y listo ya estamos utilizándolo.

> Se puede dar el caso en el que no se solicite una constraseña al momento de cambiar de usuario (por que lo acabamos de crear).

## Asignar contraseña al nuevo usuario

Una vez que cambiemos al usuario nuevo, ejecutammos el siguiente comando para que nos solicite nuestra contraseña.-

{% highlight javascript linenos %}
$ sudo passwd codeando
{% endhighlight %}

E ingresamos las nuevas contraseñas.-

{% highlight javascript linenos %}
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
{% endhighlight %}

## Conclusiones

Si administras tu servidor con el usuario root, de aconsejo crear un usuario con privilegios de super usuario para administrarlo, todo sea por prevenir cambios no deseados.

Que tengan feliz código.