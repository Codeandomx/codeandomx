---
title: Router y navegación con Angular
author: Paulo Andrade
categories: angular2
tags: angular javascipt
---

![Router Angular](/img/angular2.jpg)

Uno de los temas que más intereso con la llegada de **Angular** es el router, ya que en AngularJS se necesitaban dependencias de terceros para poder **proveer a nuestra aplicación de un router robusto y potente**, pero sobre todo funcional, ya que el router que trae por defecto AngularJS no era suficiente para nuestros objetivos, afortunadamente Angular cuenta con un nuevo sistema de ruteo con el cual aprenderemos a trabajar en este articulo.

> Recuerda que para referirnos a la nueva versión de Angular 2+ (Angular 5.X.X) solo decimos Angular, mientras que para la versión 1.X.X lo hacemos como AngularJS.

Puedes acceder al [curso gratuito de Angular](github.com/codeandomx/curso-de-introduccion-a-angular) para aprender más sobre este framework, también, puedes acceder a nuestro [repositorio de Github](https://github.com/Codeandomx/development-angular-app-router) para obtener el código directamente.

## Crear aplicación con router

En un articulo anterior aprendimos a [crear una aplicación con Angular CLI](/articulos/mi-primera-app-con-angular-y-angular-cli.html), pero no se creaba con un sistema de router independiente (aunque si lo podemos utilizar ya que se importan las dependencias necesarias), para crear nuestra **aplicación con un router independiente** utilizamos el flag "--routing" de la siguiente forma.-

{% highlight javascript linenos %}
$ ng new app_name --routing true
{% endhighlight %}

<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-0593566584451788"
     data-ad-slot="1426664336"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

La única diferencia es que se crea un nuevo archivo con el nombre "app-routing.module.ts", este archivo nos va servir para gestionar las rutas del modulo asociado, veamos el contenido del archivo.-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
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

Cada ruta principal de nuestra aplicación debe tener su propio modulo y router, y para la ruta "/" no es la excepción, así que vamos a necesitar crear un nuevo modulo con router y un componente para esta ruta a la que llamaremos inicio, creamos primero el modulo.-

{% highlight javascript linenos %}
$ ng generate module modules/inicio --routing true
{% endhighlight %}

Ahora creamos el componente también.-

{% highlight javascript linenos %}
$ ng generate component components/inicio --module modules/inicio/inicio-routing.module
{% endhighlight %}

Una ves terminado el proceso, tendremos una estructura de archivos en nuestro proyecto como la siguiente.-

![Estructura proyecto Angular](/img/estructura_router.jpg)

En resumen se creo un directorio "modules" donde vamos a crear todos los módulos para nuestro proyecto y también se creo el directorio "components" donde vamos a crear todos los componentes para nuestro proyecto, y dentro de estos directorios ya tenemos el modulo y componente que necesitamos (llamado "inicio").

> Al crear el componente "inicio" se utilizo el flag "--module" y seguido de este utilizamos la ruta donde se creo el router del modulo "inicio", el fin de utilizarlo de esta forma, es que al crear el componente automáticamente se importara al modulo indicado, de esta forma, nos evitamos hacerlo manualmente.

En el archivo "inicio-routing.module.ts" vamos a **configurar la ruta principal** y quedará de la siguiente forma.-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../../components/inicio/inicio.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // Modulo funcional
    exports: [RouterModule] // Listo para exportar
    declarations: [InicioComponent]
})

export class InicioRoutingModule { }
{% endhighlight %}

Les explico, en la constante "routes" configuramos la ruta principal del proyecto mediante la propiedad "path", mientras que con la propiedad "component" le indicamos que componente debe mostrar al ingresar a esa ruta.

> Para **configurar las rutas en Angular** no es necesario utilizar "/" al inicio de la misma.

Por otra parte para tener acceso a los componentes desde el modulo sin necesidad de volverlos a importar los agregamos a la propiedad "declarations".

