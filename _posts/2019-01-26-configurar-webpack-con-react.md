---
title: Configurar webpack con react
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guia de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en este articulo aprenderemos a configurar webpack para poder trabajar con [React](/articulos/introduccion-a-react-creando-aplicacion-basica.html), si aun no tienes configurado el transpilador de es6 para webpack, es necesario que lo hagas ya que es esencial para trabajar con React.

[Webpack transpilador de es6](/articulos/webpack-transpilando-javascript-es6-con-babel-7.html)

## Configurar React para Webpack

Empecemos la configuración, primeramente debemos instalar las dependencias necesarias para que webpack pueda **trabajar con React**.-

{% highlight javascript linenos %}
$ npm install -D react react-dom
{% endhighlight %}

Las dependencias que instalamos son las siguientes.-

* [react](https://www.npmjs.com/package/react).- biblioteca Javascript para UI (interfaces de usuario).
* [react-dom](https://www.npmjs.com/package/react-dom).- sirve como punto de entrada a los procesadores DOM y servidor para React.

Además de estas dependencia necesitamos una más "babel-preset-react", procedemos a instalarla.-

{% highlight javascript linenos %}
$ npm install -D @babel/preset-react
{% endhighlight %}

Este preset incluye los siguientes complementos que nos ayudarán con la transpílación de jsx.-

* preset-flow
* syntax-jsx
* transform-react-jsx
* transform-react-display-name

Ahora hay que configurar babel, modificamos el archivo ".babelrc".-

{% highlight javascript linenos %}
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
{% endhighlight %}

Por ultimo vamos a añadir una configuración más a webpack para que babel-loader tambien pueda leer los archivos .jsx (en caso de utilizarlos con React), modificamos el archivo "webpack.config.js" de la siguiente forma.-

{% highlight javascript linenos %}
// App.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
{% endhighlight %}

## Agregamos un archivo de prueba React

Para ver que funciona correctamente, podemos crear un nuevo archivo en el directorio "src" al que llamaremos "App.js" con el siguiente contenido.-

{% highlight javascript linenos %}
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
{% endhighlight %}

Y modificamos el archivo "index.js" donde importaremos el código de "App.js".-

{% highlight javascript linenos %}
// index.js
import App from './App.js';
{% endhighlight %}

Y corremos Webpack para transpilar el código.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

Podemos validar en el contenido del archivo "main.js" que es donde se crea el código en es5 (Javascript).

## Configurando el plugin de HTML para webpack

Si llegaste a este punto habras notado que a pesar de haber hecho un ejemplo basico con React no lo pudimos ver en ejecución ya que por defecto webpack no tiene soporte para archivos HTML, pero podemos configurarlo.

Webpack necesita dos componentes adicionales para poder procesar HTML.-

* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin).- Este complemento generará un archivo HTML5 para incluir todos nuestros paquetes de webpack  en el cuerpo usando etiquetas script.
* [html-loader](https://www.npmjs.com/package/html-loader).- Nos ayuda a exportar HTML como un string miniminandolo cuando el compilador lo necesite.

Instalamos las dependencias.-

{% highlight javascript linenos %}
$ npm install -D html-webpack-plugin html-loader
{% endhighlight %}

Ahora vamos a actualizar la configuración de webpack en el archivo "webpack.config.js".-

{% highlight javascript linenos %}
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
{% endhighlight %}

Y creamos nuestra plantilla del archivo "index.html" en el directorio "src".-

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Webpack for React - Codeando</title>
</head>
<body>
    <div id="app">
    </div>
</body>
</html>
{% endhighlight %}

Y corremos webpack.-

{% highlight html linenos %}
$ npm run dev
{% endhighlight %}

Y veremos que en el directorio "dist" además de que se creo el archivo "main.js" tambien se creo el archivo "index.html" con el archivo "main.js" agregado.

## Conclusiones

En estos momentos ya tenemos un entorno de desarrollo casi completo para desarrollar con React, solo falta configurar para que pueda extraer de los archivos el código CSS, lo cual veremos en el siguiente articulo.

Que tengan feliz código.