---
title: Instalar R en Ubuntu Linux
author: Paulo andrade
categories: r
tags: r ubuntu
---

![Instalacion R programming](/img/r.jpg)

Empezamos una nueva serie de artículos donde hablaremos y veremos desde los conceptos básicos hasta los avanzados sobre el lenguaje R, el cual nos ayudara a trabajar con datos y obtener estadísticas sobre estos, como primer paso vamos a aprender a instalar R en nuestro sistema GNU Linux.

## Que es R programming?

La definición utilizada en [wikipedia](https://es.wikipedia.org/wiki/R_(lenguaje_de_programaci%C3%B3n)) es la siguiente.-

R es una implementación de software libre del lenguaje S pero con soporte de alcance estático. Se trata de uno de los lenguajes más utilizados en investigación por la comunidad estadística, siendo además muy popular en el campo de la minería de datos, la investigación biomédica, la bioinformática y las matemáticas financieras. A esto contribuye la posibilidad de cargar diferentes bibliotecas o paquetes con funcionalidades de cálculo y gráficas.

## Instalación en entornos GNU Linux

Normalmente R se actualiza de forma constante, por tal motivo no siempre se encuentran las ultimas versiones estables en Linux, como primer paso vamos a añadir un repositorio externo el cual es mantenido por CRAN.

> CRAN es una red de FTP y servidores web de todo el mundo que almacenan versiones idénticas y actualizadas de código y documentación para R.

Así que obtenemos la llave de confianza para asegurarnos de acceder a un repositorio confiable.-

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
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
{% endhighlight %}

> Recuerde que en sistemas GNU Linux es necesario dar permisos de super usuario para realizar diversas acciones.

Una vez obtenida la llave podemos añadir el repositorio de R, para sistemas Ubuntu 16.0X ingresa el siguiente comando.-

{% highlight java linenos %}
sudo add-apt-repository 'deb [arch=amd64,i386] https://cran.rstudio.com/bin/linux/ubuntu xenial/'
{% endhighlight %}

Para sistemas Ubuntu 17.0X ingresa este comando.-

{% highlight java linenos %}
sudo add-apt-repository 'deb [arch=amd64,i386] https://cran.rstudio.com/bin/linux/ubuntu artful/'
{% endhighlight %}

Ahora actualizamos los repositorios antes de pasar a la instalación.-

{% highlight java linenos %}
sudo apt-get update
{% endhighlight %}

Y empezamos a instalar R con el siguiente comando.-

{% highlight java linenos %}
sudo apt-get install r-base
{% endhighlight %}

Listo ya tenemos instalado R en nuestro sistema.

## Acceder a la consola interactiva de R

Para empezar a realizar pruebas con R, debemos de ingresar a la consola interactiva, para hacerlo ejecutamos el siguiente comando.-

{% highlight java linenos %}
sudo -i R
{% endhighlight %}

Cuando ingresemos a la consola, veremos algo como esto, puede variar un poco dependiendo de la versión de R.-

{% highlight java linenos %}
R version 3.4.4 (2018-03-15) -- "Someone to Lean On"
Copyright (C) 2018 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

R es un software libre y viene sin GARANTIA ALGUNA.
Usted puede redistribuirlo bajo ciertas circunstancias.
Escriba 'license()' o 'licence()' para detalles de distribución.

R es un proyecto colaborativo con muchos contribuyentes.
Escriba 'contributors()' para obtener más información y
'citation()' para saber cómo citar R o paquetes de R en publicaciones.

Escriba 'demo()' para demostraciones, 'help()' para el sistema on-line de ayuda,
o 'help.start()' para abrir el sistema de ayuda HTML con su navegador.
Escriba 'q()' para salir de R.

> 
{% endhighlight %}

Entre los comandos útiles puedes encontrar dos, para obtener ayuda acerca del uso de R y la consola.-

{% highlight java linenos %}
> help()
{% endhighlight %}

Para salir de la consola.-

{% highlight java linenos %}
> q()
{% endhighlight %}

Al usar el comando anterior, te pedirá si quieres guardar el estado de la consola para un uso posterior.-

{% highlight java linenos %}
> Save workspace image? [y/n/c]:
{% endhighlight %}

## Conclusiones

Ahora que ha instalado R en su sistema, es tiempo de empezar a utilizar el lenguaje R, le recomiendo seguir la pista a este blog para que aprenda a trabajar con este lenguaje de estadística.

Que tengan feliz código.