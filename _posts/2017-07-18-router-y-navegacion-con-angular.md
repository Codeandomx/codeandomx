---
title: Router y navegación con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascipt
---

![Router Angular](/img/angular2.jpg)

Uno de los temas que más intereso con la llegada de **Angular** es el router, ya que en AngularJS se necesitaban dependencias de terceros para poder **proveer a nuestra aplicación de un router robusto y potente** pero sobre todo funcional, ya que el router que tenia por defecto AngularJS no era suficiente para nuestros objetivos, afortunadamente el Core de Angular cuenta con un nuevo sistema de ruteo con el cual aprenderemos a trabajar en este articulo.

> Recuerda que para referirnos a la nueva versión de Angular 2+ (Angular 4.X.X) solo decimos Angular, mientras que para la versión 1.X.X lo hacemos como AngularJS.

## Crear aplicación con router

En un articulo anterior aprendimos a [crear una aplicación con Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), pero no se creaba con un sistema de router independiente (aunque si lo podemos utilizar ya que se importan las dependencias necesarias), para crear nuestra **aplicación con un router independiente** utilizamos el flag "--routing" de la siguiente forma.-

{% highlight javascript linenos %}
$ ng new app_name --routing true
{% endhighlight %}

La única diferencia es que en el root de la aplicación se nos crea un nuevo archivo con el nombre "app-routing.module.ts", este archivo nos va servir para gestionar las rutas de su modulo asociado, veamos el contenido del archivo.-

{% highlight javascript linenos %}
mport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
{% endhighlight %}

En este caso el router esta asociado al modulo principal de la aplicación ("app.module.ts"), por consiguiente **este router solo deberá gestionar las rutas para este modulo**.

> Como buena practica se recomienda que cada ruta principal que exista en nuestro proyecto debe pertenecer (ser gestionada) a su propio modulo y su propio router, entiéndase como ruta principal, alguna sección de nuestro sitio.

Ahora observemos el código del modulo principal.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
{% endhighlight %}

El código del modulo principal es el mismo que si lo hubiéramos creado sin el router, la única diferencia es que se agrego la linea 6, donde importamos el router principal de la aplicación.

## Configurando la ruta principal

Comentaba la **buena practica** de que cada ruta principal de nuestra aplicación debe tener su propio modulo y router, y para la ruta principal no es la excepción, así que vamos a necesitar crear un nuevo modulo con router y un componente para esta ruta, así que procedemos a crear el modulo y router.-

{% highlight javascript linenos %}
$ ng generate module modules/inicio --routing true
{% endhighlight %}

Y creamos el componente también.-

{% highlight javascript linenos %}
$ ng generate component components/inicio --module modules/inicio/inicio-routing
{% endhighlight %}

Una ves terminado de crearse, tendremos una estructura de archivo en nuestro proyecto como la siguiente.-

[Estructura proyecto Angular](/img/estructura_router.jpg)

En resumen se creo un directorio "modules" donde vamos a crear todos los módulos para nuestro proyecto y también se creo el directorio "components" donde vamos a crear todos los componentes de nuestro proyecto, y dentro de estos directorios ya tenemos el modulo y componente que necesitamos (llamado "inicio").

> Al crear el componente "inicio" se utilizo el flag "--module" y seguido de este utilizamos la ruta donde se creo el router del modulo "inicio", el fin de utilizarlo de esta forma, es que al crear el componente automáticamente se importara al modulo indicado, ya que lo necesitaremos mas adelante.

En el archivo "inicio-routing.module.ts" vamos a **configurar la ruta principal** y quedaria de la siguiente forma.-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../components/inicio/inicio.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
];

export const routeablesComponents = [
    MainComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // Modulo funcional
    exports: [RouterModule] // Listo para exportar
})

export class InicioRoutingModule { }
{% endhighlight %}

En la constante "routes" configuramos la ruta principal del proyecto mediante la propiedad "path", mientras que con la propiedad "component" le indicamos que componente debe mostrar al ingresar a esa ruta.

> Para **configurar las rutas en Angular** no es necesario utilizar "/" al inicio.

Por otra parte creamos una constante a la que llamamos routeablesComponents en la que vamos a colocar todos los componentes que utilizamos, esta constante la vamos a exportar para poder tener acceso a esta desde nuestro modulo "inicio", de esta forma tendremos acceso a los componentes desde el modulo sin necesidad de volverlos a importar.

