---
title: Webpack modo de producción y desarrollo
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guía de configuración de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en esta parte hay un punto a destacar, aunque su ultima versión no requiere un archivo de configuración, te habrás dado cuenta que al ejecutar Webpack nos muestra un mensaje de advertencia en el cual nos indica que debemos seleccionar un modo y por defecto estos pueden ser development y production, los cuales veremos a continuación.

Con esta nueva opción Webpack intenta **reducir su configuración** requerida para poder obtener una compilación bastante útil con solo seleccionar uno de los dos modos que nos brinda.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/webpack-for-react" target="_blank">Curso de Webpack</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de Github.
</div>

## Webpack development mode

Con el **modo desarrollo** (development mode) vienen preestablecidos unos valores predeterminados de configuración los cuales nos darán una mejor experiencia de **desarrollo en nuestra aplicación con Webpack**, los puntos fuertes en los que se centran son los siguientes.-

* Herramientas para depuración en el navegador.
* **Compilación incremental** rápida para un ciclo de desarrollo más rápido.
* Mensajes de error útiles en tiempo de ejecución.

## Webpack production mode

Con el **modo de producción** (production mode) los valores predeterminados de configuración que vienen preestablecidos se centran en los siguientes puntos para darnos una mejor experiencia con Webpack.-

* Un tamaño optimizado en los archivos de salida.
* Código bastante rápido en tiempo de ejecución.
* Omite el código que designemos para solo desarrollo.
* No expone código fuente o rutas de archivos.
* Archivos de salida fáciles de implementar.

> En el ultimo punto debo de destacar que en el modo producción de Webpack nos proporciona archivos bien optimizados pero no perfectamente optimizados, aun que esto ultimo lo podemos lograr con optimizaciones adicionales.

## Configuración de la opción mode en Webpack

Su configuración es bastante sencilla, abrimos nuestro archivo "package.json" y añadimos los siguientes scripts.-

{% highlight javascript linenos %}
"scripts": {
    "dev" : "webpack --mode development" , 
    "build" : "webpack --mode production" 
  }
{% endhighlight %}

Si queremos trabajar con el modo desarrollo, ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

> Con el modo desarrollo estaremos optimizando para una mayor velocidad y nos proporciona un paquete no minificado.

Si queremos trabajar con el modo producción, ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ npm run build
{% endhighlight %}

> El modo producción permite todo tipo de optimizaciones para mejorar la eficiencia de nuestra aplicación.

## Conclusiones

Cada vez mejoramos en gran medida nuestro entorno de desarrollo y lo mejor con una configuración mínima, esto nos ayuda a ahorrar tiempo en los preparativos de nuestra aplicación.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/webpack-for-react).

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Webpack instalación y primeros pasos](/articulos/webpack-instalacion-y-primeros-pasos.html)
* Articulo siguiente: [Webpack anulando la entrada y salida por defecto](/articulos/webpack-modo-de-produccion-y-desarrollo.html)
* Curso: [Curso de Webpack](https://github.com/Codeandomx/webpack-for-react)

Que tengan feliz código.