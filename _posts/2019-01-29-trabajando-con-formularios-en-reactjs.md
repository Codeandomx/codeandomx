---
title: Trabajando con formularios en ReactJS
layout: post
author: Paulo Andrade
categories: reactjs
tags: react javascript es6
---

![Mostrar datos de arrays con map y React](/img/react.jpg)

Crear formularios con **RectJS** es muy sencillo, solo hay que poner atención en una sola cosa, los elementos de formularios HTML funcionan de forma un poco diferente a otros elementos en el DOM con React, ya que los formularios normalmente mantienen algún estado interno de los datos, en este articulo vamos a aprender a trabajar con el estado de los formularios.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Curso de React</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="" target="_blank">Github</a>.
</div>

## Formularios y ReactJS

Vamos a empezar a trabajar con un formulario muy simple en [React](/articulos/introduccion-a-react-creando-aplicacion-basica.html) (para entender su funcionamiento), como lo puede ser el de un login, el cual solo tiene dos campos para capturar información y el boton de envio.-

{% highlight html linenos %}
<form>
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <input type="submit" value="Ingresar" />
</form>
{% endhighlight %}

> Si utilizamos este formulario tal y como esta en un [componente de Rect](/articulos/componentes-props-y-estados-con-react.html) funciona, pero lo ideal es poder manejar el estado del formulario mediante [Javascript](/articulos/introduccion-a-es6-javascript.html).

Como comentaba al principio del articulo los formularios manejan su propio estado, si lo combinamos con el estado de React, podemos crear un formulario bastante robusto que cubra nuestras necesidades, a esto se le conoce como componente controlado.

## Estado del formulario con elementos input

Lo primero que debemos hacer es crear un componente para nuestro formulario.-

{% highlight javascript linenos %}
import React, { Component } from 'react'
import { render } from 'react-dom'

class Form extends Component{
  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
       <input type="submit" value="Ingresar" />
    </form>
    )
  }
}

render(<Form/>, document.getElementById('app'));
{% endhighlight %}

Ahora vamos a declarar el estado del componente de la siguiente forma.-

> Si no estas muy familiarizado con el estado del componente te recomiendo leer el articulo: [componentes, props y estados en React](/articulos/componentes-props-y-estados-con-react.html)

{% highlight javascript linenos %} 
class Form extends Component{
  // Constructor del componente
  constructor(props){
    super(props);
    // Declaramos el estado
    this.state = {username: '', password: ''};

    // Agregamos this al contexto de los métodos
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Metodos para manejar el estado del formulario
  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    console.log('El usuario  ' + this.state.username + ' inicio sesion');
    event.preventDefault(); // Evitamos la propagación del formulario
  }
  // Renderizamos el componente
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUsername}/>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
        </label>
       <input type="submit" value="Ingresar" />
    </form>
    )
  }
}
{% endhighlight %}

Entre los cambios que hicimos en el componente, declaramos su estado dentro del constructor, el contiene dos propiedades, una para cada input de nuestro formulario.-

{% highlight javascript linenos %}
this.state = {username: '', password: ''};
{% endhighlight %}

Creamos los manejadores de cambio en el estado de los elementos del formulario, uno para cada uno de estos elementos y además el manejador de envio del formulario.-

{% highlight javascript linenos %}
// Metodos para manejar el estado del formulario
// Manejador para el input de username
handleUsername(event) {
  this.setState({username: event.target.value});
}
// Manejador para el input de password
handlePassword(event) {
  this.setState({password: event.target.value});
}
// Manejador para el envio del formulario
handleSubmit(event) {
  console.log('El usuario  ' + this.state.username + ' inicio sesion');
  event.preventDefault(); // Evitamos la propagación del formulario
}
{% endhighlight %}

Como estos manejadores estan fuera del contexto que declaramos en el constructor, utilizamos el método "bind" para agregar a su contexto el ambito de "[this](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind)".-

{% highlight javascript linenos %}
// Agregamos this al contexto de los métodos
this.handleUsername = this.handleUsername.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
{% endhighlight %}

Por ultimo cada uno de estos manejadores los asignamos a su respectivo elemento, por ejemplo el manejador de envio de formulario lo añadimos al evento "[onSubmit()](https://www.w3schools.com/jsref/event_onsubmit.asp)".-

{% highlight javascript linenos %}
<form onSubmit={this.handleSubmit}>
{% endhighlight %}

Y a los inputs pr medio del evento "[onChange()](https://www.w3schools.com/jsref/event_onchange.asp)", además, el valor lo asignamos directamente del estado del componente de React.-

{% highlight javascript linenos %}
<input type="text" value={this.state.username} onChange={this.handleUsername}/>
<input type="password" value={this.state.password} onChange={this.handlePassword} />
{% endhighlight %}

Puedes ver el ejemplo funcionando en [Codepen](https://codepen.io/codeandoclub/pen/mvOJva).-

<p class="codepen" data-height="262" data-theme-id="dark" data-default-tab="js,result" data-user="codeandoclub" data-slug-hash="mvOJva" data-preview="true" style="height: 262px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Formularios con ReactJS">
  <span>See the Pen <a href="https://codepen.io/codeandoclub/pen/mvOJva/">
  Formularios con ReactJS</a> by Paulo Andrade (<a href="https://codepen.io/codeandoclub">@codeandoclub</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Estado del formulario con elementos textarea

{% highlight javascript linenos %}
iiii
{% endhighlight %}

## Estado del formulario con elementos submit

{% highlight javascript linenos %}
iiii
{% endhighlight %}

## Conclusiones

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-react/tree/04_mostrar_datos_de_array_con_map).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Manejadores de eventos con React](/articulos/manejadores-de-eventos-con-react.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código.