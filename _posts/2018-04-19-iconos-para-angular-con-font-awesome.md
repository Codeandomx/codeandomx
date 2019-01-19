---
title: Iconos para Angular con font awesome
author: Paulo Andrade
categories: angular2
tags: angular javascript
---

![Iconos para angular con font-awesome](/img/angular2.jpg)

Actualmente el uso de iconos vectoriales (se ajustan/escalan al tamaño que los necesitemos) en nuestras aplicaciones es indispensable, y font awesome es una gran alternativa para poder utilizarlos en nuestras aplicaciones de Angular, su instalación y configuración es muy sencilla, así como la forma de utilizarlos, en este articulo aprenderemos a hacerlo.

<div class="redes-background">
Puedes acceder al <a href="http://github.com/codeandomx/curso-de-introduccion-a-angular" target="_blank">curso gratuito de Angular</a> para aprender más sobre este framework.
</div>

## Que es font awesome

Se trata de una fuente tipográfica de iconos vectoriales de fácil uso, los iconos proporcionados están relacionados a usos habituales que hacemos en nuestras aplicaciones, así que seguro encontraras el que necesitas, estos iconos son vectoriales y por tanto escalables, es decir podemos ajustarlos al tamaño que necesitemos.

Puedes encontrar más información en su [pagina oficial](https://fontawesome.com/).

## Instalando font awesome con Angular CLI

Su instalación es muy sencilla, vamos al directorio principal de nuestra aplicación [Angular](/articulos/un-vistazo-a-angular-2.html) e instalamos las dependencias necesarias.-

> Puedes seguir el tutorial [crear mi primera aplicación con Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html) si eres nuevo en Angular.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

{% highlight javascript linenos %}
npm install --save font-awesome angular-font-awesome
{% endhighlight %}

> Si trabajas en GNU Linux recuerda dar privilegios de súper usuario con "sudo".

Al terminar la instalación las librerías estarán disponibles en el directorio "node_modules" como se muestra a continuación.-

{% highlight javascript linenos %}
/node_modules/font-awesome/css/font-awesome.css
{% endhighlight %}

Ahora vamos incluir font-awesome a Angular, para ello abrimos el archivo "angular-cli.json" y agregamos el path de la librería a la propiedad "styles".-

{% highlight javascript linenos %}
"styles": [
    "styles.css",
    "../../node_modules/font-awesome/css/font-awesome.css"
],
{% endhighlight %}

> En el archivo "angular-cli.json" debemos utilizar rutas relativas al directorio "src" del proyecto, es por eso que para ingresar al directorio "node_modules" regresamos un directorio con "../".

Ya podemos utilizar los iconos de font awesome en nuestra aplicación.

## Configurar font awesome sin Angular CLI

Si tu aplicación la creaste sin utilizar Angular CLI, no hay problema, la forma de utilizar font awesome es muy simple, en el componente principal de la aplicación "app.module.ts" basta con importar la dependencia y agregarla a la propiedad "imports".-

{% highlight javascript linenos %}
//...
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    //...
    imports: [
        //...
        AngularFontAwesomeModule
    ],
    //...
})
export class AppModule { }
{% endhighlight %}

Ahora ya estas listo para utilizar los iconos de font awesome en nuestra aplicación.

## Utilizando iconos en nuestra aplicación

Para ilustrar un ejemplo sobre como utilizar los iconos en nuestra aplicación de Angular CLI vamos a trabajar en la plantilla del componente principal "app.component.html" agregamos lo siguiente.-

{% highlight html linenos %}
<i class="fa fa-spinner fa-spin fa-lg"></i>
{% endhighlight %}

Para mostrar los iconos utilizamos el elemento "i" y mediante clases indicamos cual icono mostrar, en nuestro ejemplo utilizamos el icono "fa-spinner", con fa-spin indicamos que el icono este animado (como una imagen de carga) y por ultimo con "fa-lg" indicamos el tamaño del icono, como se muestra en la siguiente imagen.-

![Angular font awesome](/img/angular9.jpg)

Puedes encontrar en detalle el uso de font-awesome en su [pagina oficial](https://fontawesome.com).

Si en nuestro caso no utilizamos Angular Cli, debemos utilizar la directiva "fa" para mostrar los iconos, vemos el ejemplo anterior pero ahora utilizando el elemento "fa", queda de esta forma.-

{% highlight html linenos %}
<fa name="spinner" animation="spin" size="lg"></fa>
{% endhighlight %}

El resultado sera el mismo, si deseas obtener más información sobre los atributos que puedes utilizar, visita el repositorio npm de [angular-font-awesome](https://www.npmjs.com/package/angular-font-awesome).

## Conclusiones

Sin duda, el uso de font awesome nos ayudara a crear aplicaciones con mejor experiencia para el usuario, su uso gratuito será más que suficiente para cualquier proyecto.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.