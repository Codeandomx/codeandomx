---
title: Un vistazo a Angular
author: Paulo Andrade
categories:
- angular2
tags: angular javascript
---

![Angular 2](/img/angular2.jpg)

**Angular** es el resultado de la evolución de **AngularJS** (mejor conocido como AngularJS 1.x), si eres un desarrollador que viene de la versión anterior no te costara mucho trabajo adaptarte a la nueva si eres constante en el uso de las nuevas tecnologías que conlleva este framework (sobre todo si trabajaste desde la versión 1.5+ donde se incluyen los web components).

> A partir de Angular 2, los desarrolladores han decidido liberar una versión estable cada 6 meses, con cambios minimos, así que no te asustes si de pronto escuchar hablar de Angular 4, Angular 5, etc.

<div class="redes-background">
Este articulo forma parte del <a href="https://github.com/Codeandomx/curso-de-introduccion-a-angular" target="_blank">Curso de Angular</a>.
</div>

## Cambios destacados en Angular

### Programación con Javascript

Sin duda el cambio mas importante es el uso de las nuevas versiones de **Javascript**, me refiero a **[ECMAscript 6](/articulos/introduccion-a-es6-javascript.html)** y 7, donde se utilizan nuevas características del lenguaje como **programación orientada a objetos** entre otras cosas, esta actualización sin duda nos permite crear aplicaciones mas potentes y estables.

Pero hay un pequeño gran detalle, y es que Javascript no deja de ser un **lenguaje dinámico y con un tipado débil** (si es que se le puede considerar de esta forma), pero para solucionar esta deficiencia, los desarrolladores de Angular apoyan el uso de **Typescript** (framework Javascript desarrollado por Microsoft), el cual nos permitirá tener una construcción de la app con un  **lenguaje bastante estricto  y con un tipado fuerte**,  es decir tendremos mucho control sobre como se debe desarrollar con Angular sobretodo si en el proyecto trabajan dos o más desarrolladores.

El desarrollo con Typescript es opcional, ya que si lo deseas **puedes utilizar ES6 y ES7 directamente**, pero, te recomiendo que lo utilices por que la comunidad de angular (en su mayoría) mostrara ejemplos basados en Typescript y sera más facil incrementar tu curva de aprendizaje.

### Escalabilidad

Con AngularJS 1.x sin lugar a dudas el **data binding** se llevaba todo el el crédito, pero siempre y cuando las aplicaciones sean pequeñas y manejen poca información, ya que al momento de cargar grandes cantidades de información era un lio bastante gordo estar consultando el estado de todas las variables que estuvieran en el scope, con la llegada de Angular, **el scope desaparece y la solución lleva mediante los observables** (eventos asincronos basados en secuencias observables) con la librería [ReactiveX](https://reactivex.io), haciendo nuestras aplicaciones hasta 5 veces más rápidas y lo más importante, no sobrecargamos de forma inecesaria el navegador.

**Las directivas y componentes** en AngularJS 1.x ya empezaban a darnos una buena solución al problema de la encapsulación y modularización de nuestro código, ya que con Javascript no habria forma de hacerlo de manera nativa, pero con la llegada de **Angular los componentes toman la batuta** y por consecuencia desaparece el controlador, de esta forma tendremos más control y encapsulamiento de cada parte de nuestra app.

Ahora hablemos del **SEO**, ya que AngularJS 1.x al ser una SPA (Single Page Application) que se carga en su totalidad del lado cliente (a parte de que sobrecargaba el navegador con tanto proceso) necesitaba de ser prerenderizado antes de ser mostrado al usuario, haciendo la carga de la pagina menos eficiente, ahora con la llegada de **Angular Universal**, podremos cargar y renderizar la app desde el servidor y de esta forma al navegador solo llegara lo que se debe de mostrar, haciendo nuestra **app más rápida y eficiente** así como más amigable en cuanto al SEO.

## Conclusiones

Lo anterior desde mi punto de vista es lo más importante en cuanto al cambio de las versiones de Angular, lo que nos falta lo vamos aprender poco a poco con forme avancemos en el tema.

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Articulo siguiente: [Mi primera aplicación con Angular y Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html)
* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tenga feliz código!.