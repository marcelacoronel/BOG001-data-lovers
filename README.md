# Data Lovers

## Índice

* [1. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)


***

## 1. Resumen del proyecto

El presente proyecto presenta un sitio web que se creó con el fin de brindar información relevante a los usuarios y amantes de Pokémon Go, en el pueden tener acceso a característica detalladas de cada Pókemon, ya sea que haya sido recien capturado o desee capturarlo para agregarlo a su equipo. Además, puede conocer detalles de las evolución de cada Pókemon identificando la cantidad de Candies para cada una. Y finalmente este sitio web dedica una espacio especial para usuarios más experimentados llamado "Combate" o si está iniciando también le permite conocer como enfrentar a otros Pokémon teniendo en cuenta las fortalezas y debilidades entre los Pokémon enfrentados en cambate.


* Visualizacion del proyecto:

**Vista principal del sitio.**

![](src/img/vistaPpal_mobile.png)

![](src/img/vistaPpal_desktop.png)

**Vista Historia de usuario 1.**

![](src/img/vistaConoceP_mobile.png)

![](src/img/vistaConoceP_desktop.png)

**Vista 1 Historia de usuario 2.**

![](src/img/vistaEvoluciones1_mobile.png)

![](src/img/vistaEvoluciones1_desktop.png)

**Vista 2 Historia de usuario 2 y 3.**

![](src/img/vistaEvoluciones2_mobile.png)

![](src/img/vistaEvoluciones2_desktop.png)

**Vista 1 Historia de usuario 4.**

![](src/img/vistaCombate1_mobile.png)

![](src/img/vistaCombate1_desktop.png)

**Vista 2 Historia de usuario 4.**

![](src/img/vistaCombate2_mobile.png)

![](src/img/vistaCombate2_desktop_ganador.png)

![](src/img/vistaCombate2_desktop.png)


Datos que se utilizaron para desarrollar el proyecto:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego.
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)


## 3. Objetivos de aprendizaje

Los principales objetivos de aprendizaje alcanzados en este proyecto son:

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 4 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

El presente sitio web sobre Pokémon Go, brinda a los usuarios tres importantes espacios con información relevante sobre sus Pokémon.  A través del recorrido por nuestro sitio puede resolver muchas de sus inquietudes, puede conocer información detallada sobre su Pokémon recien capturado como nombre,número, tipos, altura, peso, debilidades e imagen, y esto lo obtiene realizando una busqueda por su número o por su nombre (Ej: 25 o Pikachu) en el espacio "Conoce tu Pokémon".

Nuestro usuarios también pueden tener acceso a todos los Pokémon quienes se muestran detallados por número, imagen y nombre, y donde puede seleccionar el deseado para poder obtener la información específica de las evoluciones(actual, previa y siguiente) de ese Pokémon, y candies requeridos para alcanzar cada una, para esto visita nuestro link "Evoluciones".
 
Finalmente nuestros usuarios más experimentados podrán disfrutar de un espacio llamado "Combate", que es un lugar de diversión donde el sistema creado en nuestro sitio genera un ambiente de combate donde se muestra en pantalla un Pokémon (Nombre e imagen) seleccionado por el sistema de manera aleatoria llamado "Rival"  y el usuario puede seleccionar su Pokémon para combartir digitando el número o nombre del Pókemon que desea usar en el combate, nuestro sistema muestra también en pantalla la imagen y nombre del Pokémon del usuario y realiza una comparación entre las fortalezas y debilidadades de cada Pokémon y da como resultado un ganador y un perdedor o un empate.

### Historias de usuario
Una vez realizada la investigación de usuarios se identificaron las siguientes Historias de Usuario:

- H1:Conoce tu Pokémon. Yo como Entrenador. Quiero ver las características de un pokémon. Para conocer en detalle al pokémon recién capturado.
- H2:Evoluciones. Yo COMO Entrenador, QUIERO ver cuántas y cuáles evoluciones tiene un pokémon. PARA Conocer mejoras de habilidades de un pokémon.
- H3: Mejorar Pokémon. Yo COMO Maestro pokémon. QUIERO Cono cer cantidad de caramelos que necesita un pokémon para evolucionar.PARA hacer a un pokémon más poderoso.
- H4: Combate. Yo COMO Maestro pokémon. QUIERO Conocer las debilidades y tipos de un pokémon. PARA seleccionar el pokémon adecuado para una batalla.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
Las siguientes imágenes describen los Sketches iniciales diseñados para el proyecto, Mobile, tablet, desktop.

**Vista principal del sitio.** , **Vista 1 Historia de usuario 1.** y **Vista 2 Historia de usuario 1.**

