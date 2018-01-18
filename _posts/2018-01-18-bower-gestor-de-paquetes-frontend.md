---
title: Bower gestor de paquetes frontend
author: Paulo Andrade
categories: bower
tags: 'bower '
---

![Bower gestor de dependencias web](/img/bower.jpg)

En la actualidad el **desarrollo Frontend** a crecido considerablemente y prueba de ello es el numero de librerías que utilizamos en nuestros proyectos, si nos ponemos a analizar cuantas son?, cada cuando sale una versión estable? (actualización) y tratar de mantener en nuestra aplicación la ultima versión de estas, realmente seria algo muy tedioso y mucho tiempo invertido.

Ahora imaginen hacer todo lo anterior pero para todos nuestros proyectos, seria una tarea de tiempo completo, por fortuna, podemos automatizar esta tarea con ayuda de [Bower](https://bower.io/), un **gestor de dependencias Frontend** que nos ayudara a instalar, actualizar o eliminar estas dependencias en nuestro proyecto.

## Que es bower?

Bower es un gestor de dependencias **creado por Twitter** al estilo de NPM para NodeJS, pero a diferencia de este, las dependencias están enfocadas al **desarrollo Frontend** como por ejemplo JQuery, Bootstrap, Materialize que se encuentran entre las mas populares, entonces, bower nos ayudara con la instalación, actualización de las mismas, algo asi como un administrador.

> Una dependencia es una librería open source (distribuida por terceros) que utilizamos como complemento de desarrollo en nuestro proyecto.

## Instalación de bower

Para **instalar bower** debemos tener previamente instalado en nuestro sistema [NodeJS](https://nodejs.org) y [Git](https://git-scm.com/downloads) (si estas trabajando en Linux, ya vienen instalados por defecto).

Bower lo instalamos de forma global (para que este disponible desde cualquier parte del sistema) a través de NPM con el siguiente comando.-

{% highlight javascript linenos %}
npm i -g bower
{% endhighlight %}

> Si estas trabajando en Linux recuerda dar privilegios de super usuario (sudo), los flag -i y -g significan install y global respectivamente.

Para comprobar que se instalo correctamente, consultamos la versión de bower.-

{% highlight javascript linenos %}
bower -v
{% endhighlight %}

Y nos aparecerá su versión.-

{% highlight javascript linenos %}
1.8.2
{% endhighlight %}

## Configuración de bower

La configuración consta de dos pasos, el primero es crear el archivo bower.json en el cual vamos a guardar las dependencias que vallamos instalando en nuestro proyecto, abrimos la shell y nos ubicamos en el directorio principal del proyecto, ingresamos el siguiente comando.-

{% highlight javascript linenos %}
bower init
{% endhighlight %}

Se iniciara un asistente y nos pedirá información sobre nuestro proyecto (preguntas de rutina), al terminar tendremos nuestro archivo creado y un contenido similar.-

{% highlight javascript linenos %}
{
    name: 'project-name',
    description: 'Descripcion del proyecto',
    main: 'gulpfile.js',
    authors: [
        'Paulo Andrade'
    ],
    license: 'MIT',
    keywords: [
        'bower',
        'project'
    ],
    homepage: 'https://github.com/Codeandomx',
    ignore: [
        '**/.*',
        'node_modules',
        'bower_components',
        'test',
        'tests'
  ]
}
{% endhighlight %}

Ahora pongan atención en la linea 17, dentro de los directorios que aparecen en la propiedad ignorar esta bower_components, en este directorio se almacenaran las dependencia que instalemos con bower.

La segunda parte de la configuración es crear el archivo .bowerrc, en este archivo podemos configurar el directorio donde queremos que sean almacenadas las dependencias, un ejemplo es el siguiente.-

{% highlight javascript linenos %}
{
    "directory": "public/vendor"
}
{% endhighlight %}

Ahora nuestras dependencias las encontraremos en el directorio vendor.

## Instalación de dependencias

Como ejemplo vamos a instalar la dependencia de JQuery, para ello hay varias formas de llegar a esta dependencia, nos iremos por el camino largo para aprender un par de cosas, empezamos buscando las dependencias que contengan la palabra clave jquery.-

{% highlight javascript linenos %}
bower search jquery
{% endhighlight %}

> Si estas trabajando en linux debes ejecutar el comando de esta forma: sudo bower search jquery --allow-root

Nos aparecerá una lista bastante amplia, les muestro algunos resultados.-

{% highlight javascript linenos %}
query https://github.com/jquery/jquery.git
jquery https://github.com/jquery/jquery-dist.git
jQuery https://github.com/jquery/jquery.git
jquery.x https://github.com/jljLabs/jquery.x.git
jt_jquery https://github.com/vicanso/jt_jquery.git
jquery-m https://github.com/meetup/jquery.git
jquery.Q https://github.com/jsbuzz/jQuery_Q.git
{% endhighlight %}

A nosotros nos interesa el segundo resultado, obtenemos información sobre este paquete con el siguiente comando.-

{% highlight javascript linenos %}
bower info jquery
{% endhighlight %}

Nos muestra información sobre la dependencia y las versiones que estan disponibles sobre la misma.-

{% highlight javascript linenos %}
bower cached        https://github.com/jquery/jquery-dist.git#3.2.1
bower validate      3.2.1 against https://github.com/jquery/jquery-dist.git#*

{
  name: 'jquery',
  main: 'dist/jquery.js',
  license: 'MIT',
  ignore: [
    'package.json'
  ],
  keywords: [
    'jquery',
    'javascript',
    'browser',
    'library'
  ],
  homepage: 'https://github.com/jquery/jquery-dist',
  version: '3.2.1'
}

Available versions:
  - 3.2.1
  - 3.2.0
  - 3.1.1
  - 3.1.0
  - 3.0.0
  - 2.2.4
...
{% endhighlight %}

Si queremos instalar la ultima versión simplemente utilizamos el nombre de la dependencia como tal.-

{% highlight javascript linenos %}
bower install jquery --save
{% endhighlight %}

Si queremos instalar una versión en especifico utilizamos el nombre de la dependencia seguido de # y seguido de este el numero de la versión, ejemplo.-

{% highlight javascript linenos %}
bower install jquery#2.2.4 --save
{% endhighlight %}

> El flag --save nos sirve para indicarle a bower que agregue la dependencia al archivo bower.json.

Una ves tengamos instalada la dependencia la encontraremos en el directorio vendor, solo basta con agregar el archivo js (en este caso por ser Jquery) al archivo HTML.-

{% highlight javascript linenos %}
<script src="vendor/jquery/dist/jquery.min.js">
</script>
{% endhighlight %}

## Otros comandos útiles

### Ver dependencias instaladas

Podemos consultar las dependencias instaladas en nuestro proyecto con el siguiente comando.-

{% highlight javascript linenos %}
bower list
{% endhighlight %}

## Actualizar dependencias

Existen dos tipos de actualizaciones, la primera es actualizar una dependencia en especifico.-

{% highlight javascript linenos %}
bower update jquery
{% endhighlight %}

O podemos actualizar todas las dependencias con el siguiente comando.-

{% highlight javascript linenos %}
bower update
{% endhighlight %}

## Eliminar dependencias

Podemos desinstalar una dependencia con el siguiente comando, la dependencia se desinstalara pero no sera eliminada del archivo bower.json.-

{% highlight javascript linenos %}
bower uninstall jquery
{% endhighlight %}

Si queremos eliminarla y quitarla del archivo bower.json utilizamos el flag --save.-

{% highlight javascript linenos %}
bower uninstall jquery --save
{% endhighlight %}

## bower install

Si se preguntan cual es la finalidad del archivo bower.json, es tener la información de las dependencias y versiones de estas que utiliza nuestro proyecto para poder instalarlas cuando sean necesario (por ejemplo si clonamos nuestro proyecto desde gtihub), para instalarlas utilizamos el siguiente comando.-

{% highlight javascript linenos %}
bower install
{% endhighlight %}

## Conclusiones

En este articulo tratamos de cubrir todos los aspectos básicos de bower pero aun hay mucho que desmenuzar, pero eso ya sera tema de otros articulo.

Bower es un excelente gestor para nuestras dependencias, si aun no lo están utilizando les recomiendo agregarlo como parte del desarrollo de su proyecto y verán como les facilitara la vida.

Que tengan feliz código.