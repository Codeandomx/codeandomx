---
title: Matrices y sus operaciones en R
author: Paulo Andrade
categories: r
tags: r
---

![Matrices en R programming](/img/r.jpg)

En el articulo anterior aprendimos a trabajar con [vectores en R](/articulos/vectores-arrays-en-r.html) (también conocidos como arrays unidimensionales), en este articulo hablaremos sobre las matrices en R o array bidimensional, como declararlas e inicializarlas, trabajar con estas y lo más importante en la analítica de datos, realizar operaciones con estas.

## Que son las matrices

En programación, una matriz se denomina un conjunto de variables (también llamado bloque) del mismo tipo que el considerado en matemáticas (ordenación rectangular de elementos algebraicos que pueden sumarse y multiplicarse de varias maneras), y cuyo acceso se realiza por índices o líneas.

Al igual que los vectores, podemos.-

* Modificarlos.
* Clasificarlos.
* Eliminarlos.

Se hace referencia a los datos en una matriz mediante dos indices, uno para obtener la fila y otro para obtener la posición en esa fila (columna), el cual comienza a partir de 1.

> Note que los indices de la matriz comienzan a partir del 1 y no del 0 como en la mayoría de los lenguajes de programación.

## Declarar e inicializar matrices en R

Para declarar una matriz en R se utiliza la función [matrix](http://www.rdocumentation.org/packages/base/functions/matrix), veamos un ejemplo de su uso.-

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
> m <- matrix(1:9, byrow = TRUE, nrow = 3)
{% endhighlight %}

El ejemplo anterior nos crea una matriz cuadrada, con 3 filas y 3 columnas, además, la función matrix() normalmente recibe tres parámetros (puede recibir más) para poder crear nuestra matriz.-

* En el primer parámetro indicamos la colección de datos con la que se llenara la matriz (filas y columnas), empezando por la posición [1,1] y terminando en la posición [n,n], la colección a utilizar es un vector y lo podemos representar de esta forma.-

{% highlight r linenos %}
> c(1, 2, 3, 4, 5, 6, 7, 8, 9)
{% endhighlight %}

* En el segundo parámetro, byrow indicara si la matriz debe ser llenada primero por fila (indicamos su valor en TRUE) o por columna (indicamos su valor en FALSE).
* En el tercer parámetro, nrow indica el total de filas que va a tener nuestra matriz.-

Si mostramos los valores de nuestra matriz, veremos como se ha llenado con los datos antes mencionados.-

{% highlight r linenos %}
     [,1] [,2] [,3]
[1,]    1    2    3
[2,]    4    5    6
[3,]    7    8    9
{% endhighlight %}

## Crear matriz a partir de vectores ya declarados

En la analítica de datos, es usual tener vectores ya con algunos datos listos para ser procesados, veremos un ejemplo de como crear una matriz con 3 vectores de dos elementos cada uno, el primer elemento de cada vector hace referencia al total de hombres en una determinada institución y el segundo elemento al total de mujeres, cada vector representa una institución diferente.-

{% highlight r linenos %}
> esc_1 <- c(300, 234)
> esc_2 <- c(267, 211)
> esc_3 <- c(321, 176)
{% endhighlight %}

El siguiente paso es combinar los vectores anteriores en un solo vector, de esta forma tendremos los datos listos para poder crear nuestra matriz.-

{% highlight r linenos %}
> total <- c(esc_1, esc_2, esc_3)
{% endhighlight %}

Por ultimo vamos a crear una matriz de 3 filas, donde cada fila va tener los datos de una determinada institución.-

{% highlight r linenos %}
> m <- matrix(total, byrow = TRUE, nrow = 3)
{% endhighlight %}

Note que como primer parámetro de la función matriz pasamos el vector combinado, si mostramos el contenido de la matriz veremos lo siguiente.-

{% highlight r linenos %}
> m
     [,1] [,2]
[1,]  300  234
[2,]  267  211
[3,]  321  176
{% endhighlight %}

## Nombrando a una matriz en R

Al igual que los vectores, también podemos nombrar los elementos de una matriz, con la diferencia de que en una matriz debemos nombrar los elementos tanto para las filas como para las columnas.

R nos proporciona dos funciones que nos ayudaran con esta tarea rownames() y colnames(), estas funciones reciben como parámetro la matriz a la que se le asignaran los nombres, ejemplo.-

{% highlight r linenos %}
> names_rows <- c("Institucion 1", "institucion 2", "institucion 3")
> names_cols <- c("Hombres", "mujeres")
> rownames(m) <- names_rows
> colnames(m) <- names_cols
{% endhighlight %}

Ahora mostramos la matriz y veremos el siguiente resultado.-

{% highlight r linenos %}
> m
              Hombres mujeres
Institucion 1     300     234
institucion 2     267     211
institucion 3     321     176
{% endhighlight %}

También se puede nombrar a una matriz en el momento de su declaración por medio del parámetro dimnames, al cual se le asigna una lista con los dos vectores correspondientes (uno para las filas y otro para las columnas), ejemplo.-

{% highlight r linenos %}
> esc_1 <- c(300, 234)
> esc_2 <- c(267, 211)
> esc_3 <- c(321, 176)
> 
> total <- c(esc_1, esc_2, esc_3)
> 
> m <- matrix(total, byrow = TRUE, nrow = 3,
            dimnames = list(c("Institucion 1", "institucion 2", "institucion 3"),
                        c("Hombres", "mujeres")))
{% endhighlight %}

## Operaciones aritméticas con R

Las operaciones aritméticas son las mismas que vimos con los vectores, donde podemos utilizar suma, resta, división, multiplicación, modulo y potencia, solo cabe poner énfasis en la multiplicación ya que si tenemos dos matrices N y M y multiplicamos de esta forma.-

{% highlight r linenos %}
> N * M
{% endhighlight %}

Cada elemento de la matriz N, sera multiplicado por su elemento correspondiente en la matriz M, si queremos realizar la típica multiplicación de matrices en R se debe realizar de esta forma.-

{% highlight r linenos %}
> N %*% M
{% endhighlight %}

## Operaciones con matrices en R

Al igual que con los [vectores](/articulos/vectores-arrays-en-r.html) podemos utilizar funciones ya existentes para realizar operaciones con las matrices, como por ejemplo.-

### Calcular la suma de elementos  de una matriz en R

Para poder obtener la suma de todos los elementos numéricos de una matriz utilizamos la función [sum()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/sum), ejemplo.-

{% highlight r linenos %}
> sum(m)
    [1] 1509
{% endhighlight %}

### Obtener el promedio de una matriz en R

R nos facilita obtener el promedio de los valores asignados a una matriz por medio de la función [mean()](http://www.rdocumentation.org/packages/base/functions/mean), ejemplo.-

{% highlight r linenos %}
> mean(m)
    [1] 251.5
{% endhighlight %}

### Calcular los totales para las filas o columnas de la matriz en R

En R, la función [rowSums()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/colSums) calcula convenientemente los totales para cada fila de una matriz. Esta función crea un nuevo vector (podemos asignarlo a una variable), ejemplo.-

{% highlight r linenos %}
> rowSums(m)
Institucion 1 institucion 2 institucion 3 
          534           478           497 
{% endhighlight %}

La función colSums() funciona de igual forma, incluso la documentación es la misma para las dos funciones.-

{% highlight r linenos %}
> colSums(m)
Hombres mujeres 
    888     621 
{% endhighlight %}

## Añadir filas y columnas a una matriz en R

### Añadir columnas a una matriz

En R podemos agregar una o varias columnas a una matriz existente con la función [cbind()](https://www.rdocumentation.org/packages/base/versions/3.4.3/topics/cbind), que combina matrices y/o vectores juntos por columna.

Un ejemplo practico para entender el funcionamiento de la función cbind(), es obtener las sumas de las filas de la matriz "m", asignarlas a un nuevo vector al que llamaremos total, y crear una nueva columna para añadir esta información.-

{% highlight r linenos %}
> total <- rowSums(m)
> m <- cbind(m, total)
> m
              Hombres mujeres total
Institucion 1     300     234   534
institucion 2     267     211   478
institucion 3     321     176   497
{% endhighlight %}

> El identificador que le asignemos al vector de las sumas de la matriz (en nuestro ejemplo total) sera el que se tome en cuenta como nombre para la columna al agregarla a la matriz.

### Añadir filas a una matriz

Las filas se agreguen de igual forma que con las columnas, solo que ahora debemos utilizar la función [rbind()](http://www.rdocumentation.org/packages/base/functions/rbind)ejemplo.-

{% highlight r linenos %}
> total <- colSums(m)
> m <- rbind(m, total)
> m
              Hombres mujeres total
Institucion 1     300     234   534
institucion 2     267     211   478
institucion 3     321     176   497
total             888     621  1509
{% endhighlight %}

## Seleccionar elementos de una matriz

Para seleccionar un elemento en especifico de la matriz, al igual que lo hicimos con los vectores necesitamos utilizar corchetes, la matriz almacena datos en dos dimensiones, por lo tanto debemos de utilizar dos indices y estos deben estar separados por una coma [,].-

{% highlight r linenos %}
> m[2, 3]
    [1] 534
{% endhighlight %}

En el código anterior obtuvimos el total de la institución 1, note que como primer indice indicamos la fila, y como segundo indice indicamos la columna.

También podemos seleccionar todos los elementos por ejemplo de la primer columna.-

{% highlight r linenos %}
> m[, 1]
Institucion 1 institucion 2 institucion 3         total 
          300           267           321           888
{% endhighlight %}

O todos los elementos de la primer fila.-

{% highlight r linenos %}
> m[1, ]
Hombres mujeres   total 
    300     234     534 
{% endhighlight %}

También podemos obtener una submatriz indicando el rango de las filas y columnas a obtener.-

{% highlight r linenos %}
> n[1:2,2:3]
              mujeres total
Institucion 1     234   534
institucion 2     211   478
{% endhighlight %}

## Conclusiones

Existen infinidad de funciones que podemos utilizar para realizar cálculos con las matrices en R, en este articulo solo se nombran los de más utilidad, si deseas aprender más puedes visitar la [documentación oficial de R](https://www.rdocumentation.org/search?q=vector).

Que tengan feliz código