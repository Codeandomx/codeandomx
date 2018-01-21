---
title: Componentes, props y estados con React
author: Paulo Andrade
categories: reactjs
tags: react javascript
---

![Componentes con react](http://blog.codeando.org/img/react.jpg)

El desarrollo de [aplicaciones web con react](/articulos/introduccion-a-react-creando-aplicacion-basica.html) se vuelve realmente fácil si utilizamos **JSX para crear las vistas y lógica de estas**, en este articulo abarcaremos el tema de los componentes (components) y sus características, claro en complemento con JSX para facilitarnos aun más el desarrollo, pero sobre todo el mantenimiento (corregir errores y/o hacer crecer el proyecto) de nuestra web haciéndola de alguna forma escalable.

## Que son los componentes

**Los componentes son pequeños bloques de código** de nuestra aplicación en los cuales podemos encapsular elementos HTML, CSS y Javascript para un fin en especifico, en nuestro caso construiremos estos componentes con [JSX](/articulos/introduccion-a-jsx.html) para facilitar la tarea, además, un componente puede contener uno o varios componentes más y estos pueden ser reutilizados cada ves que sea necesario.

Cabe mencionar que el desarrollo en **Rect esta basado en componentes** (es el corazón de React), pongamos como ejemplo un chat, nuestro componente principal sera todos los elementos de un chat y dentro de este podemos tener varios componentes, un componente para escribir el mensaje, otro componente para colocar los mensajes enviados, los botones de acción pueden ser otro componente y de esta forma reutilizarlo para tener mas de un botón.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

En la siguiente imagen podemos ver el chat seccionado en componentes, cada rectángulo hace referencia a un componente.-

![Ejemplo de componentes con react](/img/chat.jpg)

## Components vs web components

Los componentes de React y los web components son algo distintos, al menos a cuanto el uso que les damos, los primeros encapsulan la lógica de la interfaz de usuario de nuestra aplicación (utilizando JSX) pero sobre todo mantienen **sincronizados los datos con el DOM**, en cambio los web components encapsulan código HTML, CSS y Javascript (de igual forma que los componentes de React) pero para acceder a librerías de terceros.

> Recuerda que los conceptos se manejan en cuanto a la forma de utilizarlos en React, si necesitas más información sobre web components visita su [pagina oficial](https://www.webcomponents.org/).

Por tal motivo vamos hacer referencia en este curso a los componentes solo como componentes de React y no web components.

## Crear mi primer componente

Hay dos formas de crear un componente con React, la primera es utilizar Javascript convencional y la segunda es utilizar [ES6](/articulos/introduccion-a-es6-javascript.html), nosotros seguiremos utilizando esta ultima, un componente básico tendrá el siguiente aspecto.-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

class HolaMundo extends React.Component
{
    render ()
    {
         return (
            <div className="main">
                <h1>Hola!</h1>
                <h2>Bienvenidos a {this.props.name}</h2>
                <img src="logo.png" />
            </div>
        );
    };
};

const rootElement = document.getElementById('root');
const element = <HolaMundo name="Codeando" />;

ReactDOM.render(
    element,
    rootElement
);
{% endhighlight %}

El componente lo creamos utilizando **clases de ES6**, si no estas familiarizado con estos conceptos te recomendamos leer el articulo sobre [clases, herencia y objetos en ES6](/articulos/clases-herencia-y-objetos-en-es6-javascript.html).

En la linea 4 creamos una clase a la que llamamos HolaMundo y esta extiende de la [clase Component de React](https://reactjs.org/docs/react-component.html), de esta forma heredamos las propiedades y métodos de esta clase para poder utilizarlos, por lo menos siempre tiene que tener declarado el método render().

{% highlight javascript linenos %}
class HolaMundo extends React.Component
{% endhighlight %}

> Recuerda que los nombres de las clases deben iniciar con mayúscula y su sintaxis debe ser del tipo Camel Case.

En la linea 6 tenemos el método render() de nuestro componente, el cual indicara que código es el que necesitamos renderizar, este código lo encontramos entre paréntesis para evitar problemas al transpilar ya que utilizamos JSX en varias lineas.

{% highlight javascript linenos %}
render ()
{
     return (
            ....
    );
};
{% endhighlight %}

Ahora veamos una combinación de uso entre la linea 11 y 19, en esta ultima utilizamos nuestro componente, note que lo mandamos llamar como si se tratara de un elemento HTML, también note el atributo que le estamos asignando, el nombre de este atributo nos servirá para acceder al valor que le damos pero desde dentro del componente, esta ultima acción lo logramos al acceder a la propiedad props (que significa properties), de esta forma podemos pasar datos a nuestros componentes.

{% highlight javascript linenos %}
class HolaMundo extends React.Component
{
    render ()
    {
         return (
            ...
            <h2>Bienvenidos a {this.props.name}</h2>
            ...
        );
    };
};

const element = <HolaMundo name="Codeando" />;
{% endhighlight %}

Por ultimo solo nos falta renderizar nuestro componente en pantalla y lo hacemos con ayuda del método render() de la clase ReactDom.-

{% highlight javascript linenos %}
const rootElement = document.getElementById('root');
const element = <HolaMundo name="Codeando" />;

ReactDOM.render(
    element,
    rootElement
);
{% endhighlight %}

## componentes dentro del componente

Una de las filosofías de React es en crear la mayor cantidad de componentes posibles para seccionar nuestra aplicación, de esta forma podemos tener mayor control sobre el desarrollo de los mismos, en el ejemplo anterior, lo podríamos simplificar un poco más utilizando dos componentes, el código es el siguiente.-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component
{
    render()
    {
        return <h2>Bienvenidos a {this.props.msg}</h2>
    };
};

class HolaMundo extends React.Component
{
    render ()
    {
         return (
            <div className="main">
                <h1>Hola!</h1>
                <Message msg={this.props.name} />
                <img src="logo.png" />
            </div>
        );
    };
};

const rootElement = document.getElementById('root');
const element = <HolaMundo name="Codeando" />;

ReactDOM.render(
    element,
    rootElement
);
{% endhighlight %}

Creamos el componente Message y lo utilizamos dentro del componente HolaMundo, lo ideal es tener cada componente en un archivo diferente, pero para ello necesitamos utilizar módulos, los veremos más adelante.

> Los props (properties) tienen una regla muy importante en React y es que estos no pueden ser modificados, es decir deben de ser en todo momento de solo lectura.

## Estado de un componente

El estado de un componente hace referencia a los datos que le pasamos al componente y la actualización de los mismos, la clase React.Component es abstracta y nos hereda varios métodos para poder controlar el estado de nuestro componente, el ejemplo más claro para aprender sobre los estados es crear un reloj que actualice cada segundo su estado, el componente base es el siguiente.-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <h2>{this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};

const rootElement = document.getElementById('root');
const element = <Clock date={new Date} />;

ReactDOM.render(element, rootElement);
{% endhighlight %}

Nuestro componente solo cuenta con el método render() y si lo mostramos en pantalla tan solo mostrara la hora en la que fue rendereizado, para mejorarlo vamos a utilizar las características (métodos y propiedades) adicionales para los estados, vamos a crear un estado local en nuestro componente, lo hacemos agregando un constructor a nuestra clase.-

{% highlight javascript linenos %}
class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};
{% endhighlight %}

En el constructor agregamos la propiedad state, en esta almacenamos el estado local de nuestro componente y en la linea 16 los utilizamos.

> Super() es el constructor de la clase de la que estamos heredando, y los constructores no se heredan entre jerarquía de clases, es por eso que debemos inicializarlo, y siempre debe ser la primer linea del constructor.

### Ciclo de vida de un componente

Cuando trabajamos con estados es importante controlar el ciclo de vida de estos, a este proceso React lo denomina montaje (mount), React nos proporciona dos métodos para manejarlo.-

* componentDidMount().- Se ejecuta después de que el componente sea renderizado en el DOM.
* componentWillUnmount().- Se ejecuta cuando el componente es eliminado del DOM.

Para hacer que nuestro reloj comience a actualizar la hora necesitamos crear un temporizador, el método componentDidMount() es ideal para hacerlo, mientras que en el método componentWillUnmount() vamos a matar el proceso de temporizador para liberar memoria en caso de que necesitemos borrar el componente del DOM.-

{% highlight javascript linenos %}
class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount()
    {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};
{% endhighlight %}

Note que en la linea 13 utilizamos el método setState(), este método se utiliza para actualizar el valor de la propiedad state, si corremos el ejemplo nuestro reloj ya debería de estar funcionando.

> es importante utilizar el método setState() para modificar el valor del estado y no hacerlo directamente.

## Conclusiones

El uso de los componentes con React simplifican bastante nuestro desarrollo espero haberlo plasmado en este articulo, además, comentaba que lo ideal es crear cada componente en un archivo diferente, para poder tener una aplicación mejor estructurada, para ello veremos en otro articulo como trabajar con módulos.

Te invito a visitar nuestro repositorio en github para acceder a el código visto en este articulo (el código lo encuentras en la rama 02_componentes_props_y_estados).-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/02_componentes_props_y_estados)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Introducción a JSX](/articulos/introduccion-a-jsx.html)
* Articulo siguiente: [Entendiendo el virtual DOM con React](/articulos/entendiendo-el-virtual-dom-en-react.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código!