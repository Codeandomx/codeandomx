---
title: Introducción a JSX
author: Paulo Andrade
categories: reactjs
tags: react javascript
---

![Introducción a JSX con React](/img/react.jpg)

Si queremos aprender a [crear aplicaciones con React](/articulos/introduccion-a-react-creando-aplicacion-basica.html) lo mejor (recomendado) es ayudarnos de **JSX** para crear las vistas, con la cual vamos a romper buenas practicas de programación que se han mantenido hasta el día de hoy, por ejemplo tomando en cuenta el **modelo de arquitectura MVC**, todos sabemos que no debemos mezclar Javascript con HTML, pero para trabajar con JSX es lo mejor.

> Para trabajar con JSX debemos tener configurado un transpilador que nos ayude a transformar código JSX a código Javascript, puedes obtenerlo desde nuestro [repositorio de github](https://github.com/Codeandomx/development-environment-react) o crearlo paso a paso con ayuda del [articulo crear entorno de desarrollo para React](/articulos/introduccion-a-react-creando-aplicacion-basica.html).

Además, necesitaremos algunos de los nuevos elementos y funciones de [ES6](/articulos/introduccion-a-es6-javascript.html) como el uso de let y const, [función arrow](/articulos/funcion-arrow-es6-javascript.html), [clases, herencia y objetos](/articulos/clases-herencia-y-objetos-en-es6-javascript.html). Si no tienes muchos conocimientos sobre esta tecnologías te recomiendo leer los artículos sobre el tema.

## Que es JSX?

Los desarrolladores de JSX lo consideran como una **extensión de sintaxis Javascript** para desarrollar **interfaces de usuario** (UI), si lo vemos desde otra perspectiva lo podemos ver como un lenguaje para plantillas como por ejemplo Jade, pero a diferencia de este ultimo, JSX viene con todo el poder de Javascript.

> JSX combina la vista con la lógica de la misma, para contrarrestar lo que para algunos es una mala practica, React utiliza **componentes** para encapsular esta parte del código.

Un ejemplo de uso de JSX es el siguiente.-

{% highlight javascript linenos %}
const elem = <h1>Hello, world!</h1>;
{% endhighlight %}

De entrada empezamos combinando Javascript con HTML, pero note que el HTML no esta entrecomillado, una característica de JSX, con este código creamos un elemento, el cual queremos renderizar en pantalla.

## Conceptos básicos

Pongamos atención al siguiente código.-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
let name = 'Codeando';

const element = (
    <div className="main">
        <h1>Hola!</h1>
        <h2>Bienvenidos a {name}</h2>
        <img src="logo.png" />
    </div>
);

ReactDOM.render(
    element,
    rootElement
);
{% endhighlight %}

Englobe en un solo código todas (por lo menos la mayoría) las características que trae consigo el uso de JSX, empecemos, la linea 1 y 2 solo nos sirven para importar las dependencias de React y ReactDom a nuestro archivo (todo bien hasta aquí), en la linea 7-13 creamos una constante utilizando JSX y aquí es donde sucede la magia.

### JSX es considerada una expresión

Lo primero a notar es que JSX es considerado una expresión por lo tanto no necesita estar entrecomillado como normalmente lo hacemos con el **HTML dentro de Javascript**.

En la linea 8 utilizamos un elemento div al cual le asignamos un atributo (una clase), pero note que el atributo no se llama class sino className, esto se hace así por una simple razón, En Javascript (ES6) class es una palabra reservada del lenguaje y no podemos utilizarla para otros fines es por eso que se opto por llamar a las clases (CSS) como className.

{% highlight javascript linenos %}
<div className="main">
{% endhighlight %}

### Elementos HTML con hijos (childrens)

En la linea 8 y 9 vemos como el div contiene 3 elementos hijos, tal y como lo hacemos al utilizar HTML, si no utilizáramos JSX el código tendrá que se de la siguiente forma.-

{% highlight javascript linenos %}
// Utilizando JSX
<div className="main">
        <h1>Hola!</h1>
				
// Sin utilizar JSX
react.createElement(
    'div',
    { className: 'main' },
    react.createElement(
        'h1',
        null,
        'Hola!'
    );
);
{% endhighlight %}

Note que tal ves no es muy difícil trabajar con React sin JSX, tan solo son elementos anidados dentro de otros, pero imagine crear una aplicación de gran magnitud, esta tarea seria muy laboriosa y por tanto nos llevara más tiempo cumplirla, por eso es mejor trabajar con JSX.

### Expresiones Javascript dentro de JSX

El siguiente punto a notar es como utilizar variables (pueden ser funciones o expresiones Javascript) dentro de JSX, lo hacemos encerrando la expresión Javascript entre llaves.-

{% highlight javascript linenos %}
<h2>Bienvenidos a {name}</h2>
{% endhighlight %}

### XML también es extensión de JSX

Había hablado de que JSX es una combinación de HTML con Javascript, pero también es posible utilizar características de XML, por ejemplo si tenemos una etiqueta vaciá como img podemos cerrarla inmediatamente como si estuviéramos utilizando XML.-

{% highlight javascript linenos %}
<img src="logo.png" />
{% endhighlight %}

### Programar sin JSX, una tarea tediosa

Les dejo el código que tendríamos que utilizar para obtener el mismo resultado pero sin utilizar JSX.-

{% highlight javascript linenos %}
'use strict';

let react = require('react');
let reactDom = require('react-dom');

const rootElement = document.getElementById('root');
let name = 'Codeando';

const element = react.createElement(
    'div',
    {
        className: 'main'
    },
    react.createElement(
        'h1',
        null,
        'Hola!'
    ),
    react.createElement(
        'h2',
        null,
        'Bienvenidos a ',
        name
    ),
    react.createElement(
        'img',
        {
            src: 'logo.png'
        })
);

reactDom.render(element, rootElement);
{% endhighlight %}

## Conclusiones

La conclusión absoluta es que JSX nos simplifica la vida al trabajar con React, no importa que valla contra las buenas practicas que seguramente te inculcaron al aprender a programar, siempre he dicho que si crean un framework o en este caso librería es para facilitarnos el trabajo y no para hacerlo más difícil, puedes acceder al repositorio de github para ver los ejemplos (el ejemplo lo encontraras en la rama 01 introduccion a JSX).-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/01_Introduccion_a_jsx)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Introducción a React](/articulos/introduccion-a-react-creando-aplicacion-basica.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código!