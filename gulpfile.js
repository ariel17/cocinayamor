const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg'); 

gulp.task('default', () =>
	gulp.src('assets/img/*')
		.pipe(imagemin([
            imageminMozjpeg({
                quality: 80
            })
        ]))
		.pipe(gulp.dest('static/img'))
);
