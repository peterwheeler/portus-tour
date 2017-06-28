var gulp        = require("gulp");
var gutil = require("gulp-util");
var browserSync = require("browser-sync").create();
var less        = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var lazypipe = require('lazypipe');
var codekit = require("gulp-codekit");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var gulpIf = require("gulp-if");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var useref = require("gulp-useref");
var historyApiFallback = require('connect-history-api-fallback');


gulp.task("css", function() {
    return gulp.src(["./build/scss/site.css", "./build/scss/storymap.css", "./build/scss/timeline.css", "./build/scss/juxtapose.css"])
        .pipe(gulp.dest("./build/css/"))
        .pipe(browserSync.stream());
});

// Compile js & reload browsers
gulp.task("scripts", function() {
  gulp.src("./build/js/storymapJS/storymap.js")
    .pipe(gulp.dest("./build/js/storymapJS/"));  
});

// Compile js & reload browsers
gulp.task("angularscripts", function() {
  gulp.src("./build/js/application/app.js")
    .pipe(gulp.dest("./build/js/application/"));  
});

gulp.task("js-watch", ["scripts", "angularscripts"], function() {
    browserSync.reload();
});

// Check HTML & reload browsers
gulp.task("checkHTML", function() {
  gulp.src("./build/**/*.html")
    .pipe(gulp.dest("./dist/"));
    browserSync.reload();
});

gulp.task("useref", function() {
    return gulp.src("./build/*.html")
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
        .pipe(sourcemaps.write('maps'))
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf("*.js", uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf("*.css", cssnano({zindex: false})))
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest("./dist/"));
});

// Static server
gulp.task("serve", [], function() {
        browserSync.init({
            server:{
                baseDir: ["./", "./build"]
            },
            browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
            middleware: [historyApiFallback()]
        });

    gulp.watch("./build/scss/**/*.css", ["css"]);
    gulp.watch("./build/js/**/*.js").on("change", browserSync.reload);
    gulp.watch("./build/**/*.html", ["checkHTML"]);
});

// Static server
gulp.task("servebuild", [], function() {
        browserSync.init({
            server:{
                baseDir: ["./", "./dist"]
            },
            browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
            middleware: [historyApiFallback()]
        });
});

gulp.task("default", ["serve"]);

gulp.task("build", ["css", "useref", "servebuild"]);