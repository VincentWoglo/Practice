const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

function Sass(){
    return gulp.src('./Assets/Scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./Assets/Css'))
}

function WatchTask(){
    watch('./Assets/Scss/**/*.scss',
    series(Sass))
}

exports.default = series(
        parallel(Sass),
        WatchTask
    )