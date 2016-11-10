var gulp        = require("gulp");
var gutil = require("gulp-util");
var browserSync = require("browser-sync").create();
var less        = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var codekit = require("gulp-codekit");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var gulpIf = require("gulp-if");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var useref = require("gulp-useref");
var historyApiFallback = require('connect-history-api-fallback');


gulp.task("css", function() {
    return gulp.src(["./build/css/site.css", "./build/css/storyMap.css", "./build/css/timeline.css"])
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.stream());
});

// Compile js & reload browsers
gulp.task("scripts", function() {
  gulp.src("./build/js/storymapJS/storymap.js")
    .pipe(rename("storymap.js"))
    .pipe(gulp.dest("./dist/js/storymapJS/"));  
});

// Compile js & reload browsers
gulp.task("angularscripts", function() {
  gulp.src("./build/js/application/app.js")
    .pipe(gulp.dest("./dist/js/application/"));  
});

gulp.task("js-watch", ["scripts", "angularscripts"], function() {
    browserSync.reload();
});

// Check HTML & reload browsers
gulp.task("checkHTML", function() {
  gulp.src("./build/index.html")
    .pipe(gulp.dest("./dist/"));
});

gulp.task("useref", function() {
    return gulp.src("./build/*.html")
        .pipe(useref())
        // .pipe(sourcemaps.init({loadMaps: true}))
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf("*.js", uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        // .pipe(sourcemaps.write('./dist/'))
        .pipe(gulp.dest("./dist/"));
});

// Static server
gulp.task("serve", [], function() {
        browserSync.init({
            server:{
                baseDir: ["./", "./dist"]
            },
            browser: "C://Users//pw8g08//AppData//Local//Google//Chrome SxS//Application//chrome.exe",
            middleware: [historyApiFallback()]
        });

    gulp.watch("./build/css/**/*.css", ["css"]);
    gulp.watch("./build/js/**/*.js", ["js-watch"]);
    gulp.watch("./build/*.html", ["checkHTML"]);
    gulp.watch("./dist/index.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);