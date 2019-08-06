import gulp from "gulp"
import sass from "gulp-sass"
import pug from "gulp-pug"
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"

import postcss from "gulp-postcss"
import autoprefixer from "autoprefixer"
import zIndex from "postcss-zindex"
import pseudoelements from "postcss-pseudoelements"
import nthChild from "postcss-nth-child-fix"


import browserSync from 'browser-sync'
const server = browserSync.create()

const production = false

const sassOptionsDev = {
    includePaths:['node_modules'],
    sourceComments: true,
    outputStyle: 'expanded'
}

const sassOptionsProd = {
    includePaths:['node_modules'],
    outputStyle: 'compressed'
}

const postCssPlugins = [
    autoprefixer({
        browsers:['last 3 versions']
    }),
    zIndex(),
    pseudoelements(),
    nthChild()
]

//Tarea para convertir el sass a css y adicional agrega los prefix para los navegadores.
gulp.task('stylesDev', ()=>{
    return gulp.src('./dev/scss/app.scss')
        .pipe(plumber())
        .pipe(sass(sassOptionsDev))
        .pipe(gulp.dest('./public/css'))
        .pipe(server.stream())
})

gulp.task('stylesProd', ()=>{
    return gulp.src('./dev/scss/app.scss')
        .pipe(plumber())
        .pipe(sass(sassOptionsProd))
        .pipe(postcss(postCssPlugins))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest('./public/css'))
        .pipe(server.stream())
});

//Tarea para pug - los pasa a html
gulp.task('pug', ()=>{
	return gulp.src('./dev/assets/*.pug')
    .pipe(plumber())
	.pipe(pug({
		pretty:true // Cambiar a "false" para minifizar código.
	}))
	.pipe(gulp.dest('./public/'))
})

//Tarea para compilar se6 para todos los navegadores, crea un solo script y ofusca el código.
gulp.task('babel', ()=>{
    return gulp.src('./dev/js/*.js')
    .pipe(plumber())
    .pipe(babel({
        presets:['env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
})

//Tarea para levantar un servidor
gulp.task('default', ()=>{
	server.init({
		server: './public'
	})

    production
        ? gulp.watch('./dev/scss/**', gulp.series('stylesProd'))
        : gulp.watch('./dev/scss/**', gulp.series('stylesDev'))

    gulp.watch('./dev/assets/*.pug', gulp.series('pug')).on('change', server.reload)
    gulp.watch('./dev/assets/**/*.pug', gulp.series('pug')).on('change', server.reload)
    gulp.watch('./dev/js/*.js', gulp.series('babel')).on('change', server.reload)
})










