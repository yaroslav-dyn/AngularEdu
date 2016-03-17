var gulp = require('gulp');

	var browserSync = require('browser-sync').create();
	var less = require('gulp-less');
	//var path = require('path');


//Compile less
gulp.task('less', function () {
  	gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'));
});
	
// Static Server + watching css/html files
gulp.task('serv', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html" ).on('change', browserSync.reload);
    gulp.watch("css/*.css" ).on('change', browserSync.reload);
    gulp.watch('less/*.less',['less']).on('change', browserSync.reload);
});

// gulp.task('watch', function(){
// 	gulp.watch('less/*.less');
// })



