---
title: Instalar certificado SSL en nginx gratis con certbot
layout: post
author: Paulo Andrade
categories: nginx
tags: nginx ubuntu certbot ssl
---

![Servidor Nginx](/img/nginx.jpg)

Un certificado SSL en nuestro sitio o aplicación web nos brindara mejor protección en el manejo de datos, sobretodo si realizamos transacciones con nuestro clientes (como pagos, sesiones, manejo de datos personales, etc), así que no lo pienses y procede a instalar uno en tu servidor, es gratuito.

Para seguir el tutorial, necesitamos cumplir con los siguientes requisitos.-

* Tener Ubuntu Server (El tutorial se basa para la versión 16.04).
* Tener instalado y configurado **Nginx**.
* tener un dominio configurado para tu servidor.

Si necesitas ayuda puedes leer el articulo anterior [Instalar Nginx en Ubuntu server](/articulos/instalar-nginx-en-ubuntu-server.html).

## Que son los certificados SSL

Los certificados SSL son pequeños archivos de datos que vinculan digitalmente una **clave criptográfica** con los detalles de una organización. Cuando se instala en un servidor web, activa el famoso candado en la parte izquierda de nuestra url, el **uso del protocolo https** y permite conexiones seguras desde un servidor web a un navegador.

Normalmente, **SSL** se utiliza para proteger las transacciones con tarjeta de crédito, la transferencia de datos y los inicios de sesión, y más recientemente se está convirtiendo en la norma cuando se asegura la navegación de los sitios de redes sociales.

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Nosotros utilizaremos Certbot como proveedor de nuestros certificados SSL, puedes consultar más información sobre Certbot en su [página oficial](https://certbot.eff.org/).

![Certificados ssl certbot](/img/certbot.jpg)

## Instalación de Certbot

Lo primero es asegurarnos de tener las listas de paquetes de Ubuntu actualizadas.-

{% highlight javascript linenos %}
$ sudo apt-get update
{% endhighlight %}

Instalamos un gestor para el software común.-

{% highlight javascript linenos %}
$ sudo apt-get install software-properties-common
{% endhighlight %}

Agregamos el PPA de Certbot.-

{% highlight javascript linenos %}
$ sudo add-apt-repository universe
$ sudo add-apt-repository ppa:certbot/certbot
{% endhighlight %}

Volvemos actualizar la lista de paquetes.-

{% highlight javascript linenos %}
$ sudo apt-get update
{% endhighlight %}

Por ultimo instalamos Certbot con el siguiente comando.-

{% highlight javascript linenos %}
$ sudo apt-get install python-certbot-nginx
{% endhighlight %}

## Obtenemos los certificados SSL

Certbot tiene una opción para realizar de forma automatizada el proceso de obtención de los certificados SSL, ejecutamos el siguiente comando.-

{% highlight javascript linenos %}
$ sudo certbot --nginx
{% endhighlight %}

Y se iniciara el asistente de Certbot, y nos pedirá que ingresemos nuestro email.-

{% highlight javascript linenos %}
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel):
{% endhighlight %}

Después de ingresarlo nos preguntaran si aceptamos los términos y condiciones sobre el servicio.-

{% highlight javascript linenos %}
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.1.1-August-1-2016.pdf. You must agree
in order to register with the ACME server at
https://acme-v01.api.letsencrypt.org/directory
-------------------------------------------------------------------------------
(A)gree/(C)ancel:
{% endhighlight %}

Ingresamos "A" y damos enter, después nos pedirá autorización para enviarnos información sobre productos y actualizaciones.-

{% highlight javascript linenos %}
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about EFF and
our work to encrypt the web, protect its users and defend digital rights.
-------------------------------------------------------------------------------
(Y)es/(N)o: 
{% endhighlight %}

Nos pedirá elegir los dominios (y subdominios si es que los tuviéramos) a los que queremos aplicar un certificado SSL.-

{% highlight javascript linenos %}
Which names would you like to activate HTTPS for?
-------------------------------------------------------------------------------
1: codeando.org
-------------------------------------------------------------------------------
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 
{% endhighlight %}

En nuestro caso elegimos la opción 1 (ya que es la unica), Por ultimo nos mostrara la opción de redireccionar automáticamente de HTTP a HTTPS.-

{% highlight javascript linenos %}
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
-------------------------------------------------------------------------------
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
{% endhighlight %}

Elegimos la opción 2 y nos aparecer un mensaje de que todo finalizo con éxito.-

{% highlight javascript linenos %}
-------------------------------------------------------------------------------
Congratulations! You have successfully enabled https://codeando.org

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=codeando.org
-------------------------------------------------------------------------------
{% endhighlight %}

## Renovación automatica

Los certificados de Certbot tienen una duración aproximada de 90 días, así que debemos asegurarnos de renovarlos antes de que se termine el tiempo, para renovarlos actualizamos el siguiente comando.-

{% highlight javascript linenos %}
$ sudo certbot renew --dry-run
{% endhighlight %}

Si todo marcho bien, nos mostrara un mensaje parecido al siguiente.-

{% highlight javascript linenos %}
-------------------------------------------------------------------------------
new certificate deployed with reload of nginx server; fullchain is
/etc/letsencrypt/live/codeando.org/fullchain.pem
-------------------------------------------------------------------------------
{% endhighlight %}

> Lo ideal es programar un Cron Job para que realice esta tarea por lo menos dos veces por día.

Si todo salio bien podemos visualizar el candado como se muestra en la siguiente imagen.-

![Protección SSL](/img/nginx_homepage.jpg)

## Conclusiones

En hora buena si llegaste a esta parte del tutorial espero que hayas conseguido los certificados SSL, en caso de tener inconvenientes durante el proceso, comparte tu problema en el área de comentarios para encontrar una solución a tu problema.

Que tengan feliz código.