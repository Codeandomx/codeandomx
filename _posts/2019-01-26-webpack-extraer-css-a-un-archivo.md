---
title: Webpack extraer CSS a un archivo
layout: post
author: Paulo Andrade
categories: webpack
tags: webpack javascript es6
---

![Webpack javascript](/img/webpack.jpg)

Seguimos con la guia de **[Webpack](/articulos/webpack-instalacion-y-primeros-pasos.html)**, en este articulo aprenderemos a configurar nuestro **entorno de desarrollo** con webpack para que pueda extraer el css de los archivos Javascript, para lograrlo utilizaremos mini-css-extract-plugin, su configuración es muy parecida al componente de HTML.

## Extracción de CSS en Webpack

Si vienens utilizando Webpack en versiones inferiores a la 4, te comento que extract-text-webpack-plugin ya no funciona y en palabras de Michael ciniawsky.-

> xtract-text-webpack-plugin llegó a un punto en el que mantenerlo se convirtió en una carga demasiado pesada y no es la primera vez que actualizar a una versión de webpack importante fue complicado y engorroso debido a problemas con él.

Por este motivo ya no se utiliza, pero en su lugar estaremos utilizando [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).

> Para poder utilizarlo necesitamos webpack 4.2.0+.

Instalamos el plugin y [css-loader](https://www.npmjs.com/package/css-loader) y nos quedara de esta forma (incluyenda las optimizaciones anteriores).-

{% highlight javascript linenos %}
$ npm install -D mini-css-extract-plugin css-loader
{% endhighlight %}

Ahora vamos a configurar css-loader y el plugin en el archivo de configuración de webpack.-

{% highlight javascript linenos %}
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // conf css

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
      },
      { // Conf css
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }), // Conf css
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
{% endhighlight %}

Ahora para utilizarlo es muy sencilo, en nuestro punto de entrada (index.js) vamos importar un archivo css.-

{% highlight javascript linenos %}
import style from './css/main.css';
{% endhighlight %}

Colocamos el siguiente contenido en nuestro archivo CSS.-

{% highlight css linenos %}
*
{
	padding: 0;
	margin: 0;
}
body
{
	line-height: 2;
}
{% endhighlight %}

Y procedemos a Iniciar webpack.-

{% highlight javascript linenos %}
$ npm run dev
{% endhighlight %}

Al finalizar el proceso, veremos que en el directorio "dist", aparece un archivo CSS y este archivo esta agregado al index.html.

## Minimizar CSS para producción

Al inspeccionar el archivo css generado, noraras que el código no esta minificado, esto no es ningun problema ya que para producción podemos minifacorlo facilmente, instalamos las siguientes librerias.-

{% highlight javascript linenos %}
$ npm install -D optimize-css-assets-webpack-plugin
{% endhighlight %}

Y agregamos una configuración más a nuestro archivo "webpack.config.js".-

{% highlight javascript linenos %}
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
	...
{% endhighlight %}

Con esto al ejecutar en modo producción, veremos que el archivo CSS generado esta minificado.-

{% highlight javascript linenos %}
$ npm run build
{% endhighlight %}

## Conclusiones

Estamos a un paso de terminar de configurar nuestro entorno de desarrollo con webpack, solo nos falta ejecutar un servidor y poner a webpack en espera de cambios en el código.

Que tengan feliz código.