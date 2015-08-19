/// <binding ProjectOpened='default' />
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var browsersync = require("browser-sync");
var notify = require("gulp-notify");


gulp.task('default', function () {
    browsersync({
        server: {
            basedir: "./"
        }
    });

    gulp.watch("Scripts/**/*.js", ["reload"]);
    gulp.watch("**/*.html", ["reload"]);
});


gulp.task('reload', function () {
    browsersync.reload();
});