Ahora veamos como quedará nuestro "inicio.module.ts".-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule
    ]
})

export class AdminModule { }
{% endhighlight %}

Veamos que en la linea 4 importamos desde el modulo "inicio-routing.module.ts" el router la cual en la linea 8 la declaramos en la propiedad "imports" para tener acceso al router, bien, aun no terminamos de configurar la nueva ruta nos falta un par de pasos, ahora modifiquemos el modulo principal "app.module.ts" de esta forma.-

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

Para terminar de configurar nuestro router vamos a modificar el template del componente principal (app.component.html) de la siguiente forma.-

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

Hasta el momento ya tenemos funcionando nuestro router para el modulo inicio, pero aun no le damos ninguna funcionalidad a nuestro router principal "app-routing.module.ts", esto lo hacemos con un fin, tener mejor control al separar nuestra aplicación en partes, esto mejora el tiempo de mantenimiento de la misma.

La funcionalidad que le podemos dar a este router es configurar el componente que se mostrara cuando el usuario ingrese a una ruta no registrada (el típico error 404  pagina no encontrada), entonces vamos crear este componente.-

{% highlight html linenos %}
$ ng generate component components/pageNotFound --module app-routing.module
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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [PageNotFoundComponent]
})

export class AppRoutingModule { }
{% endhighlight %}

En la linea 8 configuramos la ruta, en este caso mediante los dos asteriscos le indicamos que si entra en cualquier ruta no registrada nos muestre el componente "PageNotFoundComponent" y en la linea 15 agregamos el componente a la propiedad "declaratios" para poderlo utilizar.

Ahora nos aseguramos que el "AppRoutingModule" en el componente principal este importado al final de todos los modulos, como se muestra a continuación.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './modules/inicio/inicio.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InicioModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}

## Crear rutas hijas (subrutas)

El router que creamos hasta el momento no es nada más que un router muy simple, pero si queremos agregarle complejidad lo ideal es que nuestras rutas padres tuvieran rutas hijas y estas a su ves **trabajaran con parámetros**, veamos como hacerlo.

Un ejemplo ideal para el trabajo con rutas hijas, es un sistema de administración donde "admin" es la ruta principal y por ejemplo "nuevo", "mostrar", "editar" sean rutas hijas, entonces, para asignar rutas hijas a una ruta padre utilizamos la propiedad "children".

Creamos un modulo nuevo para el sistema de administración con su propio sistema de router.-

{% highlight javascript linenos %}
ng generate module modules/admin --routing true
{% endhighlight %}

Ahora vamos a crear cuatro componentes nuevos para obtener nuestro pequeño sistema de administración (cada linea genera un componente).-

{% highlight javascript linenos %}
ng generate component components/admin --module modules/admin/admin-routing.module
ng generate component components/adminNew --module modules/admin/admin-routing.module
ng generate component components/adminEdit --module modules/admin/admin-routing.module
ng generate component components/adminView --module modules/admin/admin-routing.module
{% endhighlight %}

Al crearlos los incluimos al router del modulo "admin", así que pasamos a configurar las rutas para estos componentes, abrimo el archivo "admin-routing.module.ts".-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } import './componentes/admin/admin.component';
import { AdminNewComponent } import './componentes/admin-new/admin-new.component';
import { AdminEditComponent } import './componentes/admin-edit/admin-edit.component';
import { AdminViewComponent } import './componentes/admin-view/admin-view.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'new', component: AdminNewComponent },
            { path: 'edit', component: AdminEditComponent },
            { path: 'view', component: AdminViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
        AdminNewComponent,
        AdminEditComponent,
        AdminViewComponent,
        AdminComponent
    ]
})

export class AdminRoutingModule { }
{% endhighlight %}

Lo único que hicimos es agregar las rutas hijas en la ruta padre mediante la propiedad "children" como se muestra en las lineas 10 a 14, por ultimo vamos a añadir el modulo "admin" al modulo principal de la aplicación.-

