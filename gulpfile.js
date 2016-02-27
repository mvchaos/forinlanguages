var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;


gulp.task('e2e', function(){
  var args = ['--baseUrl', 'http://127.0.0.1:3000'];// assuming this is asking for the port our app is on
  gulp.src(['./client/specs/**/*.js'])
  .pipe(protractor({
    configFile: './client/specs/conf.js',
    args: args
  }))
  .on('error', function(err) { throw err })
});

gulp.task('watch', function(){
  gulp.watch('client/**/*.js', function(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  gulp.watch('client/**/*.js');
});

gulp.task('default', ['watch']);
