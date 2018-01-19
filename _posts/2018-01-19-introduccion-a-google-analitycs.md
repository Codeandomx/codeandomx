---
title: Introducción a Google Analytics
author: Paulo Andrade
categories: analytics
tags: google analytics
---

![Introduccion a Google Analytics](http://blog.codeando.org/img/analytics.jpg)

La **analítica digital** cada ves es más importante en un mundo online, por ejemplo, es interesante poder recopilar datos de una campaña publicitaria, como que tipos de usuarios nos visitan, desde que ubicación lo hacen, que dispositivo y/o navegador utilizan y cuales serian sus preferencias en nuestro sitio.

Si eres propietario de un blog también la **analítica es indispensable**, te ayudara a sintetizar el contenido respecto a los intereses de tus visitantes y ajustar la publicidad a estos requerimientos, nosotros aprenderemos a trabajar con la herramienta de Google Analytics.

## Que puede hacer Google Analytics por mi?

Google Analytics muestra todos los datos recopilados de nuestro sitio en informes, los cuales podremos analizar a fondo para entender el comportamiento de los clientes y su proceso de compra o de nuestros visitantes y sus intereses. En otras palabras es una **plataforma que recopila datos y los procesa en informes**.
 Analytics logra realizar este **seguimiento de forma anónima** añadiendo un código Javascript en cada una de las paginas de su sitio (debemos crearnos una cuenta y configurar un sitio), la recopilación de datos la realiza en periodos de tiempo a los que les llama **sesiones** y esta termina tras 30 minutos de inactividad.

Todos los datos recopilados son enviados a Google y este los presenta en forma de informes, además, pone a nuestra disposición herramientas como vistas y filtros para un seguimiento del sitio más exacto o con ciertas preferencias.

![Informes de Google Analytics](/img/analytics1.jpg)

## Configurar una cuenta en Analytics

Para poder acceder a Google Analytics debes tener una cuenta de Gmail, ingresa a su pagina oficial e inicia sesión.-

[Ir a Google Analytics](https://www.google.com/analytics/)

En la sección de "Empezar a usar Google Analytics" damos clic en registrarse.-

![Registrarse en Google Analytics](/img/analytics2.jpg)

Ahora vamos a configurar nuestra cuenta, en elegir el tipo de seguimiento dejamos el que viene por defecto "Sitio web" e ingresamos los datos que nos piden como nombre de la cuenta, nombre del sitio y url del mismo, la configuración para compartir datos las dejamos tal como están y para finalizar damos clic en "Obtener ID de seguimiento".-

![Configuración de Google Analytics](/img/analytics3.jpg)

Aceptamos las condiciones de servicio si están de acuerdo.-

![Condiciones de servicio Google Analytics](/img/analytics4.jpg)

Si todo marcha bien nos mostrará en pantalla el código de seguimiento que debemos incluir en todas las paginas de nuestro sitio justo antes de la etiqueta de cierre body.-

![Codigo de seguimiento Google Analytics](/img/analytics5.jpg)

Listo ya podemos empezar a recabar datos sobre el uso de nuestro sitio.

## Cuentas, propiedades y vistas

Acabamos de crear una cuenta en Google Analytics y por defecto también se creo una propiedad para esta cuenta y una vista para esta propiedad, hay que entender estos conceptos ya que van de la mano en todo momento en este curso.-

* Una cuenta puede contener varias propiedades y varios administradores con diferentes privilegios (respecto a como manejan la información).
* Una propiedad es un sitio web o una aplicación móvil registrada, esta puede tener varias vistas y cada propiedad cuenta con un ID de seguimiento único.
* Una vista es la forma en la que queremos presentar la información recopilada (en informes), esta información la podemos manipular mediante la inclusión de filtros.

## Vistas

En cuanto a las vistas debemos señalar dos puntos muy importantes.-

1. Las vistas nuevas solo incluyen datos a partir de su fecha de creación. Es decir, que cuando se crea una vista, esta no incluye datos de fechas anteriores a su creación.
2. Si se elimina una vista, solo los administradores pueden recuperarla durante un periodo limitado. Si no lo hacen, la vista se eliminará de forma permanente.

> Después de eliminar una vista, los administradores tienen 35 días para recuperarla antes de ser eliminada de forma permanente.

## Permisos de usuario

Una de las funcionalidades de Analytics es poder asignar permisos a otros usuarios ya sea a nivel de cuenta, propiedad o vista. Cabe mencionar que cada nivel hereda los permisos del nivel superior,por ejemplo, si a un usuario se le da acceso a una cuenta, este tendrá los mismos permisos de acceso a las propiedades y vistas de dicha cuenta. pero, si solo tiene permiso de acceso a una vista, no podrá modificar ni la propiedad ni la cuenta asociadas a esa vista.

Para configurar los permisos debemos hacer clic en "Administrar" (esquina inferior izquierda), y dar clic en "Administración de usuarios" ya sea de la cuenta, propiedad o vista que queremos configurar.-

![Administrar usuarios](/img/analytics6.jpg)

Google Analytics le permitirá configurar los siguientes permisos permisos.-

* Administrar usuarios.- Permite a los usuarios controlar el acceso a una cuenta, propiedad o vista.
* Editar.- Permite a los usuarios realizar cambios en la configuración.
* Colaborar.- Permite a los usuarios compartir paneles y algunos ajustes de medición.
* Leer y analizar.- Permite a los usuarios ver datos, analizar informes y crear paneles.

## Conclusiones

Abarcamos los conceptos básicos que necesitamos para comenzar a trabajar con Analytics, si se me escapa alguno ya lo veremos en el transcurso del curso de Google Analytics, empieza ahora mismo en este fascinante mundo de la analítica online.

Que tengan feliz código.