---
title: Configuración de las vistas en Google Analytics
author: Paulo Andrade
categories: analytics
tags: google analytics
---

![Configuración de las vistas en Google Analytics](http://blog.codeando.org/img/analytics.jpg)

En el articulo anterior vimos una [introducción a Google Analytics](http://blog.codeando.org/articulos/introduccion-a-google-analytics.html), aprendimos a grandes rasgos la forma es **como se organizan los datos recopilados**, dentro de esta organización encontramos la estructura que va desde una cuenta, la cual puede tener varias propiedades (sitios web o aplicaciones móviles registradas) y estas a su vez varias vistas.

## Para que nos sirven las vistas?

Las vistas nos van a proporcionar en forma de reportes los datos que **Google Analytics recopila de nuestra propiedad**, estos datos pueden mostrarnos solo un nicho de nuestro mercado objetivo (por ejemplo datos solo de visitantes de México) gracias a los usos de los filtros o todos los datos en crudo (sin uso de filtros).

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Para trabajar con Analytics en este curso vamos a crear dos vistas más, para poder trabajar con tres, ya que estamos incluyendo la que se crea por defecto, cabe mencionar que al crear una vista, esta solo mostrara datos a partir de su fecha de creación, además, si eliminamos una vista, la podremos recuperar dentro de los primeros 35 días después de ser eliminada.

## Vista con datos crudos

Esta sera la vista que se creo por defecto, en ella no vamos a utilizar ningún tipo de filtro para que nos pueda mostrar todas las estadísticas posibles de nuestra propiedad, para configurarla damos clic en "Administrar" (parte inferior izquierda) y seleccionamos "Configuración de la vista".-

![Configuración de la vista](/img/analytics7.jpg)

Cambiamos el nombre de la vista, en nuestro caso elegimos el nombre "Datos en crudo" (puedes elegir el nombre que gustes).-

![Nombre de la vista](/img/analytics8.jpg)

En la misma configuración dejamos sin seleccionar la opción "Excluir todos los hits de robots y de arañas conocidos" y damos clic en "Guardar".-

![Excluimos hits de robot y de arañas](/img/analytics9.jpg)

Si abrimos la suite de Google Analytics veremos que ya aparece nuestra vista con el nombre que le asignamos.-

![Suite de Google Analytics](/img/analytics10.jpg)

## Vista con datos de prueba

Vamos a crear una vista en la que estaremos realizando todas las pruebas de configuración de filtros, esto lo hacemos con el fin de no perder datos por algún error de configuración, para crear una vista damos clic en "Administrar", después en el menú de vistas y por ultimo en "Crear nueva vista".-

![Crear nueva vista en Analytics](/img/analytics11.jpg)

Le asignamos el nombre de "Datos de prueba" y damos clic en "Crear vista".-

![Configuración de nueva vista en Analytics](/img/analytics12.jpg)

Si vamos a la suite, veremos que ya nos aparece la vista nueva.-

![Suite de google analytics](/img/analytics13.jpg)

## Vista principal

Por ultimo vamos a crear una vista donde podemos tener la recopilación de datos ya con los filtros bien configurados, el proceso es similar a la vista anterior, creamos una nueva vista con el nombre "Datos principales".-

![Crear vista principal](/img/analytics14.jpg)

Una vez creada vamos a "Configuración de la vista".-

![Configuración de la vista principal](/img/analytics15.jpg)

Y seleccionamos la opción "Excluir todos los hits de robots y de arañas conocidos" y damos clic en "Guardar".-

![Configuracion analytics](/img/analytics16.jpg)

Listo, ya la podemos visualizar en la suite de Google Analytics.-

![Suite de Google Analytics](/img/analytics17.jpg)

## Conclusiones

A lo largo del curso utilizaremos las tres vistas que acabamos de configurar, en el siguiente articulo veremos como crear un filtro y como asignarlo a alguna de las vistas.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo anterior: [Introducción a Google Analytics](/articulos/introduccion-a-google-analytics.html).

Que tengan feliz código.