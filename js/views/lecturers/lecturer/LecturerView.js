define([
  'underscore',
  'backbone',
  'models/lecturer/LecturerModel',
  'lecturersdata',
  'text!templates/lecturers/lecturerTemplate.html',
  'text!templates/home/homeTemplate.html'

], function(_, Backbone, LecturerModel, lecturerTemplate, homeTemplate){    
    
    var LecturerView = Backbone.View.extend({
        el : $("#page"),

        render : function() {
          console.log("I'm here!");
          var model_by_id = new LecturerModel();
          var current_id = Number(this.id);
          var lecturer_by_id = $.grep(lecturersdata, function(e){ return e.id == current_id; });
          model_by_id.set(lecturer_by_id[0]);
          console.log(model_by_id);
          console.log(model_by_id.get("name"));
          var lecturer = model_by_id.attributes;
          console.log(lecturer);

          var data = {
            lecturer: model_by_id.toJSON(),
            _: _ 
          };
          $('.menu li').removeClass('active');
          $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
          //var compiledTemplate = _.template(lecturerTemplate, data );
          var compiledTemplate = _.template(homeTemplate, data );

          this.$el.html( compiledTemplate );
        }
        
    });

    return LecturerView;

}); 