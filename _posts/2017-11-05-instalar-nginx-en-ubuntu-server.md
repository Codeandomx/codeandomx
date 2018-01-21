---
title: Instalar Nginx en Ubuntu Server
author: Paulo Andrade
categories: nginx
tags: nginx ubuntu
---

![nginx server](/img/nginx.jpg)

Con este articulo damos inicio a una serie de tutoriales que nos ayudaran a configurar Nginx (servidor web) en nuestro VPS en el cual tenemos como sistema operativo ubuntu 16.04 (versión LTS), además, configuraremos el entorno de desarrollo MEAN para servir nuestras aplicaciones.

> MEAN hace referencia a: **MongoDB** que es la base de datos NoSQL líder, siendo ágil y escalable; **ExpressJS**  es un framework para aplicaciones web para NodeJS muy flexible, que proporciona un sólido conjunto de características para crear SPA;  **Angular** nos permite ampliar los elementos HTML para su aplicación mediante los nuevos estándares de Javascript; **NodeJS** es una plataforma basada en el motor Javascript de Chrome para construir fácilmente aplicaciones de red rápidas y escalables basadas en eventos.

## Nginx a grandes rasgos

NGINX es un **servidor HTTP de alto rendimiento**, libre y de **código abierto**, así como un servidor proxy IMAP/POP3. además, es conocido por su alto rendimiento, estabilidad, amplio conjunto de funciones, configuración simple y lo más importante es su **bajo consumo de recursos**.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

A diferencia de los servidores tradicionales, NGINX no depende de los hilos para manejar las solicitudes (como normalmente lo hace Apache). En su lugar, utiliza una **arquitectura mucho más escalable impulsada por eventos** (asíncrona). Esta arquitectura **usa pequeñas cantidades de memoria** resaltando su gran rendimiento.

NGINX le puede servir desde el VPS más pequeño (con pocos recursos) hasta los grandes grupos de servidores normalmente usados en empresas.

## Instalación de Nginx

Lo primero que debemos hacer es actualizar los indices de los paquetes de ubuntu, para asegurarnos de instalar la versión estable más reciente.-

{% highlight javascript linenos %}
$ sudo apt-get update
{% endhighlight %}

Una vez que termine, procedemos a **instalar Nginx** con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get install nginx
{% endhighlight %}

Una ves terminada la instalación podemos comprobar que se instalo correctamente verificando la versión.-

{% highlight javascript linenos %}
$ nginx -v
{% endhighlight %}

Nos aparecerá algo como lo siguiente.-

{% highlight javascript linenos %}
nginx version: nginx/1.10.3 (Ubuntu)
{% endhighlight %}

## Archivos y directorios importantes

A continuación les muestro un listado de los directorios y archivos que necesitamos conocer para la configuración de Nginx.-

* **/var/www/html**.- [directorio] El directorio principal donde almacenaremos nuestros archivos web.
* **/etc/nginx/nginx**.- [directorio] En este directorio encontraremos todos los archivos de configuración de Nginx.
* **/etc/nginx/nginx.conf**.- [archivo] Es el archivo de configuración principal de Nginx.
* **/etc/nginx/sites-available**.- [directorio] En este directorio podemos almacenar los "archivos de servidor" por sitio. Nginx no utilizará los archivos de configuración que se encuentren en este directorio a menos que estén vinculados al directorio sites-enabled (ver abajo). Normalmente, toda la configuración del bloque del servidor se realiza en este directorio y se habilita mediante la vinculación al otro directorio.
* **/etc/nginx/sites-enabled/**.- [directorio] En este directorio se almacenan los "archivos de servidor" por sitio. (estos se crean vinculando los archivos de configuración que se encuentran en el directorio sites-available).
* **/etc/nginx/snippets**.- [directorio] En este directorio encontraremos fragmentos de configuración que se pueden incluir en cualquier otro lugar de la configuración de Nginx.
* **/var/log/nginx/access.log**.- [archivo] Es un archivo de registro en el que se almacena cada solicitud a nuestro servidor web.
* **/var/log/nginx/error.log**.- [archivo] Archivo de registro en donde se almacenan todos los errores de Nginx.

## Configuración del directorio principal

Vamos a configurar el sitio que vamos a servir cuando llamemos a nuestro dominio (si no tenemos un dominio puede mediante una IP), esta configuración la encontramos en el archivo default del directorio "/etc/nginx/sites-available/", asi que lo editamos.-

{% highlight javascript linenos %}
$ sudo nano /etc/nginx/sites-available/default
{% endhighlight %}

Y nos deberá quedar de esta forma.-

