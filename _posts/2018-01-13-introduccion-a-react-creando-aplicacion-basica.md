---
title: Introducción a React creando aplicación básica
author: Paulo Andrade
categories: reactjs
tags: react javascript
---

![React Javascript](/img/react.jpg)

Al leer o encontrar algo relacionado con React seguramente si eres desarrollador web lo primero que se te viene a la mente es que framework es mejor?, [Angular](/articulos/un-vistazo-a-angular-2.html) o React (entre otros), lo primero es aclarar este concepto erróneo ya que Angular es un framework completo (hay que seguir sus estándares de desarrollo al pie de la letra para que funcione) mientras que React es una librería Javascript que nos ayuda solo con el renderizado, por lo tanto necesitaremos más librerías para el desarrollo completo. 

Entonces en una conclusión rápida, al utilizar React en nuestro proyecto somos libres de utilizar cualquier librería para complementarlo, por ejemplo, podemos utilizar alguna librería que encontremos por la red para crear nuestro router o utilizar la herramienta que nos proporciona la comunidad React, pero esto seguro les ocasiona más dudas y por ello paso a la siguiente pregunta.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Curso de React</a>, puedes acceder al código de ejemplo de este articulo desde el repositorio de <a href="https://github.com/Codeandomx/curso-de-introduccion-a-react" target="_blank">Github</a>.
</div>

## Que es React?

React es una librería Javascript que nos ayuda con el renderizado (vista) de nuestra aplicación, fue desarrollada por Facebook quien después libero su código como un proyecto opensource, actualmente es utilizada en producción por grandes empresas como Netflix, Spotify, Github sin olvidarnos del propio Facebook,  entonces si es utilizada por estas empresas realmente es una garantía el poder utilizarla.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Si tomamos como referencia el modelo MVC, React viene siendo solo la parte de la V, su curva de aprendizaje es muy rápida y cómoda, pero se dará cuenta que al dominar esta librería aun se sentirá no apto para desarrollar una aplicación competente ya que aun le faltara dominar la M y C de este modelo (MVC), pero no se preocupe, ya que React se utiliza en conjunto con otras tecnologías como JSX, Gulp para la automatización de tareas como el que realizamos con Babel transformando el código JSX a Javascript, utilizamos algunas funcionalidades de [ECMASctipt 6](/articulos/introduccion-a-es6-javascript.html) y Browserify para unir todos los componentes, espero no se me escape alguna otra.

> JSX es como una combinación de HTML y XML, algo así como un HTML mejorado, este código es embebido en Javascript (algo que va contra las buenas practicas pero realmente terminaras utilizándolo), ya lo veremos más adelante a profundidad para no confundirlos en este momento.

## Web components la base de React

La base de React son los componentes (web components), los podemos utilizar de forma nativa o podemos construirlos a partir de JSX, si nos decidimos por esta ultima opción debemos crear un sistema de transpilación automatizado para poder pasar el código de JSX a Javascript, para esta tarea utilizaremos Gulp y Babel.

> Los web components son un conjunto de tecnologías web que nos permite crear nuevas etiquetas HTML personalizadas, reutilizables y encapsuladas para usar en páginas web y aplicaciones web. Se basan en los estándares web existentes (HTML, CSS y Javascript).

## Creando el entorno de desarrollo manualmente

Actualmente existe una herramienta llamada create-react-app que podemos instalar mediante NPM, la cual nos va a proporcionar un entorno de desarrollo listo para trabajar con React, al crear un proyecto nos proporciona una estructura de directorios y archivos, un servidor local para correr nuestra aplicación entre otras cosas.

En nuestro caso para entender mejor el mundo de React vamos a crear un entorno de desarrollo de forma manual y en un articulo posterior veremos como trabajar con create-react-app, así que empecemos.

### Configuración de React

Primeramente vamos a necesitar tener instalado NodeJS, podemos verificar si esta instalado ingresando a la shell el siguiente comando.-

{% highlight javascript linenos %}
node -v
{% endhighlight %}

