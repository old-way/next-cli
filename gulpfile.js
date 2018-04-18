const gulp = require("gulp");
const sequence = require("gulp-sequence");
const ts = require("@notadd/gulp-typescript");
const tslint = require("gulp-tslint");

const packages = {
    cli: ts.createProject("src/tsconfig.json"),
};
const dist = "package";
const source = "src";

const modules = Object.keys(packages);

gulp.task("default", function () {
    tasks();
});

modules.forEach(module => {
    gulp.task(module, () => {
        return packages[module]
            .src()
            .pipe(tslint({
                formatter: "verbose",
            }))
            .pipe(tslint.report({
                emitError: false,
                summarizeFailureOutput: true,
            }))
            .pipe(packages[module]())
            .pipe(gulp.dest(`${dist}`));
    });
});

gulp.task("build", function (cb) {
    sequence("cli", modules.filter((module) => module !== "cli"), cb);
});

function tasks() {
    modules.forEach(module => {
        watchTypescript(source, module);
    });
}

function watchTypescript(source, module) {
    gulp.watch(
        [
            `${source}/**/*.ts`,
            `${source}/**/*.tsx`,
            `${source}/*.ts`,
            `${source}/*.tsx`,
        ],
        [
            module,
        ]
    ).on("change", function (event) {
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
}
