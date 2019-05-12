var gulp = require('gulp');

// general
var rename = require('gulp-rename');
var clean = require('del');
var include = require('gulp-rigger');
var plumber = require('gulp-plumber');
var run = require('run-sequence');

var server = require('browser-sync').create();
var newer = require('gulp-newer');
var ghPages = require('gulp-gh-pages');

// html
var htmlmin = require('gulp-htmlmin');

//css
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var autoprefixer = require('gulp-autoprefixer');
var cssMinify = require('gulp-csso');

// js
var jsMinify = require('gulp-uglify');

// img
var imgMinify = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');


gulp.task('clean', function() {
  return clean('build');
});

gulp.task('copy', function () {
  return gulp.src([
    'src/*.html',
    'src/font/**/*.{woff,woff2}',
    'src/js/**/*.js',
    'src/img/**/*'
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('build'));
});


gulp.task('html:copy', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('html:min', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'));
});


gulp.task('css', function() {
  gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(autoprefixer({
      flexbox: 'no-2009'
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(cssMinify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});


gulp.task('js:copy', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(newer('build/js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('js:include', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(include())
    .pipe(gulp.dest('build/js'))
});

gulp.task('js:minify', function () {
  return gulp.src('build/js/script.js')
    .pipe(jsMinify())
    .pipe(gulp.dest('build/js'))
});


gulp.task('img:copy', function() {
  return gulp.src('src/img/**')
    .pipe(newer('build/img'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('img:minify', function () {
  return gulp.src('build/img/**/*.{png,jpg,svg}')
    .pipe(imgMinify([
      imgMinify.optipng(
        {optimizationLevel: 3}
      ),
      imgMinify.jpegtran(
        {progressive: true}
      ),
      imgMinify.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeAttrs:
            {attrs: 'version'}
          }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('img:svg-sprite', function() {
  return gulp.src('src/img/svg-sprite/*.svg')
    .pipe(imgMinify([
      imgMinify.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true}
        ]
      })
    ]))
    .pipe(svgstore())
    .pipe(gulp.dest('build/img'));
});


function reload (done) {
  server.reload();
  done();
}

gulp.task('html:update', ['html:copy'], reload);
gulp.task('js:update', ['js:copy', 'js:include'], reload);
gulp.task('img:update', ['img:copy'], reload);

gulp.task('serve', ['css'], function() {
  server.init({
    server: "build/",
    browser: ['google chrome'],
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/*.html', ['html:update']);
  gulp.watch('src/sass/**/*.{scss,sass}', ['css']);
  gulp.watch('src/js/**/*.js', ['js:update']);
  gulp.watch('src/img/*', ['img:update']);
});


gulp.task('build', function() {
  run(
    'clean',
    'copy',
    'html:min',
    'css',
    'js:include',
    'js:minify',
    'img:minify',
    'img:svg-sprite'
  );
});


gulp.task('deploy', function () {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
