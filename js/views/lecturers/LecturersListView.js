define([
  'jquery',
  'underscore',
  'backbone',
  'collections/lecturers/LecturersCollection',
  'text!templates/lecturers/lecturersListTemplate.html',
  'lecturersdata'
], function($, _, Backbone, LecturersCollection, lecturersListTemplate){

      var LecturersListView = Backbone.View.extend({

        el : $("#lecturers-list"),

        initialize: function () {
          this.collection = new LecturersCollection();
          for (var i = 0; i < lecturersdata.length; ++i) {
            this.collection.add(lecturersdata[i]);
          }
        },

        render : function() {
          var data = {
            lecturers: this.collection.models,
            _: _ 
          };
          var compiledTemplate = _.template(lecturersListTemplate, data );
          $("#lecturers-list").html( compiledTemplate );
        }

      });
      
      return LecturersListView;
});
