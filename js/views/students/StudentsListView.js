define([
  'jquery',
  'underscore',
  'backbone',
  'collections/students/StudentsCollection',
  'text!templates/students/studentsListTemplate.html',
  'studentsdata'
], function($, _, Backbone, StudentsCollection, studentsListTemplate){
  
  var StudentsListView = Backbone.View.extend({

    el : $("#students-list"),
    
    initialize: function () {
      this.collection = new StudentsCollection();
      for (var i = 0; i < studentsdata.length; ++i) {
        this.collection.add(studentsdata[i]);
      }
    },

    render : function() {

      var data = {
        students: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template(studentsListTemplate, data );
      $("#students-list").html( compiledTemplate );
    }
  });

  return StudentsListView;
});
