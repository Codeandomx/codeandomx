---
title: Función arrow ES6
author: Paulo Andrade
categories: es6
tags: javascript es6
---

![ES6 función arrow](/img/es6.jpg)

Una de las **novedades de Javascript** en su estándar [ES6 (ECMAScript 6)](/introduccion-a-es6-javascript) es el uso de las **funciones arrow**, entre las mejoras que incorpora este tipo de función es la **mejora en la sintaxis** del código (siendo más limpio y legible), así como el **ámbito de las variables** con las que trabaja (sobretodo con el uso de la variable this).

## Que son las funciones arrow

Primeramente nos permiten tener la semántica del código más corta y mejorada (esto hablando de manera superficial), en cuanto a su funcionamiento brilla por la **mejora del contexto de datos de la variable this**, pudiendo trabajar de forma parecida (la variable this) a lenguajes como C/C++ o Java por ejemplo, trabajando en el scope o ámbito correcto al trabajar con objetos, algo que nos dio más de un dolor de cabeza con ES5 (encontrando solución con el método bind).

Su **uso más común es utilizándola cuando llamamos a las callback** o funciones anónimas, veamos un ejemplo con ES5.-

{% highlight javascript linenos %}
// ES5
var num = [2, 4, 6];

num.map(function (data){
    return data * 2;
});
{% endhighlight %}

> El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos [más información](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map).

Hablemos un poco sobre el funcionamiento del **método map()**, recibe como parámetro una función anónima (o también conocida como callback), la cual a su vez esta función toma como parámetro cada uno de los elementos del array y se procesa su contenido, que en este caso multiplicamos cada elemento por 2.

Ahora que ya sabemos como funciona el código anterior, vamos a ver el mismo ejemplo pero utilizando la **sintaxis de ES6**.-

{% highlight javascript linenos %}
// ES6
var num = [2, 4, 6];

num.map( (data) => return data * 2 );
{% endhighlight %}

Hay varios detalles a tomar en cuenta, lo primero es ver como cambia la sintaxis de una versión a otra, siendo esta ultima más limpia y sencilla, además de las siguientes.-

* **Desaparece el uso de la palabra clave function**, la cual es remplazada por el **operador =>** (fat arrow) y solo se utilizan los paréntesis, en cuanto a estos últimos en caso de no trabajar con parámetros no son necesarios utilizarlos.
* Al ser una función escrita en una sola linea **podemos prescindir del uso de las llaves**.

## Scope o ámbito de las variables

Comentábamos que con **ES5** teníamos problemas con el **uso de la variable this** en cuanto a su scope, para entenderlo mejor vamos apoyarnos del siguiente código.-

{% highlight javascript linenos %}
// ES5
var person = {
    name: 'Paulo',
    friends: ['Hugo', 'Carlos', 'David'],
    print: function () {
        this.fiends.forEach(function (friend){
            console.log(this.name + ' es amigo de '+friend);
        });
    }
}
{% endhighlight %}

Bien, en el ejemplo anterior el objeto person tiene dos propiedades name y friends, este ultimo es un array con los nombres de los amigos, pero la parte importante a notar se encuentra en el método print, donde por medio de un forEach() mostraremos en consola cada uno de los nombres del array friends, pero hay que notar que también **queremos mostrar mediante la variable this**, la propiedad name del objeto person, la expectativa seria que mostrara "Paulo es amigo de Hugo", "Paulo es amigo de Carlos" y "Paulo es amigo de David".

Pero en realidad al ejecutar el código nos muestra "undefinded es amigo de Hugo", "undefinded es amigo de Carlos" y "undefinded es amigo de David", esto pasa por el **problema que existe con el scope de la variable this**, la función anónima donde tenemos la instrucción que imprime y que utiliza la variable this.name, es invocada desde el método forEach y por tanto intentara buscar en su scope o ámbito la variable name, pero esta no existe en este si no en el ámbito del objeto person.

> Este problema es muy común al programar con Javascript, pero el problema empeora con los programadores que van iniciando con este lenguaje.

### Scope con ES6

Con la llegada de ES6 y el uso de las funciones arrow este problema se soluciona y el código anterior quedaría de esta forma.-

{% highlight javascript linenos %}
// ES5
var person = {
    name: 'Paulo',
    friends: ['Hugo', 'Carlos', 'David'],
    print: function () {
        this.fiends.forEach( (friend) => {
            console.log(this.name + ' es amigo de '+friend);
        });
    }
}
{% endhighlight %}

De esta forma, cuando el método print() sea llamado, **su scope sera el mismo scope del objeto person** y el resultado sera el esperado "Paulo es amigo de Hugo", "Paulo es amigo de Carlos" y "Paulo es amigo de David".

## Conclusiones

Por ultimo solo recordar dos casos que pueden ocurrir con el uso de las funciones arrow, el primer caso es que cuando la usemos en una sola linea podemos prescindir del uso de los paréntesis y el segundo caso es que no olvides que si la función tiene mas de una linea de instrucciones no olvides utilizar los paréntesis.

Que tengan feliz código!.