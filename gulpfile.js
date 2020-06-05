var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');

gulp.task('less', function(){
 return gulp.src('app/less/*.less')
 .pipe(less({}))
 .pipe(gulp.dest('app/css'))
});

gulp.task('imageMin', () =>
	gulp.src('app/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

gulp.task('useref', function(){
 return gulp.src('app/*.html')
 .pipe(useref())
 .pipe(gulpIf('*.js', uglify()))
 .pipe(gulpIf('*.css', cssnano()))
 .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series('less', 'imageMin', 'useref'));
