define([
  'jquery',
  'underscore',
  'backbone',
  'models/student/StudentModel',
  'studentsdata'
], function($, _, Backbone, StudentModel){

        var StudentsCollection = Backbone.Collection.extend({
            model: StudentModel
        });

        return StudentsCollection;
});
