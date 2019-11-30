---
title: Instalación y configuración de Anaconda en windows
layout: post
author: Paulo Andrade
categories: python
tags: conda python windows
---

![Instalar Anaconda en windows](/img/python.jpg)

Bienvenidos a Codeando, en este articulo vamos a aprender a **instalar y configurar la variable de entorno** de [Anaconda](https://anaconda.org/) (conocido como Conda) un poderoso gestor de paquetes para python (tanto para la versión 2.7.X como la 3.X.X) en diversos sistemas operativos, en este articulo, veremos como instalarlo para Windows, asi que manos a la obra.

## Que es Anaconda

**Anaconda es un gestor de paquetes**, un gestor de entorno y una distribución de Python que contiene una colección de muchos paquetes de código abierto.

Esto es ventajoso ya que cuando se está trabajando en un proyecto, nos encontraremos con la necesidad de **instalar muchos paquetes diferentes**, algunos de estos paquetes ya vienen con la instalación de Anaconda, pero si necesitamos paquetes adicionales después de instalar Anaconda, podemos usar el administrador de paquetes pip o conda de Anaconda desde la consola para instalarlos.

Esto es altamente ventajoso, ya que no tenemos que administrar las dependencias entre varios paquetes. Conda incluso facilita el **cambio entre Python 2 y 3 creando entornos virtuales**.

## Instalación de anaconda en Windows

Lo primero que debemos hacer es ingresar al [sitio web de Anaconda](https://www.anaconda.com/distribution/#download-section) y descargar el instalador que necesites, puedes elegir el que trae python 3.7 y despues si lo necesitas instalas python 2.7 desde conda.-

![Instalación de anaconda en windows](/img/conda1.jpg)

Una vez que termine la descarga, ejecutamos el instalador y nos aparecera la siguiente pantalla, solo damos clic en "Next" para continuar.-

![Instalación de anaconda en windows](/img/conda2.jpg)

Aceptamos la licencia y damos clic en "I agree".-

![Instalación de anaconda en windows](/img/conda3.jpg)

Seleccionamos si queremos que Anaconda se instale solo para ti, o para todos los usuarios (lo recomendado es que se instale solo para ti), damos clic en "Next".-

![Instalación de anaconda en windows](/img/conda4.jpg)

Nos pedira el directorio donde se instalara Anaconda, dejamos el que aparece por defecto y empezamos con la instalación.-

![Instalación de anaconda en windows](/img/conda5.jpg)

Cuando Anaconda se termine de instalar nos preguntara si queremos instalar [visual studio code](https://code.visualstudio.com/) que trabaja en conjunto con Conda, ya es tu elección si lo instalas.-

![Instalación de anaconda en windows](/img/conda6.jpg)

Al finalizar solo damos clic en "Finish" y listo, ya tenemos instalado Conda.

![Instalación de anaconda en windows](/img/conda7.jpg)

## Variables de entorno de Conda

En un paso itermedio de la instalación, se nos preguntara si queremos agregar a Conda al path de variables, lo recomendable es hacerlo, ya que de esta forma podemos utilizar Conda desde la consola.

![Instalación de anaconda en windows](/img/conda_path.jpg)

## Conclusiones

Listo ya tenemos Conda instalado en nuestro ordenador y ya puedes empezar a crear entornos virtuels y a instalar dependencias para tus proyectos.

Que tengan feliz código.