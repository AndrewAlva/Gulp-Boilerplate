# Gulp-Boilerplate
Boilerplate hecho en Gulp para crear páginas estáticas desde 0 con preprocesadores como Pug, SCSS y Babel.

El beneficio principal de usar esta herramienta es escribir menos código con la ayuda de los preprocesadores, importando módulos reutilizables de código y levantar un servidor local mientras programas que recargue automáticamente el navegador y los archivos a la par que editas el código.

Otra de las ventajas de este desarrollo es su compatibilidad en configuración entre usuarios de Windows, Linux y Mac (otras herramientas como Brunch o Webpack presentan más problemas de configuración entre estos sistemas operativos).



## Ambiente de Desarrollo

* Instala (si no los tienes en tu computadora):
    * [Node.js](http://nodejs.org): `brew install node` en OS X (y si tienes Homebrew, si no o si trabajas en Windows / Linux; revisa directamente la documentación en Node)
    * [Gulp](https://gulpjs.com/): 
    	`npm install gulp-cli -g`
    	`npm install gulp -D`
    * Gulp plugins y dependencias: `npm install`

* Especificaciones:
    * La carpeta `public/` es generada por Gulp automáticamente.
    * Escribe tu código en la carpeta `dev/`.
    * Las imágenes y tipografías son tomadas de la carpeta `dev/assets/` y se exportan a `public/` en sus respectivos folders para ser usados: `public/img` y `public/fonts`. Los archivos que estén fuera de dichas carpetas serán ignorados.
    * El repositorio no reconoce cuando borras un archivo, así que al momento de exportar los archivos finales para producción, asegúrate de borrar la carpeta `public/` y volver a correr el comando de exportación para eliminar los archivos que no están siendo utilizados.
    * [Documentación básica y práctica](https://css-tricks.com/gulp-for-beginners/)


### Instalación de este repo

1. Clona este repositorio en tu entorno de desarrollo, simplemente puedes ejecutar en terminal:
```console
foo@bar:~$ git clone https://github.com/AndrewAlva/Gulp-Boilerplate.git
```

2. Cambia de ubicación al folder del proyecto, después, instala las dependencias necesarios por medio de npm:
```console
foo@bar:~$ cd Gulp-Boilerplate
foo@bar:~$ npm install
```

Y eso es todo, ahora puedes trabajar en este repositorio.

Como mencionamos al inicio, puedes usar esta herramienta para montar un servidor local y detectar cambios en el código para recargar el navegador y mostrar el progreso en tiempo real.

El comando para realizar esta tarea está configurado como el 'default' de gulp; por lo que sólo tienes que escribir lo siguiente en terminal:
```console
foo@bar:~$ gulp
```


### Obtener archivos finales de producción

Cuando termines el proyecto y quieras obtener los archivos finales de producción para subir al servidor, borra tu carpeta `public/`, edita la constante  `const production` de `false` a `true` en el archivo `gulpfile.babel.js` y corre el siguiente código en tu terminal:
```console
foo@bar:~$ gulp build
```

Esto crea los archivos minificados listos para subir al servidor.
