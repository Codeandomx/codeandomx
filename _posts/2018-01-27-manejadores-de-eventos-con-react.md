---
title: Manejadores de eventos con React
author: Paulo Andrade
categories: reactjs
tags: react javascript es6
---

![handling event react](http://blog.codeando.org/img/react.jpg)

El **manejo de eventos en React** es muy parecido a como lo hacemos normalmente con Javascript, aunque este ultimo suele utilizar oyentes como "addEventListener()" en elementos del DOM en espera de, como su nombre lo indica, **ocurra algún evento**, con React no funciona de esta forma, el oyente se incluye al elemento cuando se añade el evento.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Curso de React</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/03_manejo_de_eventos" target="_blank">Github</a>.
</div>

## Preparando el camino

Vamos a abrir nuestro archivo "main.jsx", borramos el ejemplo que vimos en el tema anterior y empecemos uno nuevo, donde vamos a [crear un componte](/articulos/componentes-props-y-estados-con-react.html) llamado "Button" el cual va a renderizar un botón sencillo.-

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
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component
{
    // Código para renderizar
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <button>
                    mi boton
                </button>                
            </div>
        );
    };
};

// Renderizamos el componente
const rootElement = document.getElementById('root');
const element = <Button />;

ReactDOM.render(element, rootElement);
{% endhighlight %}

Al renderizar el botón mostrará el texto "mi boton", vamos a cambiar este texto por un estado, el cual mostrar el número 0 (lo hacemos con la finalidad de crear un contador), entonces [declaramos el estado](/articulos/componentes-props-y-estados-con-react.html) mediante el constructor de la clase.-

{% highlight javascript linenos %}
constructor(props){
    super(props);
    this.state = {
        count: 0
    }
}
{% endhighlight %}

Y actualizamos nuestro método render cambiando el texto "mi boton" por el estado que declaramos, quedando de esta forma.-

{% highlight javascript linenos %}
render()
{
    return (
        <div>
            <h1>Bienvenidos a Codeando</h1>
            <button>
                { this.state.count }
            </button>                
        </div>
    );
};
{% endhighlight %}

Listo ya tenemos nuestro componente preparado para pasar al siguiente subtema donde empezaremos a trabajar con los manejadores de eventos.

## Manejador de eventos (Handling Events)

En React un manejador o controlador de eventos es un método de nuestro componente, pero no esta vinculado con este, es decir,  dentro del método (manejador) no podremos acceder al scope (this) del componente.

Empecemos creando nuestro método el cual actualizara el estado del componente aumentando en uno la propiedad "count".-

{% highlight javascript linenos %}
// Manejador de evento de nuestro boton
handleClick ()
{
    this.setState((prevState) => ({
        count: (prevState.count + 1)
    }));
}
{% endhighlight %}

> prevState hace referencia al estado del componente tal y como estaba antes de la llamada el método setState(), es ideal si queremos modificar el estado con base a este mismo.

Note que para poder acceder al método setState() necesitamos acceder al scope (this) del componente, para lograrlo debemos enlazar el método con el componente y lo podemos hacer en el constructor del mismo mediante el método bind() como se muestra a continuación.-

{% highlight javascript linenos %}
this.handleClick = this.handleClick.bind(this);
{% endhighlight %}

Nuestro constructor queda de la siguiente forma.-

{% highlight javascript linenos %}
constructor(props){
    super(props);
    // Estado del componente
    this.state = {
        count: 0
    }
		
    // Enlazamos el manejador de eventos con el componente
    this.handleClick = this.handleClick.bind(this);
}
{% endhighlight %}

Ahora vamos a añadir el manejador de eventos a nuestro elemento "button" por medio de la interpolación.-

{% highlight javascript linenos %}
...
<button onClick={this.handleClick}>
...
</button>
...
{% endhighlight %}

Si corremos nuestra aplicación veremos en pantalla un boton con el texto 0, que al hacer clic en el. el 0 aumentara en 1 y así susesivamente.

## Comportamiento por defecto

Al igual que en Javascript, React puede anular el comportamiento por defecto de un elemento del DOM como un enlace, basta con añadir el método preventDefault() en el manejador del evento como se muestra a continuación.-

{% highlight javascript linenos %}
// Manejador de evento de nuestro boton
handleClick (e)
{
    e.preventDefault();
    this.setState((prevState) => ({
        count: (prevState.count + 1)
    }));
}
{% endhighlight %}

Note que en la linea 2 nuestro manejador recibe como parámetro el objeto generado por el evento y en la linea 4 utilizamos el método preventDefault() para impedir que el enlace se ejecute y de esta forma continuar con el código dentro del manejador.

Para ver su funcionamiento, también debemos cambiar el elemento "button" por el elemento "a".-

{% highlight javascript linenos %}
...
<a href="#" onClick={this.handleClick}>
...
</a>
...
{% endhighlight %}

## Conclusiones

El manejo de eventos es muy importante en React, ya que parte de su funcionalidad es permitirnos crear la comunicación entre componentes, existen diversos eventos que nos serán de gran utilidad y puedes consultarlos en [eventos Javascript](https://www.w3schools.com/js/js_events.asp).

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/03_manejo_de_eventos).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Entendiendo el virtual DOM en React](/articulos/entendiendo-el-virtual-dom-en-react.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código.