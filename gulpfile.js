var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require('gulp-angular-protractor');//docs didn't have '.protractor'


gulp.task('connect', function(){
  connect.server({
    root: '.',// what is this supposed to be set to?
    port: 3000
  });
});

gulp.task('e2e', function(){
  var args = ['--baseUrl', 'http://127.0.0.1:3000'];// assuming this is asking for the port our app is on
  gulp.src(['./client/specs/e2e/**/*.js'])
  .pipe(protractor({
    configFile: './client/specs/conf.js',
    args: args
  }))
  .on('error', function(e) { throw e })
});

gulp.task('watch', function(){
  gulp.watch('**/*.js', function(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  gulp.watch('**/*.js', ['e2e']);
});

// gulp.task('build', ['array', 'of', 'task', 'names']);

gulp.task('default', ['e2e', 'watch']);
