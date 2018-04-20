---
title: Obtener el factorial de un número con Python
author: Paulo Andrade
categories: python
tags: python algoritmos
---

![Obtener el factorial de un numero con python](/img/python.jpg)

[MicroPost] En este micro articulo aprenderemos como obtener el factorial de un número dado en python, puedes encontrar el código funcional al final en nuestro repositorio de Github.

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

{% highlight python linenos %}
def factorial(self, n):
    '''
    Obtenemos el factorial del numero dad0
    '''

    res = 1 # almacenamos el resultado

    for i in range(1, n + 1):
        res = res * i

    return res
{% endhighlight %}

El funcionamiento del algoritmo es bastante simple, en la linea 3 declaramos la variable "res" en la cual almacenaremos la suma del producto de los números naturales hasta n.-

{% highlight python linenos %}
res = 1; # Declaramos res para almacenar el producto del factorial
{% endhighlight %}

En cada iteración multiplicamos el valor almacenado en la variable res con el correspondiente al valor de i, es necesario indicar que en el ciclo for, i se inicializa en 1, dado que si se inicializa en 0, el resultados siempre sera 0.-

{% highlight python linenos %}
for i in range(1, n + 1):
    res = res * i
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
# Acceso al programa
if __name__ == "__main__":
    # Instanciamos un objeto
    f = Factorial()
    # Corremos el programa
    f.init()
{% endhighlight %}

Ahora si ejecutamos el programa y probamos con el conjunto de datos { 25, 29 } obtendremos el siguiente resultado.-

{% highlight python linenos %}
Ingrese un numero: 5
Factorial de 5: 120
Ingrese un numero: 100
Factorial de 100: 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
{% endhighlight %}

## Código de ejemplo

Puedes encontrar el código completo en el siguiente enlace (repositorio de github).-

[Factorial.py](https://github.com/Codeandomx/algoritmos-python/blob/master/Factorial.py)

## Conclusiones

Si te encontraste útil este articulo, por favor compártelo para que pueda llegar a más personas.

Que tengan feliz código