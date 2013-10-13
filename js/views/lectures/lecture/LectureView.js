define([
  'underscore',
  'backbone',
  'models/lecture/LectureModel',
  'lectureslist',
  'text!templates/lectures/lectureTemplate.html',
  'text!templates/home/homeTemplate.html'

], function(_, Backbone, LectureModel, lectureTemplate, homeTemplate){    
    
    var LectureView = Backbone.View.extend({
        el : $("#page"),

        render : function() {
          console.log("I'm here!");
          var model_by_id = new LectureModel();
          var current_id = Number(this.id);
          var lecture_by_id = $.grep(lectureslist, function(e){ return e.id == current_id; });
          model_by_id.set(lecture_by_id[0]);
          console.log(model_by_id);
          console.log(model_by_id.get("name"));
          var lecture = model_by_id.attributes;
          console.log(lecture);

          var data = {
            lecture: model_by_id.toJSON(),
            _: _ 
          };
          $('.menu li').removeClass('active');
          $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
          //var compiledTemplate = _.template(lecturerTemplate, data );
          var compiledTemplate = _.template(homeTemplate, data );

          this.$el.html( compiledTemplate );
        }
        
    });

    return LectureView;

}); 