![](src/img/sketch1_H1.jpg)

![](src/img/sketch2_H1.jpg)

**Vista 1 y 2 Historia de usuario 2 y 3.**

![](src/img/sketch1_H2.jpg)

![](src/img/sketch2_H2.jpg)

![](src/img/sketch1_H2_mobile.jpg)

![](src/img/sketch2_H2yH3_mobile.jpg)

**Historia de usuario 4.**
![](src/img/sketch1_H4.jpg)

![](src/img/sketch2_H4.jpg)

Estas imágenes corresponden a las mejoras realizadas en los sketches de acuerdo a los test de usabilidad.

![](src/img/sketch_H4.jpg)

![](src/img/cambio_menu.jpg)

![](src/img/sketch_H1_mobile.jpg)


#### Prototipo de alta fidelidad
Las siguientes imágenes corresponden al prototipo de alta fidelidad realizado en figma, y corresponde al prototipo final para móbile, tablet y desktop.

**Historia de usuario 1.**

![](src/img/prot_VistaPpal_mobile.png)

![](src/img/prot_vista_H1_mobile.png)

**Historia de usuario 2 y 3.**

![](src/img/prot_vista1_H2yH3_mobile.png)

![](src/img/prot_vista2_H2yH3_mobile.png)

**Historia de usuario 4.**

![](src/img/prot_vista1_H4_mobile.png)

![](src/img/prot_vista2_H4_mobile.png)

Una vez realizado el prototipo inicial de alta fidelidad en figma, se realizaron mejoras en el mismo siguiendo las indicaciones recibidas en el feedback durante lo test de usabilidad. Las siguientes imágenes muestran el proceso de estas mejoras.

![](src/img/inicial_Ppal.png)
![](src/img/inicial_H1.png)
![](src/img/vistaPpal_desktop_2.png)
![](src/img/vistaH1_desktop.png)
![](src/img/cambio_colores.png)
![](src/img/cambio_colores2.png)
![](src/img/cambio_color.png)
![](src/img/fondo_mobile.png)
![](src/img/vistaPpal_tablet.png)
![](src/img/H1_tablet.png)
![](src/img/vista2_H2_H3_tablet.png)
![](src/img/vista1_H4_tablet.png)
![](src/img/vista2_H4_tablet.png)
![](src/img/vista1_H2_desktop.png)
![](src/img/vista2_H2_H3_desktop.png)
![](src/img/vista1_H4.png)
![](src/img/vista2_H4.png)



- **Link a figma:** https://www.figma.com/file/ZOH8ZIJEK2S9eFIdhMG2AN/Data-Lovers?node-id=0%3A1

#### Testeos de usabilidad

El feedback recibido durante los test de usabilidad nos permitió detallar las necesidades de los usuarios en el momento de navegar por nuestro sitio web, así como también pudimos identificar que algunos colores utilizados en el sitio se prestaban para crear confusión en el usuario, por ejemplo que al usar el color rojo como fondo de un elemento le hacía pensar al usuario que había un error ya que este color es asociado a fallas en otras cosas. Algunos de los hayazgos identificados durante los test de usabilidad y las propuestas de mejora fueron:

- El Menú en el sketch inicial es muy pequeño y poco claro (tipo menú hamburguesa), parece más un espacio informativo o complemetario y no un espacio importante de navegación del sitio (El sketch inicial fue creado pensando en diseño desktop). Se propueso en crear un menú horizontal con tamaño de texto adecuado para un sitio pensado en desktop.
- Color de fondo utilizado en el espacio central y principal de información del sitio no se veía acorde a la paleta de colores. Se realizaron varios cambios antes de escoger el color final, utilizando herramientas para selección de paleta de colores y contraste.
- El color de texto amarillo seleccionado inicialmente para mostrar información importante el nuestro sitio web no es el adecuado si se tienen en cuenta las características de contraste con el fondo, ya que no es fácil de leer para el usuario, para esto se realizó estudio de los principios de diseño visual y se encontró que el color amarillo es uno de los colores no recomendado y se utilizó la herramienta *https://contrast-ratio.com/#* para seleccionar los colores adecuados.
- El color de fondo en el footer del sitio se muestra en color no apropiado y genera confusión en el usuario. Se seleccionó el tono de acuerdo a la paleta de colores que se escogió luego de las investigaciones de diseño visual.
- La información presentada en algunas vistas de la página se muestra poco organizada, se realizó estudio y aplicación de Flexbox para mejorarlo.
- En general se realizó ajustes de tamaño de texto o texto resaltado (negrita) en algunas vistas para que fuese más claro y legible para el usuario.

**Link trello:** https://trello.com/b/4RcKsovH/data-lovers


