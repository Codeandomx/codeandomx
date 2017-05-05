---
title: Template strings es6 (javascript)
author: Paulo Andrade
categories: es6
tags: es6 javascript
---

![Template string es6](/img/es6.jpg)

Seguimos ampliando nuestro repertorio de artículos de [ES6](/articulos/introduccion-a-es6-javascript.html) (el nuevo estándar de Javascript), en este articulo hablaremos sobre los **template strings** (plantillas de cadenas de texto) uno de los pequeños cambios que trajo con sigo **ECMAScript 6**, pero no por ello menos importante y que **hace más agradable el trabajo con Javascript**.

## Que son las template strings?

Las template strings nos presentan una **mejora al momento de trabajar con cadenas de texto en Javascript**, donde antes de esta actualización (ES6), trabajar con strings era muy limitado, la novedad es que presentan una manera de **definir cadenas con lenguajes específicos de dominio** (DSLs), dando como resultado las siguientes características:

- Interpolación de cadenas.
- Expresiones incrustadas.
- Cadenas multilínea sin hacks.
- Formato de cadena.
- Etiquetado de cadenas para el escape seguro de HTML.

> Se considera un **DSL** cualquier lenguaje que esté especializado en modelar o **resolver un conjunto específico de problemas** (llamado dominio de aplicación), hay que destacar que la mayoría de **los lenguajes de programación no se consideran un DSL** ya que estos no están diseñados para resolver un conjunto específico de problemas, sino para resolver cualquier tipo de problema.

Para **trabajar con template strings**, en lugar de iniciar las cadenas con comillas dobles, comenzamos con **comillas simples invertidas** (\` \`) en su lugar. Eso nos da un montón de posibilidades, los template strings podrían verse de esta forma.-

{% highlight javascript linenos %}
var init = `Hola mundo`;
{% endhighlight %}

Pero si lo usamos de esta forma no cambia en nada a las strings (cadenas de texto) con las que veníamos trabajando.

## Múltiples lineas

Empecemos viendo un ejemplo sobre como tendríamos que **crear una linea múltiple con Javascript**.-

{% highlight javascript linenos %}
// Creamos un string multilinea
var multiLine = 'Esta es una \nmultilínea';

// Lo mostramos en consola
console.log(multiLine);
{% endhighlight %}

Si ejecutamos el código anterior obtendríamos el siguiente resultado.-

- Esta es una
- multilínea

En cambio podemos obtener el mismo resultado utilizando un template string de la siguiente forma.-

{% highlight javascript linenos %}
// Creamos un string multilinea
var multiLine = `Esta es una
                   multi linea`;

// Lo mostramos en consola
console.log(multiLine);
{% endhighlight %}

Si ejecutamos el código anterior obtendríamos un resultado similar al anterior.-

- Esta es una
- multilinea

Seguramente más de alguna ves has necesitado trabajar con un string de varias lineas, pues con ES6 nos simplifican la vida :).

## Interpolación de cadenas

Otras de las funciones comunes que hacemos con los strings es crearlos de forma compuesta, es decir **utilizar variables dentro de la cadena** para personalizarla, veamos un ejemplo de como lo hacemos normalmente.-

{% highlight javascript linenos %}
// Creamos nuestras variables
var name = 'Paulo';
var age = 30;

// Creamos la cadena
var cadena = 'Hola, me llamo '+ name +' y tengo '+ age+' años';

// Lo mostramos en consola
console.log(cadena);
{% endhighlight %}

Ahora veamos el mismo ejemplo pero utilizando template strings.-

{% highlight javascript linenos %}
// Creamos nuestras variables
var name = 'Paulo';
var age = 30;

// Creamos la cadena
var cadena = `Hola, me llamo ${name} y tengo ${age} años`;

// Lo mostramos en consola
console.log(cadena);
{% endhighlight %}

En el ejemplo anterior tenemos un template string en donde utilizamos variables para construirla, **estas variables deberán estar entre llaves y con el signo de dolar ($) ante puesto**, si ejecutamos el código obtendríamos.-

- Hola, me llamo Paulo y tengo 30 años.

## Tagged (template strings con preprocesado)

Esta es la **forma más avanzada para trabajar con las template strings**, se trata de una **función que nos puede retornar una cadena con datos preprocesados**, esta función recibe dos parámetros, el primero es un array con las literales de cadenas que utilicemos y el segundo es un array con los datos que utilicemos (datos ya procesados), veamos un ejemplo.-

{% highlight js linenos %}
// Creamos nuestras variables de prueba
var name = 'Paulo';
var age = 30;

// Declaramos la función con preprocesado
var fn = function(literals, ...values)
{
    // Este seria el valor que obtendriamos
    cosole.log(literals.length); // Nos imprime el numero de elementos del array (3)
    // Imprimimos las literales
    literals.forEach((literal) => {
        console.log(literal);
    });
		
    cosole.log(values.length); // Nos imprime el numero de elementos del array (3)
    // Imprimimos los valores
    values.forEach((value) => {
        console.log(value);
    });
		
    return 'fn';
}

var cadena = fn `Hola, me llamo ${name} y tengo ${age} años`;
{% endhighlight %}

Si ejecutamos el código anterior obtendríamos el siguiente resultado en consola.-

- 3
- Hola, me llamo 
- y tengo
- años
- 2
- Paulo
- 30

Donde se crearan los dos arrays antes mencionados con sus respectivos valores, ya esta en nosotros saber que hacer con estos datos.

Además mediante el método raw() del array literals podemos acceder a la cadena tal y como la ingresamos a la función, ejemplo.-

{% highlight javascript linenos %}
// Creamos nuestras variables de prueba
var name = 'Paulo';
var age = 30;

// Declaramos la función con preprocesado
var fn = function(literals, ...values)
{
    // Imprimimos la cadena original
    cosole.log(literals.raw[0]);
		
    return 'fn';
}

var cadena = fn `Hola, me llamo ${name} y tengo ${age} años`;
{% endhighlight %}

## Conclusiones

No es difícil aprender a **trabajar con los template strings de Javascript** (solo un poco con las funciones de preprocesado), así que al terminar de leer este articulo podemos ser capaces de utilizarlos en nuestros proyectos.

Que tengan feliz código!.