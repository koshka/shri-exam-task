define([
  'underscore',
  'backbone',
  'models/student/StudentModel'
], function(_, Backbone, StudentModel){    
    
    var StudentView = Backbone.View.extend({
        tagName : "li",
        render : function() {
            
           var student = { first_name : this.model.get("first_name"), 
                           last_name  : this.model.get("last_name"), 
                           link_photo : this.model.get("link_photo")
                         };
          
           return this;
        }
        
    });

    return StudentModel;

}); 