{% highlight javascript linenos %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './modules/inicio/inicio.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InicioModule,
        AdminModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
{% endhighlight %}

Lo importante de trabajar con rutas hijas es que al momento de ser cargadas (solicitadas) sus respectivos componentes se mostraran en el template del componente padre y no en el del componente principal, así que vamos a necesitar configurar dicho template ("admin.component.html").-

{% highlight html linenos %}
<div>
    <ul>
        <li><a [routerLink]="['/admin/new']">Inicio</a></li>
        <li><a [routerLink]="['/admin/edit']">Modificar</a></li>
        <li><a [routerLink]="['/admin/view']">Mostrar</a></li>				
    </ul>
</div>

<router-outlet></router-outlet>
{% endhighlight %}

Ahora ya puede correr la aplicación y probar el funcionamiento del router.

## Trabajar con parámetros en las rutas

Vamos a utilizar el componente "admin-edit" para trabajar con parametros, abrimos el router "admin-routing.module.ts" y debemos de configurarlo dentro de la propiedad "path" seguido de dos puntos (:).-

{% highlight javascript linenos %}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } import './componentes/admin/admin.component';
import { AdminNewComponent } import './componentes/admin-new/admin-new.component';
import { AdminEditComponent } import './componentes/admin-edit/admin-edit.component';
import { AdminViewComponent } import './componentes/admin-view/admin-view.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            { path: 'new', component: AdminNewComponent },
            { path: 'edit/:id', component: AdminEditComponent },
            { path: 'view', component: AdminViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
        AdminNewComponent,
        AdminEditComponent,
        AdminViewComponent,
        AdminComponent
    ]
})

export class AdminRoutingModule { }
{% endhighlight %}

En la linea 13 configuramos nuestro parámetro con el identificador "id", ahora para poder ingresar a una ruta con parámetros desde la navegación lo hacemos de la siguiente forma.-

{% highlight html linenos %}
<div>
    <ul>
        <li><a [routerLink]="['/admin/new']">Inicio</a></li>
        <li><a [routerLink]="['/admin/edit', 132143]">Modificar</a></li>
        <li><a [routerLink]="['/admin/view']">Mostrar</a></li>				
    </ul>
</div>

<router-outlet></router-outlet>
{% endhighlight %}

El valor del parámetro lo pasamos como segundo valor de la ruta, por ultimo para poder acceder al valor del parámetro desde el componente lo hacemos de la siguiente forma.-

{% highlight javascript linenos %}
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
    id: number;

    constructor( private router : ActivatedRoute ) { }

    ngOnInit() {
        this.router.params.subscribe( params => {
            this.id = params['id'].toString();
        });
    }
}
{% endhighlight %}

Para poder acceder al valor de un parámetro lo tenemos que hacer con ayuda del servicio ActivatedRoute el cual importamos en la linea 3, para utilizar este servicio debemos de guardarlo en una variable privada, esto lo hacemos como parámetro del constructor de la clase del componente (linea 13) y por ultimo para acceder al valor lo hacemos desde un observable dentro del método "ngOnInit" (lineas 15 a 19).

Ahora solo queda codificar un poco la plantilla de este componente para mostrar el parámetro en pantalla.-

{% highlight html linenos %}
<p>
    Parametro = { { id } }
</p>
{% endhighlight %}

## Conclusiones

Construir un router funcional en Angular es muy sencillo, lo tedioso es fragmentar nuestro código para facilitar el mantenimiento de la aplicación, si crees que al articulo le falto abarcar algún tema de importancia, dejalo en el área de comentarios y con gusto analizare agregarlo.

Puedes encontrar el código de ejemplo de este articulo en.-

* [Github Codeando](https://github.com/Codeandomx/development-angular-app-router)

Si te interesa el tema puedes continuar con los siguientes enlaces.-

* Curso: [Curso de Angular](https://github.com/Codeandomx/curso-de-introduccion-a-angular)

Que tengan feliz código.