---
title: Vectores (arrays) en R
author: Paulo Andrade
categories: r
tags: r
---

![Vectores o arrays con R programming](/img/r.jpg)

En el articulo anterior aprendimos los [conceptos básicos del lenguaje para estadística R](http://blog.codeando.org/articulos/introduccion-a-r-variables-y-tipos-de-datos.html), en el cual abarcamos una breve descripción del lenguaje, introducción a los tipos de datos básicos y como trabajar con las variables.

En este articulo aprenderemos a trabajar con vectores o también conocidos como arrays unidimensionales en R.

## Que son los vectores

En programación, los vectores son arrays de una dimensión (unidimensionales) que pueden contener datos numéricos, datos de caracteres o datos lógicos. En otras palabras, un vector es una herramienta simple para almacenar datos para facilitar su manipulación.-

* Modificarlos.
* Clasificarlos.
* Eliminarlos.

Los datos en un vector son clasificados en el orden en el que son ingresados, y se hace referencia a estos mediante un indice, el cual comienza a partir de 1.

> Note que los indices del vector comienzan a partir del 1 y no del 0 como en la mayoría de los lenguajes de programación.

## Declarar e instanciar vectores en R

Para declarar un vector sin valores se utiliza la función [C()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/c) como se muestra a continuación.-

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight r linenos %}
> nums <- c()
{% endhighlight %}

Si verificamos en la consola interactiva veremos que nos devuelve un valor NULL.-

{% highlight r linenos %}
> num[] # mostramos el contenido del vector/array
[1] NULL
{% endhighlight %}

> Las respuestas en la consola interactiva de R se muestran interponiendo entre corchetes el numero de linea, ejemplo [1] para la primer linea de la respuesta.

Para añadir datos al vector al momento de declararlo, debemos de pasarlos como argumento de la función c().-

{% highlight r linenos %}
> num <- c(1, 2, 3, 4) # vector numerico
> cad <- c("paulo", "hugo", "carlos") # vector de caracteres
> con <- c(TRUE, FALSE, TRUE) # vector logico
> ejemplo <- c(1, "paulo", TRUE) # vector combinado
> ejemplo[2]
[1] "paulo"
> ejemplo[1]
[2] "1"
{% endhighlight %}

Muestro diferentes tipos de vectores, de la linea 5 a 8 mostramos el contenido del indice 1 y 2 del vector de datos combinados.

## Nombrar un vector

Como analista de datos, es importante tener una visión clara de los datos que se están utilizando. Por lo tanto, es esencial comprender a qué se refiere cada uno de los elementos, para dar un nombre a los elementos de un vector se utiliza la función [names()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/names).-

{% highlight r linenos %}
> empleado <- c("Paulo", "Andrade")
> names(empleado) <- c("nombre", "apellido")
{% endhighlight %}

Note en la linea 2 que como parámetro de la función names() pasamos el vector al que le queremos asignar nombres, y a este, le asignamos el nuevo vector de nombres (puede sonar un poco tedioso), veamos como se muestra en consola al ver el contenido del vector empleado.-

{% highlight r linenos %}
> empleados[]
    nombre  apellido 
    "Paulo" "Andrade" 
{% endhighlight %}

También es posible asignar como vector de nombres un vector ya existente, ejemplo.-

{% highlight r linenos %}
> empleado <- c("Paulo", "Andrade") # Creamos vector de datos
> nombres <- c("nombre", "apellido") # creamos vector para nombres
> names(empleado) <- nombres # asignamos el vector de nombres al de datos
>
> # El resultado es el mismo
> empleados[]
    nombre  apellido 
    "Paulo" "Andrade"
{% endhighlight %}

## Cálculos aritméticos con vectores en R

Uno de los temas a tratar en la analítica de datos es poder realizar operaciones con los datos almacenados en vectores, entre estas, nos encontramos con las operaciones aritméticas básicas que veremos a continuación.

### Suma de vectores en R

Para sumar vectores lo podemos realizar de diversas formas, por ejemplo, podemos declarar los vectores y posteriormente sumarlos y asignar la respuesta a otro vector, ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
> num2 <- c(5, 4, 3)
>
> res <- num1 + num2 # resultado = [6, 6, 6]
>
> res[]
    [1] 6 6 6
{% endhighlight %}

Otra forma de realizar la suma de vectores, es de esta forma.-

