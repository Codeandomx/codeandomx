---
title: Introducción a NodeJS
author: Paulo Andrade
categories: nodejs
tags: nodejs javascript es6
---

![NodeJs](/img/nodejs.jpg)

**Javascript** es un lenguaje que en los últimos años ha tomado bastante peso en el desarrollo web gracias a los **full Stack Developer Javascript**, que no es otra cosa que un desarrollador que puede **programar con Javascript** del lado FrontEnd con Angular, del lado BackEnd con ExpressJS y su referente NodeJS y la gestión de base de datos con MongoDB, mejor conocido como MEAN (los frameworks son los más comunes, pero pueden variar según el gusto del desarrollador).

> En la serie de artículos donde vamos a hablar sobre **NodeJS**, te recomendamos **tener conocimientos básicos de Javascript**, pero sobre todo de [ES6 (ECMAScript 6)](/articulos/introduccion-a-es6-javascript.html) el nuevo estándar de este lenguaje, el cual ya es soportado por NodeJS a partir de la versión 4+.

## Conociendo a NodeJS

**NodeJS es un entorno de programación Javascript** con el cual podemos trabajar en el desarrollo de nuestra aplicación BackEnd, esta basado en el [motor V8 de Google Chrome](https://es.wikipedia.org/wiki/V8_(motor_JavaScript)), **usa un modelo de eventos** mejor conocido como programación orientada a eventos no bloqueante (o dicho de otra forma asíncrono) de entrada y salida (I/O) dando como resultado un servidor muy ligero y eficiente.

Además tiene mediante NPM (Node Package Manager) el más grande ecosistema de librerías en el mundo que nos proporciona todo un mundo de posibilidades para desarrollar nuestros proyectos (la comunidad de nodejs es la más grande del mundo, duplicando las librerías proporcionadas por la comunidad de Java, su más cercano competidor).

### El motor V8

Comentábamos que **V8 es el motor de Google Chrome** y NodeJS esta basado en la maquina virtual de Chrome (V8 Javascript Runtime), este motor es el que abre un abanico de posibilidades para poder trabajar con Javascript del lado del servidor, ya que al estar escrito en C lo hace **bastante rápido**, multiplataforma y **compila directamente nuestro código Javascript a lenguaje maquina**.

![motor v8 google chrome](/img/motor_v8.jpg)

> En la imagen anterior vemos una representación gráfica del funcionamiento interno de NodeJS, donde **la piedra angular es el motor V8 de Chrome**.

### Asíncrono y no bloqueante

Una de las **características principales de NodeJS** es su funcionamiento asíncrono y no bloqueante, pero vamos por partes, al hablar de asíncrono nos referimos a que **puede realizar varias tareas entre las que se van alternando hasta que finalicen**, esto lo logra gracias a que trabaja con callbacks y promesas.

En cuanto al **termino no bloqueante esta relacionado con ser asíncrono**, ya que es poder correr varias tareas al mismo tiempo y cada una de estas tareas ira terminando a su debido tiempo (asíncrono y no bloqueante van de la mano).

Para entenderlo mejor, tomemos como ejemplo PHP, un lenguaje de programación que trabaja de forma bloqueante, ya que al lanzarle una solicitud, no realizara ninguna otra tarea (no aceptara otra petición) hasta que finalice la primera solicitud.

### Trabajo con callbacks

Las callbacks son funciones anónimas que pasamos como argumento de otra función o método, **su funcionamiento es asíncrono y por lo tanto no bloqueante**, la mayoría de los desarrolladores Javascript han trabajado con **jQuery** (espero no seas la excepción) que es el mejor ejemplo de trabajar con callbacks ya que toda su sintaxis se basa en estas.

Veamos un ejemplo de código bloqueante en Javascript.-

{% highlight javascript linenos %}
// Importamos la libreria file system
const fs = require('fs');

// Primer mensaje
console.log('primer mensaje');

// Abrimos un fichero y mostramos su contenido
fs.readFileSync('file.txt', 'utf8',  (err, content) => {
    // Verificamos si hay un error
    if(err) throw err;
    else console.log(content);
});

// Segundo mensaje
console.log('segundo mensaje');
{% endhighlight %}

Si ejecutamos el código anterior nos mostraría en pantalla los mensajes en el siguiente orden.-

- primer mensaje
- contenido del archivo
- segundo mensaje

En cambio si **usamos NodeJS asíncrono** tendríamos el siguiente código (solo cambia el método readFile).-

{% highlight javascript linenos %}
// Importamos la libreria file system
const fs = require('fs');

// Primer mensaje
console.log('primer mensaje');

// Abrimos un fichero y mostramos su contenido
fs.readFile('file.txt', 'utf8',  (err, content) => {
    // Verificamos si hay un error
    if(err) throw err;
    else console.log(content);
});

// Segundo mensaje
console.log('segundo mensaje');
{% endhighlight %}

Y nos mostraría los mensajes en el siguiente orden.-

- primer mensaje
- segundo mensaje
- contenido del archivo

Noten como en este segundo ejemplo el mensaje "segundo mensaje" se imprime antes que el contenido del archivo a diferencia del primer ejemplo que se imprime hasta al ultimo, esto pasa por que al **trabajar de forma asíncrona**, el contenido del archivo no se mostrara hasta que se cargue y se pueda extraer el contenido, pero mientras esa tarea esta en proceso, NodeJS sigue realizando otras tareas, como imprimir el segundo mensaje, esto hace más ágil el funcionamiento.

### Promesas

Mencionaba que la forma más común de trabajar en NodeJS es con el uso de callbacks, lo único malo es que este tipo de programación nos genera callbacks anidadas las cuales nos dan como resultado lo que se conoce como código espagueti o pirámide, en otras palabras un código difícil de leer y por lo tanto de entender.

Con la llegada de ES6 se introdujo el concepto de **promesas**, las cuales entre sus características es que también **son asíncronas por medio de callbacks** (pero no anidadas), les explico, al trabajar solo con callbacks, cada ves que la utilices tienes que utilizar un "if(err)" para poder controlar algún error de ejecución (sin contar las callback anidadas), en cambio **las promesas manejan una sola interfaz para los errores** (un solo código para todas) de esta forma tenemos un código más controlado.

Entonces **una promesa es una excelente alternativa para trabajar de forma asíncrona** en nuestras aplicaciones con NodeJS, con bloques consecutivos de código evitando el código espagueti y con un manejo de errores más controlado, el código anterior quedaría de esta forma al hacerlo con promesas.-

{% highlight javascript linenos %}
// Importamos la libreria file system
const fs = require('fs');

// Primer mensaje
console.log('primer mensaje');

// Creamos una promesa
var promise = new Promise((resolve, reject) => {
    fs.readFile('file.txt', 'utf8',  (err, content) => {
        // Actuamos segun si hay o no error
        return (err) ? reject(new Error('Error al abrir el archivo')) : resolve(content);
});

// Controlador para la promesa
promise
    .then(data => console.log(data.toString()))
    .catch(err => console.error(err.message));

// Segundo mensaje
console.log('segundo mensaje');
{% endhighlight %}

Al ejecutar el código anterior nos mostraría los mensajes en el siguiente orden.-

- primer mensaje
- segundo mensaje
- contenido del archivo

Te recomiendo aprender a trabajar con promesas ya que las utilizaremos en gran medida al programar nuestra aplicación con NodeJS

### Single thread

NodeJS se creó explícitamente como un experimento en procesamiento asíncrono. La teoría era que realizar un procesamiento asíncrono en un solo hilo podría proporcionar más **rendimiento y escalabilidad** bajo cargas web típicas a diferencia de la implementación típica basada en hilos.

En mi opinión esa teoría ha sido corroborada. Una aplicación creada con NodeJS que no está haciendo un uso intensivo de la CPU **puede ejecutar miles de conexiones simultáneas** más que los servidores como Apache o IIS u otros servidores basados en subprocesos.

En servidores Web basados en PHP (o Java / ASP.NET / Ruby), cada solicitud de cliente se instancia en un nuevo subproceso. Pero en NodeJS todos los clientes se ejecutan en el mismo hilo (incluso pueden compartir las mismas variables!) Entendiendo que las operaciones de I/O son basadas en eventos para que no bloqueen el ciclo de subproceso principal.

![single thread](/img/single_thread.jpg)

> En resumen, un servidor compartido de PHP normalmente proporciona un mínimo de 2Gb de RAM, cada solicitud entrante genera un subproceso promedio de 2 Mb, esto nos da como resultado que este servidor pueda atender un máximo de 1024 solicitudes antes de colapsar, mientras con NodeJS esto no sucede al tratar cada solicitud como un evento como lo muestra la imagen de arriba.

### Programación orientada a eventos

**NodeJS trabaja con un modelo basado en eventos**, les explico la forma de trabajar, el servidor acepta una petición y la manda a la cola, va y atiende la siguiente petición y las manda a la cola, cuando la primer petición o las subsecuentes terminan la respuesta se envía a la cola y al llegar su turno devuelve la respuesta.

> Una cola es una estructura de datos que los va almacenado en el orden de llegada respetando el concepto FIFO (First Input First Output)

La diferencia claro está en que en el modelo basado en eventos **el servidor siempre se mantiene ocupado** sin esperar a que las otras conexiones terminen las operaciones que bloquean ciertos recursos.

![programacion orientada a eventos](/img/event_loop.jpg)

## Conclusiones

Espero que esta introducción a NodeJS te aliente a seguir aprendiendo a trabajar con esta tecnología, ya que hay muchos temas por explicar,  les recomiendo **aprender a trabajar con ES6** ya que mucho del código que programaremos estará basado en este estándar.

Que tengan feliz código!.