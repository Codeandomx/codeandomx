---
title: Introducción a ES6 (javascript)
author: Paulo Andrade
categories: es6
tags: javascript es6
---

![Ecma Script 6](/img/es6.jpg)

**ECMAScript 6** mejor conocido por los desarrolladores como **ES6** o **ES2015** es el nuevo estándar para trabajar con **Javascript**, actualmente la mayoría de los navegadores modernos ya cuentan con un **soporte bastante bueno para este estándar**, es por eso que si te gusta trabajar con Javascript (que es lo más seguro) debas de actualizarte y empezar a trabajar con esta versión ya que nos ofrece una gran variedad de novedades y ventajas al programar.

## Por que utilizar ES6

Es una realidad que Javascript se ha establecido como uno de los **lenguajes de programación más utilizados** a nivel mundial, pero tardo bastante tiempo en evolucionar ya que durante años trabajamos con la versión 5 hasta hace un par de años en los que se decidió acelerar su crecimiento, a tal grado de poder **utilizar Javascript tanto en el frontend (lado cliente) y backend (lado servidor)** con tecnologías como [Angular](https://angular.io), [NodeJS](https://nodejs.org), [MongoDB](https://mongodb.com/es) y [ExpresJS](https://expressjs.com/es/) entre muchos más (mejor conocido como MEAN).

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Novedades de ES6

### Sintaxis

Sin duda era necesario la **mejora en la escritura y legibilidad de la sintaxis de Javascript**, por que se daba mucho el caso de que el desarrollador desconocía como **trabajar con Javascript nativo** (la verdad era muy complicado) y se daba a la tarea de aprender a utilizar frameworks como **jQuery** por su sintaxis más amigable y fácil de utilizar, para mi este es el primer paso al resurgimiento de **utilizar Javascript de forma nativa**.

### Funciones arrow

Entre las novedades que encontraremos con ES6 se encuentra el uso de **funciones arrow**  las cuales **simplifican en gran medida nuestro código** y le da un giro de 360 grados al ámbito de las variables mejorando notablemente el contexto en las que las variables trabajan, un ejemplo utilizando ES5 es el siguiente donde se notara la diferencia de sintaxis.-

{% highlight javascript linenos %}
// ES5
var hola = function (name) {
     console.log('hola '+name);
}
{% endhighlight %}

Ahora veamos el mismo ejemplo utilizando ES6.-

{% highlight javascript linenos %}
// ES6
var hola = (name) => console.log('hola '+name);
{% endhighlight %}

### Programación orientada a objetos

Aun que no era del todo desconocido este tema para los desarrolladores de la vieja escuela (se tenia un modo de implementar este tipo de programación con las características del lenguaje) con ES6 tendremos la posibilidad de **utilizar programación orientada a objetos**, esto conlleva el uso de clases, constructores, la mejora this entre otras cosas, veamos un ejemplo con ES5.-

{% highlight javascript linenos %}
// ES5
var Greeter = (function ()
{
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());

var greeter = new Greeter('world');
console.log(greeter.greet());
{% endhighlight %}

Ahora veamos el mismo ejemplo utilizando ES6.-

{% highlight javascript linenos %}
// ES6
class Greeter {
    // constructor
    constructor(msg){
        this.greeting = msg;
    }
		
    // método
    greet(){
        return 'Hello, ' + this.greeting;
    }
}

var greeter = new Greeter('world');
console.log(greeter.greet());
{% endhighlight %}

### Uso de la variable this

Comentábamos que con la llegada de ES6 y el uso de las funciones arrow se **mejoro el ámbito de las variables**, el cual en ES5 para el programador novel era un poco de lio tratar con este tema, por ejemplo teníamos que hacer uso del método bind() para poder indicarle a nuestra función **en que ámbito trabajaba this**, veamos un ejemplo con ES5.-

{% highlight javascript linenos %}
// ES5
var obj = {  
    mostrar : function() {
        console.log(' :) ');
    },
    ejecutar : function() {
        document.addEventListener('click', function(e) {
            this.mostrar();
        }.bind(this)); // uso de bind
    }
}
{% endhighlight %}

Ahora veamos el mismo ejemplo utilizando ES6.-

{% highlight javascript linenos %}
// ES6
var obj = {  
    mostrar : function() {
        console.log(' :) ');
    },
    ejecutar : function() {
        document.addEventListener('click', (e) => this.mostrar());
    }
}
{% endhighlight %}

### Módulos

Javascript lo pedía a gritos, ahora ya **es posible trabajar con módulos en Javascript de forma nativa** (anteriormente utilizábamos librerías para lograrlo), esto consiste en tan solo agregar a nuestro archivo html el archivo principal Javascript y a partir de este el navegador empezara a cargar los módulos que necesita para trabajar, dando como resultado un código más legible y separado y evitar la sobrecarga del navegador.

## Conclusiones

Las novedades anteriores en mi punto de vista son las más importantes, pero no podemos dejar de lado incorporaciones a ES6 como el uso de las variables Let y Const, valores por defecto, uso de template string entre otras más, te recomiendo estar atento a los siguientes artículos.

Que tengan feliz código!.