Ahora veamos como quedara nuestro "inicio.module.ts".-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule, enruteableComponents } from './inicio-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        enruteableComponents
    ]
})

export class AdminModule { }
{% endhighlight %}

Veamos que en la linea 4 importamos desde el modulo "inicio-routing.module.ts" el router y la constante "enruteableComponents" la cual en la linea 12 declaramos en nuestro modulo "Inicio", bien, aun no terminamos de configurar la nueva ruta nos falta un par de pasos, ahora modifiquemos el modulo principal de esta forma.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { InicioModule } from './modules/inicio/inicio.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
				InicioModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
{% endhighlight %}

Lo único que hacemos es importar el modulo "inicio" y agregarlo en la propiedad "imports", ahora ya solo nos queda indicarle a la aplicación en donde debe mostrar el template de la ruta principal cuando sea solicitada.

## Navegación de la aplicación

Para terminar de configurar nuestro router vamos a modificar el template del componente principal (app.component.ts) de la siguiente forma.-

{% highlight html linenos %}
<nav>
    <ul>
        <li><a [routerLink]="['/']">Inicio</a></li>
        <li><a [routerLink]="['/cursos']">Contacto</a></li>
    </ul>
</nav>

<router-outlet></router-outlet>
{% endhighlight %}

Notemos un par de cosas en el código anterior, la más importante es el elemento HTML que encontramos en la linea 8, se trata de la parte donde **nuestro router mostrara los componentes solicitados** según la ruta en la que entremos.

> Como buena practica debemos de utilizar el "router-outlet" acompañado del menú de navegación de la aplicación, de esta forma podremos evitar futuros problemas al intentar cargar nuevos componentes.

Por ultimo vemos que tenemos un menú de navegación con dos enlaces, note que en el elemento "a" no se utiliza el atributo "href", en su lugar utilizamos "routerLink" para cumplir con la función de enlace, si no lo hacemos de esta forma, nuestro router no detectara que se esta solicitando una ruta de la aplicación.

## Y que pasa con el router principal?

Hasta el momento ya tenemos armado nuestro router, pero no le dimos ninguna funcionalidad a nuestro router principal, esto lo hacemos con un fin, tener mejor control al separar nuestra aplicación en partes, esto mejorar el tiempo de mantenimiento de la misma.

La funcionalidad que le podemos dar a este router es configurar el componente que se mostrara cuando el usuario ingrese a una ruta no registrada (el típico error 404  pagina no encontrada), entonces podemos crear este componente.-

{% highlight html linenos %}
$ ng generate componente components/pageNotFound --module app-routing.component
{% endhighlight %}

Una ves creado podemos agregar el componente al router principal.-

{% highlight javascript linenos %}
mport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } import './componentes/pageNotFound/pageNotFound.component';

const routes: Routes = [
    {
        path: '**', component: PageNotFountComponent
    }
];

export const enruteableComponent = [
    PageNotFoundComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
{% endhighlight %}

En la linea 8 configuramos la ruta, en este caso mediante los dos asteriscos le indicamos que si entra en cualquier ruta no registrada nos muestre el componente "PageNotFoundComponent" y en la linea 12-14 exportamos el componente, ya solo agregamos la constante "enruteableComponents" al modulo principal.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, enrouteableComponents } from './app-routing.module';
import { InicioModule } from './modules/inicio/inicio.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
				InicioModule,
        enrouteableComponents
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
{% endhighlight %}

Lo único que hicimos fue importar la constante en la linea 6 y agregarla en la propiedad "imports" del modulo (linea 21), con esto terminamos de **configurar nuestro router**.

## Crear rutas hijas (subrutas)

El router que creamos hasta el momento no es nada más que un router muy simple, pero si queremos agregarle complejidad lo ideal es que nuestras rutas padres tuvieran rutas hijas y estas a su ves **trabajaran con parámetros**, veamos como hacerlo.

Un ejemplo ideal para el trabajo con rutas hijas es un sistema de administración donde "admin" es la ruta principal y por ejemplo "nuevo", "mostrar", "editar" sean rutas hijas, entonces, para asignar rutas hijas a una ruta padre utilizamos la propiedad "children".-

