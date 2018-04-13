---
title: Obtener el factorial en C/C++
author: Paulo Andrade
categories: c
tags: c algoritmos
---

![Factorial de un numero con C/C++](/img/c.jpg)

[MicroPost] En este micro articulo aprenderemos como obtener el factorial de un número dado en en C/C++, puedes encontrar el código funcional al final en nuestro repositorio de Github.

## Que es el factorial

El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n ([definición wikipedia](https://es.wikipedia.org/wiki/Factorial)).

## Algoritmo para factorial en C/C++

El siguiente método nos permite obtener el factorial de un número dado, el resultado estara limitado segun el sistema operativo con el que trabajaemos (32 o 64 bits).-

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight c linenos %}
// Recibe como parametro el numero a obtener el factorial
long long int(int n)
{
    // en la variable fac, guardaremos el resultado
    long long int fac = 1;

    // Verificamos que el numero sea mayor o igual a 2 para calcular el factorial
    if(n >= 2){
		    // Obtenemos el factorial
        for(int i = 1; i <= n; i++){
            fac *= i;
        }
    }

    return fac;
}
{% endhighlight %}

El funcionamiento del algoritmo es bastante simple, en la linea 3 declaramos la variable "fac" en la cual almacenaremos el producto de los números naturales hasta n.-

{% highlight c linenos %}
// Declaramos fac para lamacenar el producto del factorial
long long int fac = 1;
{% endhighlight %}

> Tome en cuenta que el tipo de dato a utilizar es long long int, usted puede cambiar este tipo de dato a long long, long int, int, pero afectara al rango de enteros que se pueden obtener en el resultado mientras no se desborde la memoria. (stack overflow).

En la linea 5 verificamos que el número dado sea mayor o igual a 2, de esta forma si el número dado es 1, el resultado sera 1.-

{% highlight c linenos %}
// Verificamos que n sea myor o igual a 2
if(n >= 2){
    // ...
}
{% endhighlight %}

En cada iteración multiplicamos el valor almacenado en fac con el correspondiente al valor de i, es necesario indicar que en el ciclo for i se inicializa en 1, dado que si se inicializa en 0, el resultados siempre sera 0.-

{% highlight c linenos %}
// Obtenemos el factorial
for(int i = 1; i <= n; i++){
    fac *= i;
}
{% endhighlight %}

## Desbordamiento de pila

Al contrario del [algoritmo utilizado en Java](http://blog.codeando.org/articulos/obtener-el-factorial-de-un-numero-con-java.html) en C/C++ no tenemos una clase como BigItenger para utilizar numeros bastante grandes, pero se puede construir un sistema basado en strings para solucionar este problema, aun que es un poco complejo, pero este ya es tema para otro articulo.

Asi que por el momento solo podemos calcular el factorial hasta el número 20, ya que apartir del número 21 se deborda la memoria.

## Casos de uso

Para verificar su funcionamiento, creamos un método para ingresar el dato.-

{% highlight c linenos %}
int enterData()
{
    int n;

    printf("Ingrese el numero a verificar: ");
    scanf("%i", &n);

    return n;
}
{% endhighlight %}

Y en el método main realizamos el proceso.-

{% highlight c linenos %}
int main()
{
    int n;

    n = enterData();
    printf("Factorial de %i: %lli\n", n, factorial(n));
    // printf("Factorial de %i: %I64d\n", n, factorial(n)); // windows

    return 0;
}
{% endhighlight %}

> Para imprimir un numero de tipo long long int, utilizamos el caracter de salida %lli para sistemas GNU Linux y %l64 para sistemas Windows.

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 20, 21 } obtendremos el siguiente resultado.-

{% highlight c linenos %}
Ingrese un numero: 20
Factorial de 20: 2432902008176640000
Ingrese un numero: 21
Factorial de 21: -4249290049419214848
{% endhighlight %}

Donde se nota que en el ejemplo para el numero 21 hubo un desbordamiento de memoria.

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[Factorial.cpp]()

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código