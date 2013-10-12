// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/students/StudentsView',
  'views/lecturers/LecturersView'
], function($, _, Backbone, HomeView, StudentsView, LecturersView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'students': 'showStudents',
      'lecturers': 'showLecturers',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showStudents', function () {
        var studentsView = new StudentsView();
        studentsView.render();
    });

    app_router.on('route:showLecturers', function () {
        var lecturersView = new LecturersView();
        lecturersView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
