---
title: Entendiendo el virtual DOM en React
author: Paulo Andrade
categories: reactjs
tags: react javascript
---

![Entendiendo el virtual DOM con React](/img/react.jpg)

React introdujo por completo el tema de **virtual DOM** en nuestras tareas de desarrollo (aun que hay muchas librerías con las que lo podemos trabajar), y me gustaría que antes de continuar con el **curso de React** aclaremos que es el DOM, el virtual DOM y las diferencias que existen entre ambos, aun que más que diferencias, son usos que les da React.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Curso de React</a>.</div>

## Que es el DOM?

DOM significa **Document Object Model** y es considerado una abstracción de texto estructurado, note que en la definición hablamos de texto, pues este texto no es más que la estructura HTML del documento que se muestra en pantalla, y cada elemento HTML es considerado un nodo (los nodos a su ves son objetos Javascript) que forma parte del DOM, entonces el DOM lo podemos visualizar como un árbol y el elemento HTML principal estará en la punta (o cima) de este árbol.

> El DOM es la representación en memoria de la estructura HTML del documento y es llamado DOM HTML.

El **DOM HTML** nos proporciona una API para poder agregar, modificar y eliminar nodos al DOM mediante métodos Javascript que seguramente los han utilizado más de alguna ves, por ejemplo tenemos la siguiente estructura HTML.-

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>DOM HTML</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
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

Y agregamos un elemento nuevo con el siguiente código Javascript.-

{% highlight javascript linenos %}
// Función para crear un elemento HTML
const newElement = function (text)
{
    // Creamos el elemento div
    let div = document.createElement("div");
    // creamos el contenido del elemento
    let content = document.createTextNode(text);
    // añadimos el contenido al elemento
    div.appendChild(content);
    // Obtenemos el elemento padre
    let root = document.getElementById("root");
    // Insertamos el nuevo elemento al elemento padre
    document.body.insertBefore(div, root);
}

// Llamamos a la función
newElement('Codeando');
{% endhighlight %}

El resultado es el siguiente.-

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>DOM HTML</title>
</head>
<body>
    <div>Codeando</div>
    <div id="root"></div>
</body>
</html>
{% endhighlight %}

> En el código Javascript "document" es una abstracción del nodo principal del DOM, los métodos que este contiene son parte de la API para manipular el DOM.

A simple vista parece muy eficiente, pero no es así, actualmente el desarrollo web esta basado en SPA (Single Page Application) y por tanto en un solo documento de este tipo el DOM sera enorme y el problema surge en que si necesitamos realizar cambios, el DOM tendrá que ser recorrido desde el nodo principal hasta el elemento buscado, entonces, da la apariencia en que su rendimiento es malo y lento.

Pero sorpresa, el DOM realmente es rápido, lo que es lento es el proceso que realiza el navegador en aplicar los cambios en el DOM ya que tiene que volver a reestructurarlo, solicitar el CSS para aplicar los estilos y mostrarlo en pantalla.

Para solventar el problema que planteamos, React hace uso del virtual DOM.

## Que es el virtual DOM?

El virtual DOM es una copia ligera del DOM, cada uno de sus nodos contiene las mismas funcionalidades para manipularlo que las del DOM pero con una gran diferencia, los cambios realizados en el virtual DOM no se muestran en pantalla y esto hace que el proceso sea más rápido.

React realiza todos los cambios en el virtual DOM mediante el método render() de los componentes, y hablando de estos, la importancia de trabajar con componentes en React es fundamental para el virtual DOM, ya que los componentes contienen estados y cuando hay cambios de estados se plasman en el virtual DOM y después gracias al algoritmo Diff (algoritmo eficiente de diferenciación) solo se realizan los cambios necesarios en el DOM, haciendo el proceso eficiente y rápido.

## Conclusiones

Sabiendo ya las diferencias entre el DOM y el virtual DOM podemos continuar con el curso de React, ya que estaremos utilizando mucho estos conceptos.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Componentes, props y estados con React](http://blog.codeando.org/articulos/componentes-props-y-estados-con-react.html)
* Articulo siguiente: [Manejadores de eventos con React](http://blog.codeando.org/articulos/manejadores-de-eventos-con-react.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código.