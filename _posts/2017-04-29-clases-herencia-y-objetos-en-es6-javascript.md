---
title: Clases, herencia y objetos en es6 (javascript)
author: Paulo Andrade
categories: es6
tags: es6 javascript
---

![clases, herencia y objetos es6 javascript](/img/es6.jpg)

Con la llegada de **ES6** (nuevo estándar de Javascript) **se introdujo el concepto de clases** y todo lo que conlleva trabajar con **programación orientada a objetos**, un cambio que necesitaba si o si **Javascript** desde hace tiempo, entre los temas que veremos en este articulo encontramos como trabajar con clases, propiedades, métodos, constructores y herencia.

> Para el desarrollo del articulo, se asume que usted cuenta con **conocimientos básicos** de [programación orientada a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos) (por lo menos los conceptos), ya que no se abarcaran del todo.

## Trabajando con clases

El siguiente código muestra la **sintaxis de una clase** básica en Javascript (ES6).-

{% highlight javascript linenos %}
// Declaramos la clase
Class Person {
    // Constructor de la clase
    constructor(name, age)
    {
        // Propiedades
        this.name = name;
        this.age = age;
    }
		
    // Métodos
    about()
    {
        console.log('Mi nombre: '+this.name', mi edad: '+this.age);
    }
};
{% endhighlight %}

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

En el ejemplo anterior, tenemos una clase llamada "Person", para declararla se utiliza la **palabra reservada "class"** (linea 2),  si programas orientado a objetos en otros lenguajes estarás acostumbrado a declarar primero las propiedades y después inicializarlas por medio del constructor de la clase, en Javascript cambia un poco la sintaxis, ya que al ser un lenguaje dinámico, **la declaración e inicialización de las propiedades se hace desde el constructor** mediante la variable this.

> Una aclaración sobre el **constructor de la clase** es que para declararlo no es necesario utilizar el mismo nombre de la clase (como seguramente estarás acostumbrado), si no que con ES6 se utiliza la palabra reservada "constructor".

En cuanto a los **métodos** también hay algunos detalles en la sintaxis del código, para declaralos no es necesario utilizar alguna palabra reservada (como function), basta con colocar solo su identificador (en el ejemplo anterior utilizamos el identificador "about").

> Para **declarar los métodos de una clase** no se deben de utilizar las [funciones arrow](/articulos/funcion-arrow-es6-javascript.html) como se hace con los objetos literales.

## Instanciar un objeto de la clase

Tomando en cuenta el ejemplo de la clase anterior vamos a **instanciar un objeto** de esta de la siguiente forma.-

{% highlight javascript linenos %}
// Instanciamos un objeto
var paulo = new Person('Paulo', 30);

// Llamamos al metodo about
paulo.about();
{% endhighlight %}

Se utiliza el **operador new para instanciar el objeto**, teniendo cuidado en los valores que le pasamos como parámetros a la clase (el mismo orden que el declarado en el constructor), y para llamar al método, simplemente lo llamamos desde el **objeto instanciado** y obtendríamos el siguiente resultado "Mi nombre: Paulo, mi edad: 30".

> El proceso de instanciar un objeto de la clase, lo que en realidad hace es invocar a su constructor para inicializar las propiedades de la misma y crear un **estado del objeto** (la información que contiene un objeto en un determinado momento).

## Herencia

**La herencia es parte del prototipo de clases de Javascript**, con la cual podemos extender el uso de una clase, o explicando de otra forma, podemos tener una súper clase (también llamada clase padre) de la cual podemos crear sub clases (clases hijas) que **compartan las características** (propiedades y métodos) de la súper clase y poder extender su uso agregando sus propias características.

Para entenderlo mejor veamos un ejemplo, partiendo de la clase anterior vamos a crear una sub clase.-

{% highlight javascript linenos %}
// Declaramos la sub clase
Class Worker extends Person {
    // Constructor de la clase
    constructor(name, age, job)
    {
        super(name, age);
        // Propiedades
        this.job = job;
    }
		
    // Métodos
    about()
    {
        console.log('Mi nombre: '+this.name', mi edad: '+this.age+', mi trabajo: '+this.job);
    }
};
{% endhighlight %}

En el ejemplo anterior creamos una nueva clase llamada "Worker", la cual **extiende** (hereda) de la clase "Person" mediante la **palabra reservada "extends"**, de esta forma la clase "Worker" **hereda todas las características** de la clase "Person".

Ahora hablemos un poco sobre **el constructor de la sub clase**, note como el nuevo constructor recibe como valores dos parámetros que ya estaban declarados en la súper clase (name y age) y un parámetro nuevo para la sub clase, esto es así por que debemos de inicializar las propiedades de la clase padre mediante su constructor, en este caso **super()**, y para el tercer parámetro el proceso es el que ya conocemos.

> En caso de que la súper clase no tenga propiedades, no es necesario inicializar su constructor mediante super().

En cuanto al método notaras que esta declarado con el mismo identificador de la súper clase, esto lo hice a propósito, por que pueden suceder dos casos, los cuales listo a continuación.-

- Puedes **declarar nuevos métodos en la subclase** y al momento de instanciar un objeto, **puedes utilizar tanto los métodos heredados de la súper clase como los declarados en la subclase**.
- También **puedes sobre escribir un método heredado** de la súper clase (como en el ejemplo anterior) modificando las instrucciones que este ejecutara pero respetando el identificador del mismo.

## Conclusiones

El trabajo con **las clases viene a remplazar el uso de los objetos** que creamos con ES5 (objetos literales), simplificando tanto la sintaxis como su legibilidad un cambio importante, pero en mi opinión el más importante es el **uso mejorado de la variable this**, donde el scope en el que trabaja ya no da dolores de cabeza.

Para aclarar dudas un ejemplo de objeto literal puede ser el siguiente.-

{% highlight javascript linenos %}
// Declaramos el objeto
var Person = function (name, age)
{
    // Propiedades
    this.name = name;
    this.age = age;
		
    // Métodos
    return {
    	about: function ()
	    {
	        console.log('Mi nombre: '+this.name', mi edad: '+this.age+', mi trabajo: '+this.job);
	    }
	}
};
{% endhighlight %}

Que tengan feliz código!.