Si lo tenemos instalado nos devolverá la versión de NodeJS, en caso contrario puedes descargarlo de su [pagina oficial](https://nodejs.org), vamos a crear un directorio para alojar nuestro proyecto y vamos a crear un package.json para almacenar las dependencias que necesitaremos instalar (ingresa los datos que te pidan para crear el archivo package.json).-

> Necesitamos tener instalado git para poder crear el archivo package.json con ayuda de un asistente, es Linux ya viene instalado por defecto, en Windows puedes descargar la [shell de git](https://git-scm.com/downloads) para poder utilizarlo.

{% highlight javascript linenos %}
mkdir react-project && cd react-project
npm init
{% endhighlight %}

Instalamos las dependencias necesarias para que funcione React.-

{% highlight javascript linenos %}
npm install --save-dev react react-dom
{% endhighlight %}

> No olvides utilizar el flag --save-dev (-D) para guardar las dependencias en el archivo package.json, además si estas trabajando en Linux, no olvides darle privilegios de súper usuario con SUDO.

### Configurando el transpilador de JSX a JS

Ahora vamos empezar a configurar el proceso automatizado de transpilación de JSX a JS, para ello necesitamos instalar gulp de forma global con el siguiente comando.-

{% highlight javascript linenos %}
npm install -g gulp babel-cli
{% endhighlight %}

Instalamos las dependencias con las que vamos a trabajar.-

{% highlight javascript linenos %}
npm install --save-dev babel-preset-env browserify gulp gulp-babel gulp-notify gulp-util gulp-watch vinyl-buffer vinyl-source-stream babel-preset-react babel-core babel-cli babel-register @babel/regiser
{% endhighlight %}

El uso que les vamos a dar a las librerías instaladas es el siguiente.-

* [babel-preset-env](https://www.npmjs.com/package/babel-preset-env).- Nos proporsiona todos los plugins de es2015 para tener compatibilidad con ES6.
* [browserify](https://www.npmjs.com/package/browserify).- Analiza recursivamente todas las llamas a los require de nuestra aplicación para entregar un solo paquete al navegador. 
* [gulp](https://www.npmjs.com/package/gulp).- Son herramientas de automatización de tareas para nuestro proyecto.
* [gulp-babel](https://www.npmjs.com/package/gulp-babel).- Nos proporciona herramientas de automatización de transpilación de ES6 a ECMAScript2015 con gulp.
* [gulp-notify](https://www.npmjs.com/package/gulp-notify).- Sistema de notificaciónes para gulp.
* [gulp-watch](https://www.npmjs.com/package/gulp-watch).- Proporciona un vigilante de cambios en nuestros archivos.
* [vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer).- Permite utilizar archivos de vinyl en buffers.
* [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream).- Permite utilizar flujos de texto convencionales al inicio de gulp logrando una interoperabilidad más agradable con el ecosistema de flujo npm existente.
* [babel-preset-react](https://www.npmjs.com/package/babel-preset-react).- Proporciona todos los plugins de React para utilizarlos con babel.
* [babel-cli](https://www.npmjs.com/package/babel-cli).- Nos ayudara a utilizar ES6 dentro de nuestro archivo gulpfile.

El siguiente paso es crear el archivo "gulpfile.babel.js" donde utilizaremos gulp para crear las tareas de automatización, una ves creado el archivo importamos las librerías anteriores.-

> Puedes crear el archivo gulpfile con solo la extensión .js para utilizar código Javascript convencional (ECMAScript2015) ya que en este articulo utilizamos ES6 para el desarrollo.

{% highlight javascript linenos %}
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babel from 'gulp-babel';
{% endhighlight %}

Creamos las tareas que transpilaran el código JSX a JS.-

{% highlight javascript linenos %}
gulp.task('transform', () => {
    return gulp.src('./app/src/**/*.jsx')
        .pipe(babel({
            presets: ["react", "env"]
        }))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('js', ['transform'], () => {
    return browserify('./app/dist/main.js')
        .bundle()
        .on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./'))
});
{% endhighlight %}

Creamos la tarea por defecto para llamar a las tareas anteriores y poner en escucha los cambios que realicemos.-

{% highlight javascript linenos %}
gulp.task('default', ['js'], () => {
    gulp.watch('./app/**/*.jsx', ['js']);
});
{% endhighlight %}

Por ultimo vamos a crear el archivo ".babelrc" para terminar de configurar babel en nuestro proyecto, con el siguiente contenido.-

{% highlight javascript linenos %}
{
    "presets": ["env", "react"]
}
{% endhighlight %}

### Configurando un servidor local

Si llegamos a este punto es por que todo marcha bien, para ver si funciona nuestra aplicación vamos a necesitar un servidor local, para ello instalamos [gulp-connect](https://www.npmjs.com/package/gulp-connect) el cual nos facilitara esta tarea.-

{% highlight javascript linenos %}
npm install --save-dev gulp-connect
{% endhighlight %}

Lo importamos y creamos la tarea que nos ayudara a iniciar el servidor web, lo configuramos de tal manera de que corra en el puerto 3000 (el puerto a utilizar es opcional), que el directorio principal sea "app" y activamos la opción autoreload como se muestra a continuación.-

{% highlight javascript linenos %}
import connect from 'gulp-connect';

gulp.task('connect', () => {
    connect.server({
        root: 'app',
        port: 3000,
        livereload: true
    });
});

gulp.task('html', () => {
    gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});
{% endhighlight %}

Por ultimo ponemos en escucha cualquier cambio en los archivos html modificando la tarea por defecto.-

{% highlight javascript linenos %}
gulp.task('default', ['js','connect'], () => {
    gulp.watch('./app/**/*.jsx', ['js']);
    gulp.watch('./app/*.html', ['html']);
});
{% endhighlight %}

### Estructura de directorios y archivos del proyecto

Dado los últimos cambios hechos en el archivo gulpfile la estructura de directorios con la que vamos a trabajar es la siguiente.-

{% highlight javascript linenos %}
+ react-project
    |+app
        |+src
             -main.jsx
        |+dist
            -main.js
        -index.html
    -.babelrc
    -gulpfile.babel.js
    -package.json
{% endhighlight %}

### Configuración del archivo package.json

Si en estos momentos queremos correr nuestro servidor para verificar que no exista problema alguno basta con ingresar desde la shell al directorio principal del proyecto y correr el comando "gulp", otra forma de hacerlo es configurando la tarea desde nuestro archivo package.json modificando la dependencia scripts de la siguiente forma.-

{% highlight javascript linenos %}
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "preinstall":"npm i -g gulp babel",
    "start":"gulp",
    "dev":"gulp"
},
{% endhighlight %}

De esta forma iniciamos el servidor y las tareas de gulp ingresando desde la shell el siguiente comando.-

{% highlight javascript linenos %}
npm run start
{% endhighlight %}

## Mi primera app - Hola mundo

El siguiente ejemplo que veremos nos mostrara en pantalla el famoso mensaje de bienvenida a cualquier lenguaje de programación o tecnología el mítico "Hola mundo", crearemos una estructura básica con HTML 5, un elemento div con el identificador "root" e importamos el archivo main.js.-

{% highlight javascript linenos %}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Hola mundo con React</title>
</head>
<body>
    <div id="root"></div>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
{% endhighlight %}

Agregamos el siguiente código en el archivo main.jsx.-

{% highlight javascript linenos %}
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
{% endhighlight %}

La funcionalidad del código anterior es muy simple, en la linea 1 y 2 importamos a nuestro archivo las librerías de React y ReactDOM, esta ultima nos permite interactuar con el DOM, el método render() del objeto ReactDom renderiza un elemento en el DOM, en el contenedor indicado, opcionalmente nos devuelve el estado de ese elemento, su sintaxis es la siguiente.-

{% highlight javascript linenos %}
ReactDOM.render(element, container[, callback])
{% endhighlight %}

Corremos nuestra app y en el navegador tendremos que ver lo siguiente.-

![Hola mundo React](/img/react-hola.png)

## Conclusiones

En hora buena, ya tenemos corriendo nuestra primera aplicación con React, seguramente durante el proceso surgieron muchas dudas, déjenlas en el área de comentarios y con gusto los auxiliare, también pueden hacerlas vía twitter.-

* [@paulo_866](https://twitter.com/paulo_866)
* [@codeandoclub](https://twitter.com/codeandoclub)

Pueden ingresar al repositorio de github para comparar el código en el siguiente enlace.-

[github/codeandomx](https://github.com/codeandomx/development-environment-react)

> Recuerda que copiar el código no es malo, pero no te ayudara a comprender, te recomiendo escribir todo desde 0.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo siguiente: [Introducción a JSX](/articulos/introduccion-a-jsx.html)
* Curso: [Curso de React](https://github.com/Codeandomx/curso-de-introduccion-a-react)

Que tengan feliz código.