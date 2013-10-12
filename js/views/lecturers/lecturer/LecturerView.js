define([
  'underscore',
  'backbone',
  'models/lecturer/LecturerModel'
], function(_, Backbone, LecturerModel){    
    var LecturerView = Backbone.View.extend({

        tagName : "li",

        render : function() {
           var lecturer = { name      : this.model.get("name"), 
                            photo_url : this.model.get("photo_url")
                          };         
           return this;
        }
    });
    
    return LecturerModel;
}); 