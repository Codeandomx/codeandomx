---
title: Números primos con Python
author: Paulo Andrade
categories: python
tags: python algoritmos
---

![Numeros primos en python](/img/python.jpg)

[MicroPost] En este micro articulo aprenderemos como verificar si un número es primo o no en Python, puedes encontrar el código funcional al final en nuestro repositorio de Github.

## Que son los números primos

En términos matemáticos, un número primo es un número natural mayor que 1, el cual que tiene únicamente dos divisores distintos: él mismo número y el 1.

## Algoritmo

Utilizamos Python orientado a objetos para realizar el ejemplo, el siguiente método nos permite verificar si un número es primo o no.-

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
def isPrime(self, n):
    '''
    Verificamos si el numero es primo o no
    '''

    # Verificamos si es divisible entre dos
    if n % 2 == 0 : return False

    # Verificamos los numero impares
    for i in range(3, n + 1, 2):
        if (i * i) < n :
            if n % i == 0 :
                return False

    return True
{% endhighlight %}

El algoritmo esta optimizado para obtener el resultado esperado en el menor tiempo posible, por ejemplo en la linea 6 verificamos si el número es par, ya que los números primos son impares, de esta forma obtendremos un resultado rápidamente.-

{% highlight python linenos %}
if n % 2 == 0 : return False
{% endhighlight %}

En caso de que no sea par, entramos a un ciclo for, donde empezamos a verificar a partir del número 3 (recuerda que un numero primo es mayor a 1 y no debe ser par, por eso no tomamos en cuenta el número 1 y 2).-

{% highlight python linenos %}
for i in range(3, n + 1, 2):
    if (i * i) < n :
        if n % i == 0 :
            return False
{% endhighlight %}

En cada iteración verificamos si el número dado (n) es divisible por el dato obtenido en i, si es así, el número no es primo.-

{% highlight python linenos %}
if n % i == 0 :
    return False
{% endhighlight %}

## Casos de uso

Para verificar su funcionamiento, creamos un método para ingresar el dato.-

{% highlight python linenos %}
def enterData(self):
    '''
    Obtiene un dato ingresado por el usuario
    '''

    val = raw_input("Ingrese el numero a verificar: ")

    # verificamos que sea un numero entero
    try :
        val = int(val)
        return val
    except :
        return self.enterData()
{% endhighlight %}

Y declaramos la instancia de nuestra clase y la ejecutamos.-

{% highlight python linenos %}
if __name__ == "__main__":
    # Instanciamos un objeto
    np = NumeroPrimo()
    # Corremos el programa
    np.init()
{% endhighlight %}

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 25, 29 } obtendremos el siguiente resultado.-

{% highlight python linenos %}
Ingrese un numero: 25
No es primo
Ingrese un numero: 29
Es primo
{% endhighlight %}

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[NumerosPrimos.py](https://github.com/Codeandomx/algoritmos-python/blob/master/NumeroPrimo.py)

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código