---
title: Introducción a R, variables y tipos de datos
author: Paulo Andrade
categories: r
tags: r
---

![Introducción a R, variables y tipos de datos](/img/r.jpg)

En artículos pasados aprendimos a [instalar R en sistemas Ubuntu](http://blog.codeando.org/articulos/instalar-r-en-ubuntu-linux.html) (16.XX y 17.XX), además, aprendimos a [instalar R Studio](http://blog.codeando.org/articulos/instalar-r-studio-en-ubuntu-linux.html), un IDE para empezar a crear proyectos basados en R de forma muy simple, así que antes de continuar te recomiendo darle una leída a los artículos anteriores.

## Comentarios en R

Una buena practica en cualquier lenguaje de programación es utilizar comentarios para las partes importantes de nuestro código, y en R no es la excepción, para utilizar los comentarios utilizamos el símbolo #.-

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight python linenos %}
# Este es un comentario
{% endhighlight %}

## Operaciones aritméticas en R

R contiene las operaciones aritméticas básicas como cualquier otro lenguaje de programación y no necesitan explicación.-

{% highlight python linenos %}
3 + 3 # suma
3 - 3 # resta
3 / 3 # división
3 * 3 # multiplicación
{% endhighlight %}

Además R tiene otras dos operaciones básicas, el operación potencia y modulo.-

{% highlight python linenos %}
3^2 # potencia
3 %% 3 # modulo
{% endhighlight %}

* El ^operador eleva el número a su izquierda al poder del número a su derecha: por ejemplo, 3^2 es 9.
* El módulo devuelve el resto de la división del número a la izquierda por el número a la derecha, por ejemplo 5 módulo 3 o 5 %% 3 es 2.

## Variables

Una variable permite almacenar un valor o un objeto en R. de esta forma, puede usar el nombre de esta variable para acceder fácilmente al valor o al objeto que está almacenado dentro de esta.

Para asignar el valor a una variable lo hacemos mediante el uso de los operadores leftward, rightward e equal, como se muestra a continuación.-

{% highlight python linenos %}
num <- 3 # leftward
3 -> num #rightward
num = 3 # equal
{% endhighlight %}

Notemos un par de cosas, en R no se declara el tipo de la variable ya que se asigna de forma dinámica, además, no se necesita utilizar ; al finalizar la sentencia, ahora hablemos un poco sobre los nombres de las variables, estos deben de cumplir con ciertas condiciones.-

* Debe de empezar con una letra o punto.
* Puede contener guiones (_).
* No debe contener caracteres especiales.

Ejemplos.-

{% highlight python linenos %}
num # valido
1num # invalido
.num # valido
num% # invalido
num_1 # valido
{% endhighlight %}

Por ultimo para eliminar una variable haces uso de la función rm().-

{% highlight python linenos %}
rm(num) # eliminamos la variable
{% endhighlight %}

## Tipo de datos en R

En R, las variable no se declaran de ningún tipo de datos, sino que obtiene el tipo de datos del objeto R que se le ha asignado. Por lo tanto, R se denomina lenguaje de tipado dinámico, lo que significa que podemos cambiar el tipo de datos de una variable una y otra vez cuando se utiliza en un programa.

### Tipos de datos básicos en R

R funciona con numerosos tipos de datos. Algunos de los tipos más básicos para comenzar son los siguientes.-

* Los valores de decimales como 2.5 se llaman numéricos (numerics).
* Los números naturales como 2 se llaman enteros (integers). Los enteros son también numéricos.
* Los valores booleanos (TRUE o FALSE) se llaman lógicos (logics).
* Los valores de texto (o cadena) se llaman caracteres (characters).

### Mas tipos de datos en R

R cuenta con tipos de datos basados en los tipos de datos anteriores como lo son.-

* Vectores.
* Listas.
* Matrices
* Arrays.
* Factores.
* Marcos de datos.

Estos tipos de datos los veremos con detalle en los siguientes articulos.

## Obtener el tipo de dato en R

Hay ocasiones en las que necesitamos saber que tipo de dato tiene una variable, para esta tarea utilizaremos la función class(), ejemplo.-

{% highlight python linenos %}
num <- 3
class(num) # resultado: "numeric"
{% endhighlight %}

## Conclusiones

Ya dimos el primer paso para empezar a trabajar con R, aun que es un poco básico el articulo es necesario para comprender los siguientes artículos.

Que tengan feliz código