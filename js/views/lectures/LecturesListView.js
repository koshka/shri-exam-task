define([
  'jquery',
  'underscore',
  'backbone',
  'collections/lectures/LecturesCollection',
  'text!templates/lectures/lecturesListTemplate.html',
  'lectureslist'
], function($, _, Backbone, LecturesCollection, lecturesListTemplate){

      var LecturesListView = Backbone.View.extend({

        el : $("#lectures-list"),

        initialize: function () {
          this.collection = new LecturesCollection();
          for (var i = 0; i < lectureslist.length; ++i) {
            this.collection.add(lectureslist[i]);
          }
        },

        render : function() {
          var data = {
            lectures: this.collection.models,
            _: _ 
          };
          var compiledTemplate = _.template(lecturesListTemplate, data );
          $("#lectures-list").html( compiledTemplate );
        }

      });
      
      return LecturesListView;
});
