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
          var model_by_id = new LecturerModel();
          var current_id = Number(this.id);
          var lecturer_by_id = $.grep(lecturersdata, function(e){ return e.id == current_id; });
          model_by_id.set(lecturer_by_id[0]);
          var lecturer = model_by_id.attributes;

          var data = {
            lecturer: model_by_id.toJSON(),
            _: _ 
          };
          
          $('.menu li').removeClass('active');
          $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
          var compiledTemplate = _.template(homeTemplate, data );

          this.$el.html( compiledTemplate );
        }
        
    });

    return LecturerView;

}); 