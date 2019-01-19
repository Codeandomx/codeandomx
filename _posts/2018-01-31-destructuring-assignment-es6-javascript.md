---
title: Destructuring assignment es6 (javascript)
author: Paulo Andrade
categories: es6
tags: es6 javascript
---

![destructuring assignment](/img/es6.jpg)

Destructuring assignmen o asignación por destructuración  es otro de los pequeños cambios del nuevo estándar de [Javascript (ES6)](/articulos/introduccion-a-es6-javascript.html) pero que seguramente nos sera de gran utilidad al momento de programar, ya que nos facilitara la extracción de datos de los objetos de una forma sencilla.

> Recuerda que en Javascript los array son considerados objetos.

## Destructuring

Nos permite extraer múltiples valores (datos) almacenados en arrays (objetos), para entender su funcionamiento veamos un ejemplo, supongamos que tenemos un array con dos valores y queremos extraerlos a dos variables "a" y "b".-

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
// Array de dos variables
let data = [1, 2];

// Obtenemos los datos mediante destructuring
let [a, b] = data;
{% endhighlight %}

El código anterior almacenara cada uno de los valores del array en sus respectivas variables, la variable "a" con el valor "1" y la variable "b" con el valor "2", veamos otra perspectiva del ejemplo, si lo tuviéramos que hacer sin ayuda del destructuring el código a utilizar seria el siguiente.-

{% highlight javascript linenos %}
// Array de dos valores
var data = [1, 2];

// Obtenemos los datos
var a = data[0];
var b = data[1];
{% endhighlight %}

Como se muestra en el ejemplo anterior para la obtención de datos tendríamos que declarar e inicializar las variables "a" y "b" por separado, así como tener que acceder al array mediante su indexado, tomando como referencia el primer ejemplo, nosotros podemos hacer uso del destructuring siguiendo estos pasos.-

- Declarar las variables donde serán asignados las variables entre corchetes (como si de un array se tratase) "let [a, b]".
- Mediante el operador de asignación indicamos el objeto del cual queremos extraer los valores "= data".
- Por ultimo la variable "a" obtendrá el valor de la primera propiedad (o el indice 0 del array) y la variable "b" el segundo valor.

### Usar espacios en blanco

También es posible utilizar espacios en blanco en la declaración de variables del destructuring.-

{% highlight javascript linenos %}
// Array de tres valores
var data = [1, 2, 3];

// Obtenemos los datos mediante destructuring
var [a, , b] = data;
{% endhighlight %}

En este caso los espacios en blanco no son tomados en cuenta y la asignación de variables seria de la siguiente forma.-

* a = 1.
* b = 3.

En este ejemplo el valor de en medio "2" fue descartado y solo se utilizaron el primer y ultimo valor del array.

### Uso con objetos notación JSON

Este tipo de objetos generalmente los utilizamos cuando trabajamos ya sea con una API de terceros (las respuestas que obtenemos) o cuando hacemos consultas a nuestra API Rest de alguna aplicación que tengamos, normalmente este tipo de respuestas suelen tener bastantes valores y mediante un destructurin podemos extraer solo los datos que necesitemos, ejemplo.-

{% highlight javascript linenos %}
// objeto JSON
let obj =
{
    "rojo":"#f00",
    "verde":"#0f0",
    "azul":"#00f",
    "cyan":"#0ff",
    "magenta":"#f0f",
    "amarillo":"#ff0",
    "negro":"#000"
};

// Obtenemos solo tres colores
let {rojo, azul, negro} = obj;
{% endhighlight %}

Después de ejecutar el código anterior obtendremos las siguientes tres variables.-

- rojo = #f00.
- azul = #00f.
- negro = #000.

Quedando los demás valores descartados y solo obtendremos con los que nos interesa trabajar.

> Note que ahora en lugar de trabajar con corchetes, las variables en donde asignaremos los valores son declaradas dentro de llaves, y el nombre de estas variables son los nombres de las propiedades del objeto JSON.

### Error

Si utilizamos una propiedad que no este asignada a algún objeto, pensaríamos que la consola de Javascript nos mostraría algún error, pero esto no sucede de esta forma, en su lugar Javascript asigna como valor a esa variable "undefined", veamos un ejemplo sencillo.-

{% highlight javascript linenos %}
// objeto JSON
let person =
{
    "name" : "Paulo",
    "age" : 30
};

// Obtenemos los valores
let {name, lastName, age} = obj;
{% endhighlight %}

Obtendremos el siguiente resultado.-

- name = "Paulo".
- lastName = undefined.
- age = 30.

### Uso común de un destructuring

Un ejemplo común en donde utilizamos un destructuring es el siguiente.-

{% highlight javascript linenos %}
// objeto JSON
let person = function ()
{
    return {
        "name" : "Paulo",
        "age" : 30
    }
};

// Obtenemos los valores
let {name, age} = person();
{% endhighlight %}

Les explico, tenemos una función llamada "person" la cual nos devuelve un objeto, pero nosotros al obtener este objeto queremos inmediatamente extraer los valores, es hay donde el destructuring nos ayuda bastante para simplificar nuestro código.

## Conclusiones

Todo suena bien en cuanto al tema de destructuring, pero por el momento solo es soportado de forma nativa por Mozilla Firefox y algunas de sus funcionalidades por otros navegadores como GoogleChrome, aunque con ayuda de algún transpilador como babel podemos hacer uso de el y tener compatibilidad con los demás navegadores, esperemos que su implementación no demore mucho.

Que tengan feliz código!