// Filename: main.js
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates',
    studentsdata: 'json/students',
    lecturersdata: 'json/lecturers'
  }

});

require([
  'app'

], function(App){
   App.initialize();
});
