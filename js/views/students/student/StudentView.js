define([
  'underscore',
  'backbone',
  'models/student/StudentModel',
  'studentsdata',
  'text!templates/students/studentTemplate.html',
  'text!templates/home/homeTemplate.html'

], function(_, Backbone, StudentModel, studentTemplate, homeTemplate){    
    
    var StudentView = Backbone.View.extend({
        el : $("#page"),

        render : function() {
          var model_by_id = new StudentModel();
          var current_id = Number(this.id);
          var student_by_id = $.grep(studentsdata, function(e){ return e.id == current_id; });
          model_by_id.set(student_by_id[0]);
          var student = model_by_id.attributes;

          var data = {
            student: model_by_id.toJSON(),
            _: _ 
          };
          $('.menu li').removeClass('active');
          $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
          var compiledTemplate = _.template(homeTemplate, data );

          this.$el.html( compiledTemplate );
        }
        
    });

    return StudentView;

}); 