/**
 * Created by jaysen.lin@foxmail.com on 2017/4/6.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();

var reload =browserSync.reload();

gulp.task('webserver', function () {
    gulp.src('work')
        .pipe(webserver({
            livereload: true,//文件若有修改，则实时在浏览器上刷新
            directoryListing: false,
            open: true,
            host: 'localhost',
            port: 9005,
            path: '/'
        }));
});


gulp.task('browserSync', function () {
    browserSync.init({
        // proxy:'localhost',
        server:{
            baseDir: "./work"
        },
        port:9006,
        open:'local',
        https:true
    });

    gulp.watch(['./work/**'],reload)
});

gulp.task('default', ['webserver']);

gulp.task('bs', ['browserSync']);