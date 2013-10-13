define([
  'jquery',
  'underscore',
  'backbone',
  'models/lecture/LectureModel',
  'collections/lectures/LecturesCollection',
  'views/lectures/LecturesListView',
  'text!templates/lectures/lecturesTemplate.html',
  'lectureslist'
], function($, _, Backbone, LectureModel, LecturesCollection, LecturesListView, lecturesTemplate){

  var LecturesView = Backbone.View.extend({

    el: $("#page"),

    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(lecturesTemplate);
    
      var lecturesCollection = new LecturesCollection(lectureslist);
      var lecturesListView = new LecturesListView({ collection: lecturesCollection});   
      lecturesListView.render(); 

    }
    
  });

  return LecturesView;
});
