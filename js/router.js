// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/students/StudentsView',
  'views/lecturers/LecturersView',
  'views/lecturers/lecturer/LecturerView'
], function($, _, Backbone, HomeView, StudentsView, LecturersView, LecturerView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'students': 'showStudents',
      'lecturers': 'showLecturers',
      // Default
      '': 'defaultAction',
      'lecturers/:id': 'showLecturerById'
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

    app_router.on('route:showLecturerById', function (id) {
        var lecturerView = new LecturerView({id : id});
        lecturerView.render();
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
