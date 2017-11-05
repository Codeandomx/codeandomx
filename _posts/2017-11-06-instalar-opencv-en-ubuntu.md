---
title: Instalar OpenCV en ubuntu
author: Paulo Andrade
categories: opencv
tags: python opencv
---

![Opencv para ubuntu](/img/opencv.jpg)

En este articulo vamos a mostrar como instalar la librería OpenCV en ubuntu, para ello vamos a realizar una serie de pasos previos para preparar todo lo necesario para nuestra instalación, así que sin más empecemos.

## Un poco sobre OpenCV

Se trata de una librería open source creada inicialmente por intel pero fue liberada en el año 2006, con la cual podremos realizar reconocimiento de imágenes y videos utilizando lenguajes de programación como python, java, c/c++, es decir poder tener una visión artificial.

## Instalando dependencias necesarias

Para versiones menores a la 16.04 de ubuntu utiliza el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get install --assume-yes libopencv-dev build-essential cmake git libgtk2.0-dev pkg-config python-dev python-numpy libdc1394-22 libdc1394-22-dev libjpeg-dev libpng12-dev libtiff5-dev libjasper-dev libavcodec-dev libavformat-dev libswscale-dev libxine2-dev libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev libv4l-dev libtbb-dev libqt4-dev libfaac-dev libmp3lame-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev libvorbis-dev libxvidcore-dev x264 v4l-utils unzip
{% endhighlight %}

Para la versión 16.04 (o superiores) utilizar los siguientes comandos.-

{% highlight javascript linenos %}
$ sudo apt-get install build-essential cmake git
{% endhighlight %}

{% highlight javascript linenos %}
$ sudo apt-get install ffmpeg libopencv-dev libgtk-3-dev python-numpy python3-numpy libdc1394-22 libdc1394-22-dev libjpeg-dev libpng12-dev libtiff5-dev libjasper-dev libavcodec-dev libavformat-dev libswscale-dev libxine2-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libv4l-dev libtbb-dev qtbase5-dev libfaac-dev libmp3lame-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev libvorbis-dev libxvidcore-dev x264 v4l-utils unzip
{% endhighlight %}

Listo ya podemos proceder con el siguiente paso.

## Preparar la instalación de OpenCV

Una ves instaladas las dependencias, vamos a descargar OpenCV desde su web oficial y lo descomprimimos, ahora desde la shell vamos a ingresar al directorio donde lo descomprimimos y crearemos un nuevo directorio al que llamaremos "build" e ingresaremos en el, con el siguiente comando.-

{% highlight javascript linenos %}
$ mkdir build && cd build
{% endhighlight %}

Ahora vamos a configurarlo con el siguiente comando.-

{% highlight javascript linenos %}
$ cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D WITH_TBB=ON -D WITH_V4L=ON -D WITH_QT=ON -D WITH_OPENGL=ON ..
{% endhighlight %}

![Instalacion de opencv](/img/opencv1.jpg)

Una ves terminada la configuración procedemos a crear el paquete de instalación.-

{% highlight javascript linenos %}
$ make
{% endhighlight %}

![Instalacion de opencv](/img/opencv2.jpg)

## Instalar OpenCV

Para poder instalar OpenCV vamos a necesitar la dependencia "checkinstall", si no la tienes instalada lo puedes hacer con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get install checkinstall
{% endhighlight %}

Instalamos.-

{% highlight javascript linenos %}
$ sudo checkinstall
{% endhighlight %}

![Instalacion de opencv](/img/opencv4.jpg)

## Comprobando la instalación

Para comprobar la instalación de OpenCV, vamos abrir una nueva ventana en la terminal y entraremos al interprete de python, donde vamos a importar la librería de openCV (la encontramos con el nombre cv2) y mostramos la versión instalada como se muestra en la siguiente imagen.-

![Instalacion de opencv](/img/opencv5.jpg)

## Conclusiones

Si llegaste a este punto espero que todo halla salido bien y estes al pendiente de nuevos artículos sobre este tema, en caso contrario publica tu duda en los comentarios y con gusto te ayudare, gracias por leer, hasta la próxima. 

Que tengan feliz código.