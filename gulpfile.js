var gulp 			= require("gulp");
var sass 			= require("gulp-sass");
var livereload      = require('gulp-livereload');

gulp.task('sass', function () {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"));
});

gulp.task('html', function() {
	gulp.src('./index.html')
	.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src('./js/**/*.js')
	.pipe(livereload());
});

gulp.task('css', function () {
	gulp.src('./css/**/*.css')
		.pipe(livereload());
});

gulp.task('default', function () {
	livereload.listen();
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./css/**/*.css', ['css']);
	gulp.watch('./index.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
});