var gulp         = require('gulp');
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    del          = require('del');


// Compile SCSS files to CSS
gulp.task('scss', function () {

    //Delete our old css files
    del(['static/css/**/*'])

    //compile css files
    gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(autoprefixer({browsers : ['last 20 versions']}))
        .pipe(gulp.dest('static/css')) // Write the renamed files
});

// compile images
gulp.task('images', function () {

    del(['static/images/**/*'])
    gulp.src('src/images/**/*')
    .pipe(gulp.dest('static/images'))
});


// complie javascript
gulp.task('js', function () {
    del(['static/js/**/*'])
    gulp.src('src/js/**/*')
        .pipe(gulp.dest('static/js'))
});


// Watch asset folder for changes
gulp.task('watch', ['scss', 'images', 'js'], function () {
    gulp.watch('src/scss/**/*', ['scss'])
    gulp.watch('src/images/**/*', ['images'])
    gulp.watch('src/js/**/*', ['js'])
});


// Set watch as default task
gulp.task('default', ['watch']);
