define([
  'jquery',
  'underscore',
  'backbone',
  'models/lecturer/LecturerModel',
  'lecturersdata'
], function($, _, Backbone, LecturerModel){

       var LecturersCollection = Backbone.Collection.extend({
            model: LecturerModel
      });
 
  return LecturersCollection;
});
