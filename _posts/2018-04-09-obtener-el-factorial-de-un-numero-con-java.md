---
title: Obtener el factorial de un número con Java
author: Paulo Andrade
categories: java
tags: java algoritmos
---

![Numeros primos en java](/img/java.jpg)

[MicroPost] En este micro articulo aprenderemos como obtener el factorial de un número dado en Java, puedes encontrar el código funcional al final en nuestro repositorio de Github.

## Que es el factorial

El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n ([definición wikipedia](https://es.wikipedia.org/wiki/Factorial)).

## Algoritmo para factorial

El siguiente método nos permite obtener el factorial de un número dado.-

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
public static long factorial(int n)
{
    long fac = 1;

    if(n >= 2){
        for(int i = 1; i <= n; i++){
            fac *= i;
        }
    }

    return fac;
}
{% endhighlight %}

El funcionamiento del algoritmo es bastante simple, en la linea 3 declaramos la variable "fac" en la cual almacenaremos el producto de los números naturales hasta n.-

{% highlight java linenos %}
// Declaramos fac para lamacenar el producto del factorial
long fac = 1;
{% endhighlight %}

En la linea 5 verificamos que el número dado sea mayor o igual a 2, de esta forma si el número dado es 1, el resultado sera 1.-

{% highlight java linenos %}
// Verificamos que n sea myor o igual a 2
if(n >= 2){
    ...
}
{% endhighlight %}

En cada iteración multiplicamos el valor almacenado en fac con el correspondiente al valor de i, es necesario indicar que en el ciclo for i se inicializa en 1, dado que si se inicializa en 0, el resultados siempre sera 0.-

{% highlight java linenos %}
// Obtenemos el factorial
for(int i = 1; i <= n; i++){
    fac *= i;
}
{% endhighlight %}

## Desbordamiento de pila

El algoritmo anterior tiene un pequeña limitación, la cual es el valor máximo que nos devuelve la función dada por el valor máximo del tipo long (9,223,372,036,854,775,807), para solventar este problema se puede utilizar la clase BigInteger.-

{% highlight java linenos %}
import java.math.BigInteger;
{% endhighlight %}

Modificando el algoritmo anterior obtendríamos el siguiente método.-

{% highlight java linenos %}
public static BigInteger bigFactorial(int n)
{
    // Empezamos la base del factorial
    BigInteger fac = new BigInteger("1");

    // Obtenemos el factorial solo si el numero es mayor o igual a 2
    if(n >= 2){
        // Proceso para obtener el factorial
        for(int i = 1; i <= n; i++){
            // Multiplicamos los numeros
            fac = fac.multiply(new BigInteger(i + ""));
        }
    }

    return fac;
}
{% endhighlight %}

El funcionamiento es el mismo, solo con la diferencia de los métodos de la clase BigInteger.

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

    // Obtenemos el factorial
    System.out.println("Factorial de "+n+": "+bigFactorial(n));
    // System.out.println("Factorial de "+n+": "+factorial(n));
}
{% endhighlight %}

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 5, 100 } obtendremos el siguiente resultado.-

{% highlight java linenos %}
Ingrese un numero: 5
Factorial de 5: 120
Ingrese un numero: 100
Factorial de 100: 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
{% endhighlight %}

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[Factorial.java](https://github.com/Codeandomx/algoritmos-java/blob/master/Factorial.java)

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código