---
title: Mostrar y ocultar elementos en Angular
author: Paulo Andrade
categories: angular2
tags: angular javascript es6
---

![Mostrar y ocultar elementos con Angular](http://blog.codeando.org/img/angular2.jpg)

En el articulo pasado aprendimos a trabajar con [servicios en Angular](http://blog.codeando.org/articulos/servicios-con-angular.html), y como como parte de este proceso borramos los sitios de interés que declaramos de forma manual para poder mostrar solamente los que añadimos mediante un [formulario](http://blog.codeando.org/articulos/formularios-con-angular.html), al haber hecho este cambio y cargar la aplicación por primera vez, vemos en pantalla el siguiente cuadro rojo.-

![show and hidden an element Angular](/img/angular6.jpg)

Este cuadro no debería mostrarse ya que aun no tenemos ningún sitio de interés agregado, e inclusive agregando alguno, no debería de mostrarse hasta que se haga clic en algún sitio de interés.

> Recuerda que en este cuadro rojo mostramos el sitio de interés seleccionado.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/06_ocultar_y_mostrar_elementos" target="_blank">Github</a>.
</div>

## Atributo hidden

El atributo "hidden" es parte del estándar de HTML, es decir, no es propia de Angular, pero para utilizarla utilizaremos un [enlace de propiedad](/articulos/interpolacion-property-y-event-binding-con-angular.html) (property binding), su sintaxis es la siguiente.-

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight html linenos %}
<!-- Ocular elemento -->
<span [hidden]="true">Oculto</span>

<!-- Mostrar elemento -->
<span [hidden]="false">Visible</span>
{% endhighlight %}

El ocultar o mostrar algún elemento depende de un valor booleano, de esta forma podemos utilizar los enlaces de propiedad para manipular el valor.

## Mostrar y ocultar elementos

Empezamos abriendo la plantilla del componente home "home.component.html" y nos situamos en la estructura del contenedor rojo.-

{% highlight html linenos %}
<div>
    <p class="red">
        { { site.name } }: <br>
        <small>{ { site.url } }</small>	
    </p>
</div>
{% endhighlight %}

Note que la propiedad "site" es la encargada de almacenar la información que mostramos en esta parte de la aplicación, en el componente home, esta propiedad esta solo declarada (no esta inicializada aun) y podemos aprovechar esta situación para manipular el valor para el atributo "hidden".

Así que añadimos un enlace de propiedad a este elemento de la siguiente forma.-

{% highlight html linenos %}
<div [hidden]="!site">
    <p class="red">
        { { site.name } }: <br>
        <small>{ { site.url } }</small>	
    </p>
</div>
{% endhighlight %}

Su uso es muy sencillo, si la propiedad "site" esta vaciá nos devuelve false y con el operador de negación lo convertimos en un true, de esta forma ocultamos el elemento, en cuanto la propiedad tenga un valor, el elemento se mostrara en pantalla.

Si agregamos un sitio de interés noten que el cuadro rojo aun sigue oculto.-

![show and hidden an element Angular](/img/angular7.jpg)

El cuadro aparecerá hasta que hagamos clic en algún sitio.-

![show and hidden an element Angular](/img/angular8.jpg)

## Conclusiones

Ocultar y mostrar elementos es muy sencillo con Angular gracias al enlace de propiedad, en el siguiente articulo abarcaremos el tema del router en Angular.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/curso-de-introduccion-a-angular/tree/06_ocultar_y_mostrar_elementos).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior:  [Servicios con Angular](http://blog.codeando.org/articulos/servicios-con-angular.html).
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular).

Que tengan feliz código.