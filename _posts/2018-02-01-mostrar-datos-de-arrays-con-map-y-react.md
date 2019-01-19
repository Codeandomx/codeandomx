---
title: Mostrar datos de arrays con map y React
author: Paulo Andrade
categories: reactjs
tags: react javascript es6
---

![Mostrar datos de arrays con map y React](/img/react.jpg)

Antes de comenzar debemos recordar que en Javascript todos los array (incluso todo los elementos) son considerados objetos, una vez aclarado este punto podemos seguir, una de las formas habituales de almacenar datos en Javascript es añadirlos a un **objeto con sintaxis JSON** y en React no es la excepción, en este articulo veremos como manipular los datos de los objetos mediante el método map() en nuestros componentes.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Curso de React</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/04_mostrar_datos_de_array_con_map" target="_blank">Github</a>.
</div>

## Acerca de map() Javascript

El método map() nos va permitir iterar sobre los elementos de un array (en nuestro caso trabajaremos con listas de datos) y por cada iteración nos devolverá un elemento del array, su index (lugar que ocupa en el array) y podemos utilizar un callback para trabajar sobre los datos devueltos (parecido a como trabajamos con un foreach).

Un ejemplo sencillo puedes ser tener una lista de números donde al iterarlos en el método map() podamos devolver su cuadrado, ejemplo.-

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
// Creamos nuestra lista de numeros
let list = [ 1, 2, 3, 4 ];

// Iteramos la lista
let newList = list.map( (num, index) => {
    num * num;
});

// Mostramos la lista
console.log(newList); // retorna 1 4 9 16
{% endhighlight %}

Si ejecutamos el código nos devolverá los cuadrados de los números originales.

## Uso de map() con React

Veamos un ejemplo practico con React, abrimos nuestro archivo "main.jsx" y borramos su contenido, vamos a crear un nuevo componente al que llamaremos "List" y este nos renderizara en pantalla una lista HTML vaciá (por el momento).-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

// Componente contenedor para listas
class List extends React.Component
{
    render() {
        return (
            <ul></ul>
        )
    }
};

// Renderizamos el componente
const rootElement = document.getElementById('root');
const element = <List />;

ReactDOM.render(element, rootElement);
{% endhighlight %}

Vamos a crear una array de nombres (esta debe de estar fuera del scope del componente).-

{% highlight javascript linenos %}
// Creamos la lista fuera del componente
let names = ['Paulo', 'Cesar', 'Hugo', 'Carlos'];
{% endhighlight %}

Y se lo pasamos como propiedad a nuestro componente mediante el atributo "names" como se muestra a continuación.-

{% highlight javascript linenos %}
const element = <List names={names} />;
{% endhighlight %}

Ahora ya podemos acceder al contenido del array desde nuestro componente "List", pero antes de mostrarlo, crearemos un nuevo componente para cada elemento de la lista, de esta forma vamos a simplificar nuestro ejemplo.-

{% highlight javascript linenos %}
// componente para elemento de lista
class Element extends React.Component
{
    render() {
        return (
            <li>Hola {this.props.name}</li>
        )
    }
};
{% endhighlight %}

Este elemento recibe la propiedad "name" (linea 6) la cual hace referencia a un elemento de nuestro array (objeto), ahora trabajemos en el componente "List" y con ayuda del método map(), mostramos cada uno de los elementos.-

{% highlight javascript linenos %}
// Componente contenedor para listas
class List extends React.Component
{
	render() {
        return (
            <ul>
                {this.props.names.map( (name) => {
                    return <Element name={name} />
                })}
            </ul>
        )
    }
};
{% endhighlight %}

Agregamos las lineas 7 - 9, en la cual mediante el método map() iteramos cada uno de los elementos del array, y estos a su vez, son pasados al componente "Element" para mostrarlos como parte de una lista HTML, ahora note que en la linea 8 utilizamos un "return", esto es con la finalidad de mostrar en pantalla el componente iterado.

Si corremos nuestra aplicación debemos de ver lo siguiente en pantalla.-

![Ejemplo de map y React](/img/react1.jpg)

## Identificar elementos de lista mediante llaves

Cuando trabajamos con elementos de un array en React, es importante añadir una llave a cada uno de estos para identificarlo, de esta forma React podrá estar al pendiente a actualizaciones de este elemento o en dado caso a su eliminación.

Estas llaves deben ser únicas (no pueden ser repetidas), por lo general se utiliza un ID del elemento para la llave, en los casos en que no se cuente con un ID se puede utilizar como llave el index del elemento (la posición en el array).

> Las llaves deben ser de tipo string y si decide utilizar index como llaves, debe de asegurarse de que los elementos no cambien de posición en el array o tendrá problemas de rendimiento.

En nuestro caso vamos utilizar los index como llaves, así que modificamos nuestro componente "List".-

{% highlight javascript linenos %}
// Componente contenedor para listas
class List extends React.Component
{
	render() {
        return (
            <ul>
                {this.props.names.map( (name, index) => {
                    return <Element key={index.toString()} name={name} />
                })}
            </ul>
        )
    }
};
{% endhighlight %}

En la linea 7 utilizamos un segundo parámetro para el método map(), se trata del index del elemento que estamos iterando, en la linea 8 asignamos la llave al componente mediante el atributo "key" y el index al ser de tipo number lo convertimos a tipo string.

Ahora el [virtual DOM](/articulos/entendiendo-el-virtual-dom-en-react.html) de React estará al pendiente de actualizaciones de este componente, podemos ver esta asignación mediante las React developper tools.-

![usando key en React](/img/react2.jpg)

## Conclusiones

Ahora ya conocemos los conceptos básicos de React y podremos pasar a crear una aplicación funcional en los próximos artículos.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/04_mostrar_datos_de_array_con_map).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Manejadores de eventos con React](/articulos/manejadores-de-eventos-con-react.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código.