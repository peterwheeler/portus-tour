var gulp        = require("gulp");
var	gutil = require("gulp-util");
var browserSync = require("browser-sync").create();
var historyApiFallback = require('connect-history-api-fallback');


// gulp.task("default", function() {
//   return gutil.log("Gulp is running!");
// });

// Static server
gulp.task("serve", [], function() {
        browserSync.init({
            server: {
                baseDir: "./"
            },
            middleware: [historyApiFallback()]
        });

    gulp.watch("./css/**/*.css").on("change", browserSync.reload);
    gulp.watch("./js/application/*.js").on("change", browserSync.reload);
    gulp.watch("./partials/**/*.html").on("change", browserSync.reload);
    gulp.watch("./index.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);