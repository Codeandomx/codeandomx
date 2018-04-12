---
title: Instalar R Studio en Ubuntu Linux
author: Paulo Andrade
categories: r
tags: r ubuntu
---

![Instalacion R programming](/img/r.jpg)

En el articulo anterior aprendimos a [instalar R en  Ubuntu](http://blog.codeando.org/articulos/instalar-r-en-ubuntu-linux.html), en este articulo aprenderemos a instalar R Studio, un IDE para trabajar R haciendolo más fácil de usar, además, incluye un editor de código, herramientas de depuración y visualización.

## Instalar R Studio

El proceso de instalación esta disponible para las versiones de Ubuntu.-

* Ubuntu 12.XX
* Ubuntu 14.XX
* Ubuntu 16.XX
* Ubuntu 17.XX

Empezamos por instalar gdebi-core.-

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
sudo apt-get install gdebi-core
{% endhighlight %}

> Gdebi-core es una herramienta simple para instalar archivos deb, permitiendo instalar paquetes deb locales resolviendo e instalando sus dependencias. apt hace lo mismo, pero solo para paquetes remotos (http, ftp)

Descargamos R Studio con el siguiente comando.-

{% highlight java linenos %}
wget https://download1.rstudio.org/rstudio-1.1.442-amd64.deb
{% endhighlight %}

Instalamos el paquete deb de R Studio.-

{% highlight java linenos %}
sudo gdebi rstudio-1.1.442-amd64.deb
{% endhighlight %}

Por ultimo eliminamos el archivo deb descargado.-

{% highlight java linenos %}
rm rstudio-1.1.442-amd64.deb
{% endhighlight %}

## Iniciar R Studio

Pra iniciar R Studio ejecutamos el siguiente comando.-

{% highlight java linenos %}
rstudio
{% endhighlight %}

Veremos el siguiente IDE.-

![R Studio](/img/rstudio.jpg)

## Conclusiones

Ahora que ya tenemos R Studio instalado, podemos empezar a trabajar con pequeños proyectos para irnos ambientándonos con este entorno de desarrollo.

Que tengan feliz código.