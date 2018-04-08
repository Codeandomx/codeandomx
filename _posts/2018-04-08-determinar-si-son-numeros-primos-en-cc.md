---
title: Determinar si son números primos en C/C++
author: Paulo Andrade
categories: C/C++
tags: C/C++ algoritmos
---

![Numeros primos en C/C++](/img/c.jpg)

[MicroPost] En este micro articulo aprenderemos como determinar si un número es primo o no en C/C++, puedes encontrar el código funcional al final en nuestro repositorio de Github.

## Que son los números primos

En términos matemáticos, un número primo es un número natural mayor que 1, el cual que tiene únicamente dos divisores distintos: él mismo número y el 1.

## Algoritmo

El siguiente método nos permite verificar si un número es primo o no.-

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
bool isPrime(int n)
{
    if(n % 2 == 0) return false;

    for(int i = 0; i * i <= n; i += 2){
        if(i % n == 0) return false;
    }

    return true;
}
{% endhighlight %}

El algoritmo esta optimizado para obtener el resultado esperado en el menor tiempo posible (puedes encontrar algoritmos distintos para obtener el mismo resultado pero con distintos tiempos de ejecución), por ejemplo en la linea 3 verificamos si el número es par, ya que los números primos son impares, de esta forma obtendremos un resultado rápidamente.-

{% highlight c linenos %}
if(n % 2 == 0) return false;
{% endhighlight %}

En caso de que no sea par, entramos a un ciclo for, donde empezamos a verificar a partir del número 3 (recuerda que un numero primo es mayor a 1 y no debe ser par, por eso no tomamos en cuenta el número 1 y 2).-

{% highlight c linenos %}
for(int i = 3; i * i <= n; i+=2){
    if(i % n == 0) return false;
}
{% endhighlight %}

En cada iteración verificamos si el número dado (n) es divisible por el dato obtenido en i, si es así, el número no es primo.-

{% highlight c linenos %}
if(i % n == 0) return false;
{% endhighlight %}

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
    if(isPrime(n)) printf("Es primo\n");
    else printf("No es primo\n");

    return 0;
}
{% endhighlight %}

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 25, 29 } obtendremos el siguiente resultado.-

{% highlight java linenos %}
Ingrese un numero a verificar: 25
No es primo
Ingrese un numero a verificar: 29
Es primo
{% endhighlight %}

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[NumeroPrimo.cpp](https://github.com/Codeandomx/algoritmos-c/blob/master/NumeroPrimo.cpp)

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código