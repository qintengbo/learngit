var gulp = require('gulp');
//压缩js
var uglify = require('gulp-uglify');
//压缩css
var minifyCss = require("gulp-minify-css");
//压缩html
var minifyHtml = require("gulp-minify-html");
//压缩图片
var imagemin = require('gulp-imagemin');
//压缩ng的
var ngmin = require('gulp-ngmin');


//新建下原型
Asset = {
    js: 'trunk/js/**/*.js',
    html: 'trunk/views/**/*.html',
    css: 'trunk/css/**/*.css'
};


var pump = require('pump');


gulp.task('default', function () {


    //压缩js
    pump([
            gulp.src('trunk/js/**/*.js'),
            uglify(),
            gulp.dest('min/js')
        ],
        //压缩css
        gulp.src('trunk/css/**/*.css') // 要压缩的css文件
            .pipe(minifyCss()) //压缩css
            .pipe(gulp.dest('min/css')),

        //压缩html
        gulp.src('trunk/**/*.html') // 要压缩的css文件
            .pipe(minifyHtml()) //压缩css
            .pipe(gulp.dest('min/'))

    );
});


////这个是压缩js的函数
//gulp.task('minJs', function () {
//    pump([
//        gulp.src('trunk/js/**/*.js'),
//        uglify(),
//        gulp.dest('res/js')
//    ])
//});

//这个是压缩ng的
gulp.task('minng', function () {
        gulp.src('trunk/**/*.js')
        .pipe(ngmin({dynamic: false}))
        .pipe(gulp.dest('ng/'))
});
//
//
////这个是压缩css的函数
//gulp.task('minCss', function () {
//
//    gulp.src('trunk/css/**/*.css')
//        .pipe(minifyCss())
//        .pipe(gulp.dest('res/css'))
//});
//
////这个是压缩html的函数
//gulp.task('minHtml', function () {
//    gulp.src('trunk/views/**/*.html')
//        .pipe(minifyCss())
//        .pipe(gulp.dest('res/views'))
//});
//
////监控器
//gulp.task('watch', ['minJs', 'minCss', 'minHtml'], function () {
//    gulp.watch(Asset.js, ['minJs']);
//    gulp.watch(Asset.css, ['minCss']);
//    gulp.watch(Asset.html, ['minHtml']);
//
//});