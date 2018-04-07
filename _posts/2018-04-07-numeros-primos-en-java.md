---
title: Números primos en Java
author: Paulo Andrade
categories: java
tags: java algoritmos
---

![Numeros primos en java](/img/java.jpg)

[MicroPost] En este micro articulo aprenderemos como determinar si un número es primo o no en Java, puedes encontrar el código funcional al final en nuestro repositorio de Github.

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

{% highlight java linenos %}
public static boolean isPrime(int n)
{
    // Verificamos si es multiplo de 2
    if(n % 2 == 0) return false;

    // Recorremos todos los numeros impares
    for(int i = 3; i * i <= n; i += 2){
        if(n % i == 0) return false;
    }

    return true;
}
{% endhighlight %}

El algoritmo esta optimizado para obtener el resultado esperado en el menor tiempo posible, por ejemplo en la linea 4 verificamos si el número es par, ya que los números primos son impares, de esta forma obtendremos un resultado rápidamente.-

{% highlight java linenos %}
// Verificamos si es multiplo de 2
if(n % 2 == 0) return false;
{% endhighlight %}

En caso de que no sea par, entramos a un ciclo for, donde empezamos a verificar a partir del número 3 (recuerda que un numero primo es mayor a 1 y no debe ser par, por eso no tomamos en cuenta el número 1 y 2).-

{% highlight java linenos %}
// Recorremos todos los numeros impares
for(int i = 3; i * i <= n; i+=2){
    if(n % i == 0) return false;
}
{% endhighlight %}

En cada iteración verificamos si el número dado (n) es divisible por el dato obtenido en i, si es así, el número no es primo.-

{% highlight java linenos %}
if(n % i == 0) return false;
{% endhighlight %}

## Casos de uso

Para verificar su funcionamiento, creamos un método para ingresar el dato.-

{% highlight java linenos %}
public static int enterData()
{
    Scanner scan = new Scanner(System.in);
    int n;

    try{
        n = scan.nextInt();

        return n;
    } catch(Exception e) {
        System.out.println("Ingrese un numero");
        return enterData();
    }
}
{% endhighlight %}

Y en el método main realizamos el proceso.-

{% highlight java linenos %}
public static void main(String[] args)
{
    // Obtenemos el numero
    System.out.print("Ingrese un numero: ");
    int n = enterData();

    // Verificamos si es primo
    if(isPrime(n)) System.out.println("Es primo");
    else System.out.println("No es primo");
}
{% endhighlight %}

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 25, 29 } obtendremos el siguiente resultado.-

{% highlight java linenos %}
Ingrese un numero: 25
No es primo
Ingrese un numero: 29
Es primo
{% endhighlight %}

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[NumerosPrimos.java](https://github.com/Codeandomx/algoritmos-java/blob/master/NumerosPrimos.java)

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código