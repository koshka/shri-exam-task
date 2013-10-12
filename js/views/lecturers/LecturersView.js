define([
  'jquery',
  'underscore',
  'backbone',
  'models/lecturer/LecturerModel',
  'collections/lecturers/LecturersCollection',
  'views/lecturers/LecturersListView',
  'text!templates/lecturers/lecturersTemplate.html',
  'lecturersdata'
], function($, _, Backbone, LecturerModel, LecturersCollection, LecturersListView, lecturersTemplate){

  var LecturersView = Backbone.View.extend({

    el: $("#page"),

    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(lecturersTemplate);
    
      var lecturersCollection = new LecturersCollection(lecturersdata);
      var lecturersListView = new LecturersListView({ collection: lecturersCollection});   
      lecturersListView.render(); 

    }
    
  });

  return LecturersView;
});
