var testrunner = require('qunit');

testrunner.options.log.summary = true;
testrunner.options.log.tests = false;
testrunner.options.log.assertions = false;

testrunner.run({
    code: "./dist/all.js",
    tests: [
      './test/unit/rect.js',
      './test/unit/ellipse.js',
      './test/unit/color.js',
      './test/unit/circle.js',
      './test/unit/line.js',
      './test/unit/polyline.js',
      './test/unit/polygon.js',
      './test/unit/path.js',
      './test/unit/path_group.js',
      './test/unit/observable.js',
      './test/unit/object.js',
      './test/unit/text.js',
      './test/unit/util.js',
      './test/unit/image.js',
      './test/unit/group.js',
      './test/unit/parser.js',
      './test/unit/canvas.js',
      './test/unit/canvas_static.js'
    ]
}, function(err, report) {
  if(report.failed > 0){
    process.on('exit', function() {
      process.exit(1);
    });
  }
  if (err) {
    console.log(err);
  }
});