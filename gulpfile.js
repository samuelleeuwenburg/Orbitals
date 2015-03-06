var gulp = require('gulp');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');
var order = require('gulp-order');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('6to5', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(order([ 
      'core/**/*.js',
      'components/**/*.js',
      'app/**/*.js',
      'main.js'
    ]))
    .pipe(to5())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['6to5']);
});

gulp.task('serve', ['webserver', 'watch']);