{% highlight javascript linenos %}
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html/codeando/public_html;
    index index.html index.htm index.nginx-debian.html;
    server_name codeando.org;
    location / {
        try_files $uri $uri/ =404;
    }
}
{% endhighlight %}

Entre las lineas importantes menciono las siguientes.-

* Linea 2 y 3.- Nuestra pagina web se servirá en el dominio establecido mediante el puerto 80 (http).
* Linea 4.- Indicamos el directorio principal de nuestra aplicación web.
* Linea 5.- Indicamos el tipo de archivo de entrada que espera el servidor para mostrar nuestra aplicación.
* Linea 6.- Indicamos el dominio de nuestro servidor o en su defecto la IP.

> Recuerda que para utilizar un dominio personalizado deberás ser propietario del mismo y tener configurado sus registros DNS con tu proveedor de servicio.

Ahora solo guardamos el archivo (ctr + o) y salimos del mismo (ctr + x) y comprobamos que no exista errores de sintaxis mediante el siguiente comando.-

{% highlight javascript linenos %}
$ sudo nginx -t
{% endhighlight %}

Y nos mostrara un mensaje como el siguiente si todo marcha bien.-

{% highlight javascript linenos %}
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
{% endhighlight %}

Creamos nuestro directorio con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo mkdir -p /var/www/html/codeando/public_html
{% endhighlight %}

> El flag -p nos permite crear directorios intermedios que no existan si así se requiere.

Y por ultimo creamos un archivo para mostrar al servir la aplicación.-

{% highlight javascript linenos %}
$ sudo nano /var/www/html/codeando/public_html/index.html
{% endhighlight %}

Le podemos poner como contenido simplemente "Hello codeando", para que los cambios surtan efecto debemos reiniciar nuestro servidor.-

{% highlight javascript linenos %}
$ sudo service nginx restart
{% endhighlight %}

Ya tenemos todo listo, pero antes de servir la aplicación debemos configurar el firewall de Nginx para que permita trafico http y/ https.

## Configuración del firewall

Primero debemos verificar el status del firewall, lo hacemos con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo ufw status
{% endhighlight %}

En caso de que nos llegue aparecer el mensaje "Status: inactive", debemos activarlo con el siguiente comando, en caso contrario continue.-

{% highlight javascript linenos %}
$ sudo ufw enable
{% endhighlight %}

Ahora mostramos la lista de los perfiles de nuestra aplicación.-

{% highlight javascript linenos %}
$ sudo ufw app list
{% endhighlight %}

Y nos mostrara las siguientes aplicaciones disponibles.-

{% highlight javascript linenos %}
Available applications:
    Nginx Full
    Nginx HTTP
    Nginx HTTPS
    OpenSSH
{% endhighlight %}

Por el momento solo necesitamos permitir el acceso a las peticiones HTTP (puerto 80), así que le damos acceso con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo ufw allow 'Nginx HTTP'
{% endhighlight %}

Verificamos nuevamente el status y nos deberá mostrar lo siguiente.-

{% highlight javascript linenos %}
Status: active

To                         Action      From
--                         ------      ----
Nginx HTTP                 ALLOW       Anywhere
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
{% endhighlight %}

Ya podemos servir nuestra aplicación.

> Como recomendación, lo más seguro es que administres tu servidor mediante una conexión SSH, por lo tanto, dale permisos al firewall de nginx para permitir el acceso por el puerto 22 con el comando "sudo ufw allow 'OpenSSH'".

## Mostrar nuestra aplicación

Por ultimo solo debemos acceder a nuestro dominio y nos deberá de mostrar el mensaje "Hello codeando".

> Si no lo muestra, reinicia el servidor Nginx para que surtan efecto los cambios.

En caso de que no configuraras el path y lo dejaras con su ruta por defecto, al ingresar al navegador nos mostraria lo siguiente.-

![Pagina de inicio de nginx](/img/nginx_homepage.jpg)

## Que pasa si no tengo un dominio?

Si no tienes un dominio personalizado no te preocupes, puedes configurar una IP (esta puede ser dinámica o estática según la configuración de tu VPS), puedes acceder a esta con el siguiente comando.-

{% highlight javascript linenos %}
ip addr show | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
{% endhighlight %}

Una vez que la tengas a la mano, configura el archivo default (descrito anteriormente) y listo.

## Conclusiones

Toda esta configuración se utilizo en un VPS con S.O. Ubuntu, no se realizaron pruebas en local, si puedes ayudar a contribuir información sobre como configurar nginx en local no dudes en compartirla con la comunidad, en los siguientes artículos veremos como instalar NodeJS con Nginx, correr una app con NodeJS, instalar MongoDB con Nginx y mucho más.

Que tengan feliz código.