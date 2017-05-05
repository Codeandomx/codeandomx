---
title: El core (núcleo) de NodeJS
author: Paulo Andrade
categories: nodejs
tags: nodejs javascript es6
---

![Core o núcleo de Javascript](/img/nodejs.jpg)

En la [introducción a NodeJS](/articulos/introduccion-a-nodejs.html) vimos las bases de las cuales partiremos para **aprender a programar grandes aplicaciones** entre las cuales destacamos el uso de **callbacks** y **promesas** para tener una aplicación asíncrona así como la importancia de [aprender ES6](/articulos/introduccion-a-es6-javascript.html), ya que la mayoría de ejemplos estará basada en este nuevo estándar, ahora vamos un paso más adelante y hablemos sobre **el núcleo de NodeJS**.

## Core de NodeJS

El núcleo de NodeJS esta **compuesto por 37 módulos** los cuales tenemos a nuestra disposición desde que lo instalamos en nuestro ordenador, además de estos módulos contamos con un sin fin de **dependencias externas soportadas por la gran comunidad de NodeJS** mediante su gestor de paquetes (NPM), de esta forma tendremos un sin fin de posibilidades al crear nuestras aplicaciones.

Retomando el tema de los módulos los cuales podremos encontrar en la [documentación oficial](https://nodejs.org) toda la información referente a estos, debemos tener en cuenta un factor muy importante y se trata sobre **el nivel de estabilidad** de cada uno de estos módulos, veamos la siguiente imagen.-

![estabilidad modulos nodejs](/img/estabilidad_nodejs.jpg)

Tomemos como ejemplo el **modulo HTTP de NodeJS** de la documentación oficial, podemos destacar **en color verde la estabilidad de dicho modulo**, con el numero dos y con la leyenda "stable", esto nos indica que el modulo se encuentra en una versión que **puede ser utilizada sin miedo** a que sufra grandes cambios y sobre todo **obtenemos una muy buena estabilidad para nuestros proyectos**.

Existen 4 niveles de estabilidad para los módulos los cuales podemos observar a continuación.-

![estabilidad nodejs](/img/stability.jpg)

Les explico, los **módulos que están en desuso** los numeran con el 0 y la leyenda "deprecated" (color rojo), **su uso no es recomendable**, enseguida tenemos los **módulos experimentales** con el número 1 y la leyenda "experimental" (color naranja), su **uso es aconsejable solo en fases de desarrollo** ya que en cualquier momento puede sufrir actualizaciones y cambiar por completo, después nos encontramos con los **módulos estables** (que ya explique) y por ultimo los **módulos cerrados**, con el número uno y la leyenda "locked" (color azul), es el nivel más alto de estabilidad y por tanto el que menos posibilidades de actualizaciones tiene, su **uso es totalmente recomendable**.

## Buenas practicas

Javascript al ser un **lenguaje dinámico y con muchas variantes** (estilos de programación), en ocasiones es difícil llevar un proyecto a buen puerto si cada desarrollador hace su parte como le plazca, por ello es recomendable seguir al pie de la letra una **guía de estilos de programación para NodeJS**, les recomiendo dar una leída a la [guia traducida al español por Carlos J. Martínez Díaz]( https://github.com/carlosmart7104/guia-de-estilo-para-nodejs-y-javascript).

Además de la guía tenemos como una gran ayuda el **uso estricto de Javascript**, el cual nos va a obligar a programar con la misma semántica a todos los desarrolladores, para activarlo solo hay que agregar al principio de cada archivo Javascript (y/o como primer linea de las funciones) el siguiente código.-

{% highlight javascript linenos %}
'use strict';

// A partir de aqui el código
{% endhighlight %}

Por ultimo mencionar que para los identificadores de variables, funciones y clases es recomendable **utilizar la sintaxis camelCase**, de la cual se divide en dos partes, para los nombres de las clases utilizamos **UpperCamelCase**, lo que seria la primer letra del identificador en mayúsculas y cada primer letra de las palabras que la componen y **lowerCamelCase** es igual que el anterior solo que la primer letra en minúsculas, ejemplo.-

{% highlight javascript linenos %}
'use strict';

// clases
class EstaEsUnaClase { ... }

// variables
let estaEsUnaVariable;

// funciones
let estaEsUnaFuncion = function () { ... };
{% endhighlight %}

## La base para NodeJS

Antes de programar nuestro primer servidor debemos dejar muy en claro las bases que utilizaremos para programar con NodeJs, esta base estará en la utilización de 5 módulos del core ([process](https://nodejs.org/dist/latest-v6.x/docs/api/process.html), [buffer](https://nodejs.org/dist/latest-v6.x/docs/api/buffer.html), [stream](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html), [events](https://nodejs.org/dist/latest-v6.x/docs/api/events.html) y [http](https://nodejs.org/dist/latest-v6.x/docs/api/http.html)), así que empecemos.

### Modulo process

En realidad el modulo process **es un objeto global** el cual nos va a proveer información sobre los procesos que estén corriendo en nuestro servidor (o en el script de NodeJS), cabe mencionar que para utilizar este modulo **no es necesario importarlo a nuestro código** como normalmente se hace, por lo tanto estará disponible en todo momento.

Entre las propiedades y métodos que podemos utilizar del objeto process encontramos los siguientes.-

- process.pid.- Nos devuelve el ID del proceso.
- process.title.- Nos devuelve el nombre del proceso.
- process.exexPath.- Nos devuelve la ruta (path) donde tenemos instalado NodeJS.
- process.cwd().- Nos devuelve la ruta (path) del proyecto, o dl archivo en el que se esta corriendo el proceso.
- process.version.- Nos devuelve la versión de NodeJS que tenemos instalada.
- process.versions.- Nos devuelve un objeto con las versiones de las dependencias que tengamos instaladas.
- process.platform.- Nos devuelve el sistema operativo en el que estamos corriendo NodeJS.
- process.arch.- Nos devuelve la arquitectura del sistema operativo, ya sea de 32 o 64 bits.
- process.uptime().- Nos devuelve el tiempo que tardo en ejecutarse el proceso.
- process.argv.- Nos devuelve un objeto con los argumentos que le pasemos al proceso, en donde los dos primeros son.-
	- argv[0].- Nos devuelve la ruta (path) donde tenemos instalado NodeJS.
	- argv[1].- Nos devuelve la ruta (path) del proyecto, o dl archivo en el que se esta corriendo el proceso.

Para entender mejor el funcionamiento del objeto process retomemos un script del articulo anterior.-

{% highlight javascript linenos %}
'use strict';

// Importamos la libreria file system
const fs = require('fs');

// Abrimos un fichero y mostramos su contenido
fs.readFile('file.txt', 'utf8',  (err, content) => {
    // Verificamos si hay un error
    if(err) throw err;
    else console.log(content);
});

// Obtengamos datos del proceso
console.log('Nombre: ', process.pid);
console.log('Tiempo: ', process.uptime());
{% endhighlight %}

Si ejecutamos el código anterior nos devolverá en la consola el nombre del proceso y el tiempo que tardo en ejecutarse.

### Modulo buffer

El modulo buffer al igual que el anterior **no requiere que lo importemos a nuestro servidor** ya que es una **clase que se toma como global**, ahora, un buffer es un mecanismo (una cola [estructura de datos]) que nos sirve para leer o manipular streams (que veremos a continuación) de datos binarios (datos en lenguaje maquina), entre las cosas que podemos manipular con los buffer encontramos.-

- Streams.
- Protocolos (en particular TCP).
- Manipulación de ficheros.

Veamos un ejemplo sencillo para entender como funciona un buffer.-

{% highlight javascript linenos %}
'use strict';

// Creamos un buffer vacio
let buffer = new Buffer(5);
let buffer_2 = Buffer.from('hello world', 'ascii');

// Imprimimos los buffer
console.log(buffer);
console.log(buffer_2.toString('hex'));
{% endhighlight %}

Si ejecutamos el código anterior obtendremos en la consola Javascript los siguientes resultados(binarios).-

- 00 00 00 00 00
- 68 65 6c 6c 6f 20 77 6f 72 6c 64

En la linea 4 **creamos un buffer vació** y al imprimirlo obtenemos el resultado (00 00 00 00 00), en cambio en la linea 5 **creamos un buffer a partir de una cadena** y al imprimirlo obtenemos esa cadena en formato hexadecimal, lo importante es entender que para imprimir un buffer (recuerda que son datos binarios) necesitamos convertirlo a cadena mediante el método toString(), en caso de no hacerlo obtendríamos resultados como los anteriores.

### Modulo Stream

Un stream es una **interfaz abstracta para trabajar con transmisiones** (streaming) de datos (**datos binarios**), para esto, NodeJS nos proporciona toda una API para crear e implementar interfaces de streaming fácilmente, los streams pueden ser de 3 tipos.-

- Readable.- Un stream de solo lectura.
- Writable.- Un stream donde podemos insertar datos.
- Duplex.- Permite tanto escribir como leer los streams.

El tema de los streams es muy importante al trabajar con NodeJS, ya que son una instancia de [EventEmitter](https://nodejs.org/dist/latest-v6.x/docs/api/events.html) y además **todos los módulos** del core de NodeJS también **son una instancia de EventEmitter**, por lo tanto, todos los módulos en cierto momento necesitaran trabajar con stream y esos a su vez con un buffer (por ser un canal de datos binarios), es por ello la importancia de entender estos conceptos.

Retomemos el ejemplo del fichero, pero ahora lo vamos adaptar para trabajar con streams.-

{% highlight javascript linenos %}
'use strict';

// Importamos la librería file system
const fs = require('fs');

// creamos dos instancias de lectura y escritura (stream)
let rs = fs.createReadStream('./file.txt'), // stream de lectura
       ws = fs.createWriteStream('./new_file.txt'); // stream de escritura

// Escribimos
rs.pipe(ws);

// Manejador de eventos
rs
    .on('data', data => console.log('Transmitiendo datos: ', data))
    .on('end', => console.log('Transferencia terminada'))
    .on('err', err => console.log('Error: ', err.message));
{% endhighlight %}

Les explico, en las lineas 7 y 8 creamos dos **objetos instanciados de un stream**, uno para lectura y otro para escritura, los cuales abren y crean un archivo respectivamente, en la linea 12 mediante el **método pipe()** del objeto rs (readStream) creamos el nuevo archivo con el contenido del primero y por ultimo de la linea 15 a la 18 creamos los manejadores de eventos que serán lanzados desde que inicia la transferencia hasta que termina y otro por si surgiera un erro de ejecución.

> Lo que hace el método pipe() es adjuntar todos los datos que son legibles (en este caso el archivo que leemos) y cambia automáticamente a modo flujo y empuja todos los datos hacia el destino de escritura (el stream writable), este flujo de escritura se gestiona de forma automática para que no lo rebase el flujo de lectura.

### Modulo events

Gran parte de **la API principal de Node.js** se construye alrededor de una **arquitectura asíncrona basada en eventos** en la que ciertos tipos de objetos (llamados "emitters") emiten periódicamente eventos con nombre que hacen que se llamen los objetos de Función ("callback").

Por ejemplo, en el ejemplo anterior utilizamos tres eventos para controlar los streams.-

- data.- Lanza su función callback mientras se estén transmitiendo datos.
- end.- Lanza su función callback cuando termine de transmitir datos.
- err.- Este es un evento que no debe faltar nunca, ya que por medio de el podremos controlar los errores que surjan en tiempo de ejecución.

Mencionábamos que todos **los objetos que emiten eventos son instancias de la clase [EventEmitter](https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_class_eventemitter)**. Por lo tanto estos objetos contienen un método eventEmitter.on() que permite asociar una o más funciones (callbacks) a eventos con nombre emitidos por el objeto. 

Cabe destacar que cuando el **objeto EventEmitter** emite un evento, todas las funciones asociadas a ese evento (callbacks) específico **se llaman de forma síncrona**. Además los valores que son devueltos por estas callbacks se ignoran y se descartarán (tengan mucho cuidado en este punto).

En el ejemplo siguiente (tomado de la documentación oficial de NodeJS) se muestra una **instancia de un EventEmitter simple**. El método eventEmitter.on() se utiliza para registrar a los oyentes, mientras que el método eventEmitter.emit() se utiliza para activar el evento.

{% highlight javascript linenos %}
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// Creamos un EventEmitter simple
const myEmitter = new MyEmitter();

// Registramos el evento
myEmitter.on('event', () => console.log('an event occurred!'));

// Lo llamamos
myEmitter.emit('event');
{% endhighlight %}

### Modulo HTTP

Este modulo es muy particular, es el que nos permitirá crear nuestro primer servidor web funcional, por ello dedicaremos el siguiente articulo completo para explicar su funcionamiento con gran detalle.

## Conclusiones

Con esto terminamos de plantar las bases para empezar a programar nuestros servidores con NodeJS, te recomiendo aprenderte estos conceptos ya que los necesitaremos en todo momento.

Que tengan feliz código!.