{% highlight javascript linenos %}
mport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } import './componentes/admin/admin.component';
import { AdminNuevoComponent } import './componentes/admin-nuevo/admin-nuevo.component';
import { AdminMostrarComponent } import './componentes/admin-mostrar/admin-mostrar.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'nuevo', component: AdminNuevoComponent },
            { path: 'modificar', component: AdminNuevoComponent },
            { path: 'mostrar', component: AdminMostrarComponent }
        ]
    }
];

export const enruteableComponent = [
    AdminComponent,
    AdminNuevoComponent
    AdminMostrarComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
{% endhighlight %}

Lo único que hicimos es agregar las rutas hijas en la ruta padre mediante la propiedad "children" como se muestra en las lineas 10 a 14, recuerda también añadir los componentes utilizado en el router en la constante "enrouteableComponents" para que puedas añadirla al modulo del router.

> Para la ruta nuevo y modificar utilizamos el mismo componente, lo hicimos con el fin de mediante un parámetro poder decidir la funcionalidad del componente.

Lo importante de trabajar con rutas hijas es que al momento de ser cargadas (solicitadas) sus respectivos componentes se mostraran en el template del componente padre y no del componente principal, así que vamos a necesitar configurar dicho template ("admin.component.html").-

{% highlight html linenos %}
<div>
    <ul>
        <li><a [routerLink]="['/nuevo']">Inicio</a></li>
        <li><a [routerLink]="['/modifiar']">Modificar</a></li>
        <li><a [routerLink]="['/mostrar']">Mostrar</a></li>				
    </ul>
</div>

<router-outlet></router-outlet>
{% endhighlight %}

## Trabajar con parámetros en las rutas

La subruta para modificar carga el mismo componente que si entráramos a la ruta nuevo, para decidir que tiene que hacer el componente utilizaremos parámetros, para hacerlo debemos de configurarlo dentro de la propiedad "path" seguido de dos puntos (:).-

{% highlight javascript linenos %}
mport { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } import './componentes/admin/admin.component';
import { AdminNuevoComponent } import './componentes/admin-nuevo/admin-nuevo.component';
import { AdminMostrarComponent } import './componentes/admin-mostrar/admin-mostrar.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'nuevo', component: AdminNuevoComponent },
            { path: 'modificar/:id', component: AdminNuevoComponent },
            { path: 'mostrar', component: AdminMostrarComponent }
        ]
    }
];

export const enruteableComponent = [
    AdminComponent,
    AdminNuevoComponent
    AdminMostrarComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
{% endhighlight %}

En la linea 12 configuramos nuestro parámetro con el identificador "id", ahora para poder ingresar a una ruta con parámetros desde la navegación lo hacemos de la siguiente forma.-

{% highlight html linenos %}
<div>
    <ul>
        <li><a [routerLink]="['/nuevo']">Inicio</a></li>
        <li><a [routerLink]="['/modifiar', 132143]">Modificar</a></li>
        <li><a [routerLink]="['/mostrar']">Mostrar</a></li>				
    </ul>
</div>

<router-outlet></router-outlet>
{% endhighlight %}

El valor del parámetro lo pasamos como segundo valor de la ruta, por ultimo para poder acceder al valor del para metro desde el componente lo hacemos de la siguiente forma.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/route';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

    constructor( private router : ActivatedRoute ) { }

    ngOnInit() {
        this.router.params.suscribe( params => {
            const id = params['id'].toString();
        });
    }
}
{% endhighlight %}

Para poder acceder al valor de un parámetro lo tenemos que hacer con ayuda del servicio ActivatedRoute el cual importamos en la linea 3, para utilizar este servicio debemos de guardarlo en una variable privada, esto lo hacemos como parámetro del constructor de la clase del componente (linea 13) y por ultimo para acceder al valor lo hacemos desde un observable dentro del método "ngOnInit" (lineas 15 a 19).

## Conclusiones

Construir un router funcional en Angular es muy sencillo, lo tedioso es fragmentar nuestro código para facilitar el mantenimiento de la aplicación, si crees que al articulo le falto abarcar algún tema de importancia, dejalo en el área de comentarios y con gusto analizare agregarlo.

Que tengan feliz código.