define([
  'jquery',
  'underscore',
  'backbone',
  'models/student/StudentModel',
  'collections/students/StudentsCollection',
  'views/students/StudentsListView',
  'text!templates/students/studentsTemplate.html',
  'studentsdata'
], function($, _, Backbone, StudentModel, StudentsCollection, StudentsListView, studentsTemplate){

  var StudentsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(studentsTemplate);
    
      var studentsCollection = new StudentsCollection(studentsdata);
      var studentsListView = new StudentsListView({ collection: studentsCollection});   
      studentsListView.render(); 

    }
  });

  return StudentsView;
});
