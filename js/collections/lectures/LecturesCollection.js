define([
  'jquery',
  'underscore',
  'backbone',
  'models/lecture/LectureModel',
  'lectureslist'
],  function($, _, Backbone, LectureModel){

        var LecturesCollection = Backbone.Collection.extend({
            model: LectureModel
      });
 
    return LecturesCollection;
});