{% highlight r linenos %}
> res <- c(1, 2, 3) + c(5, 4, 3) # resultado = [6, 6, 6]
>
> res[]
    [1] 6 6 6
{% endhighlight %}

Este principio también aplica para las demás operaciones aritméticas (resta, división, multiplicación, potencia, modulo).

### Calcular la suma de elementos  de un vector en R

Para poder obtener la suma de todos los elementos numéricos de un vector utilizamos la función [sum()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/sum), ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> # vemos el resultado en la consola interactiva
> sum(num1)
    [1] 6
{% endhighlight %}

### Obtener el promedio de un vector en R

R nos facilita obtener el promedio de los valores asignados a un vector por medio de la función [mean()](http://www.rdocumentation.org/packages/base/functions/mean), ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> # vemos el resultado en la consola interactiva
> mean(num1)
    [1] 2
{% endhighlight %}

### comparaciones lógicas

En ocasiones necesitaremos comparar el resultado de dos operaciones con vectores, para ver si una es mayor, menor o igual a la otra, ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3) # Declaramos los vectores
> num2 <- c(5, 4, 3)
>
> total_num1 -> sum(num1) # Obtenemos la suma de los elementos del vector
> total_num2 -> sum(num2)
>
> res <- total_num1 > total_num2 # hacemos la comparación
>
> # Mostramos el resultado
> res
    [1] FALSE
{% endhighlight %}

Los operadores de comparación que podemos utilizar son los siguientes.-

* &gt; mayor que.
* < menor que.
* == igual que.
* &gt;= mayor o igual que.
* <= menor o igual que.
* != diferente (distinto) que.

En el ejemplo anterior utilizamos el operador > con dos datos numéricos, pero también es posible utilizarlo con cada uno de los elementos de un vector, ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3, 4, 5) # Declaramos el vector
> # Mostramos el resultado
> num1 > 3
    [1] FALSE FALSE FALSE TRUE TRUE
{% endhighlight %}

Tomando como referencia el ejemplo anterior, podemos utilizar la comparación para mostrar solo los datos que son mayores a 3, ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3, 4, 5) # Declaramos el vector
>
> res <- num1 > 3 # Realizamos la comparación
>
> num1[res] # Obetenemos el resultado
    [1] 4 5
{% endhighlight %}

## Selección de datos de un vector en R

Para obtener un datos en especifico o todos los datos de un vector en R, utilizamos el nombre del vector seguido de corchetes, si los corchetes están vacíos, entonces nos mostrara el contenido completo del vector.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> num1[]
    [1] 1 2 3
{% endhighlight %}

Si queremos mostrar un dato en especifico, debemos de ingresar entre los corchetes el indice del dato a mostrar.-

> Recuerda que en R los indices de los vectores comienzan en 1.

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> num1[2]
    [1] 2
{% endhighlight %}

Ahora que si queremos obtener distintos datos, dentro de los corchetes debemos indicarlos mediante un vector anónimo, en el siguiente ejemplo, mostrare los indices 1 y 3 del vector num1.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> num1[c(1, 3)]
    [1] 1 3
{% endhighlight %}

El ejemplo anterior es muy conveniente en casos en los que no existen demasiados datos, por otro lado, si queremos obtener los datos del 2 al 10 (en caso de estar asignados), lo podemos hacer de esta forma.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> num1[2:10]
    [1] 2 3 NA NA NA NA NA NA NA
{% endhighlight %}

> utilizar la nomenclatura 2:10, R nos genera un vector con todos los números naturales del 2 al 10 ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).

Que pasa si intento acceder a un indice no asignado?, R nos devolverá NA (not assigned).-

{% highlight r linenos %}
> num1 <- c(1, 2, 3)
>
> num1[4]
    [1] NA
{% endhighlight %}

Otra forma de acceder al valor especifico de un vector, es utilizar el vector de nombres asignado, ejemplo.-

{% highlight r linenos %}
> num1 <- c(1, 2, 3, 4, 5)
> days <- c("lunes", "martes", "miercoles", "jueves", "viernes")
>
> names(num1) <- days
>
> num1[c("lunes", "viernes")]
    [1] 1 5
{% endhighlight %}

## Conclusiones

Existen infinidad de funciones que podemos utilizar para realizar cálculos con vectores en R, en este articulo solo se nombran los de más utilidad, si deseas aprender más puedes visitar la [documentación oficial de R](https://www.rdocumentation.org/search?q=vector).

Que tengan feliz código.