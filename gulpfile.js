var   gulp           = require('gulp'),//gulp
      sass           = require('gulp-sass');//sass
      browserSync    = require('browser-sync').create();//browser同步



gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});



gulp.task('watch',function(){
    gulp.watch('./scss/*.scss',['sass']);
    gulp.watch('./dist/main.css').on('change', browserSync.reload);
    gulp.watch('./i18n/**/_all.json').on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});




gulp.task('browsersync',['sass'], function () {
  browserSync.init({
    server: "./" //要瀏覽器同步的資料夾(抓index)
  });
});

gulp.task('default',['browsersync','watch']);
