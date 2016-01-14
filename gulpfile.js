var gulp=require('gulp');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var notify=require('gulp-notify');
gulp.task('default', function() {
  gulp.src(['./libs/echarts.js', './libs/china.js', './libs/jquery-1.11.2.min.js','./leaflet/leaflet.js','./src/leaflet-echarts3.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Scripts common task complete' }));
});