/**
 * Created by yangbo on 2016/12/27.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var port = process.env.port || 5000;

gulp.task('browserify', function () {
    gulp.src('./app/js/main.js')
        .pipe(browserify({
            transform : 'reactify'
        }))
        .pipe(gulp.dest('./dist/js')).pipe(livereload());
});

gulp.task('connect', function () {
    connect.server({
        root : './',
        port : port,
        livereload : true
    })
});

gulp.task('js', function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload())

});

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload())

});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/js/**/*.js', ['browserify']);


});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch'])
