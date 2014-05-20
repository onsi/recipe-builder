  (function() {
  var js = [];
  js.push('./externals/jquery.js');
  js.push('./externals/underscore.js');
  js.push('./externals/backbone.js');
  js.push('./externals/bootstrap.js');

  js.push('./js/environment_variable.js');
  js.push('./js/action.js');

  js.push('./js/environment_variable_view.js');
  js.push('./js/action_views.js');
  js.push('./js/recipe_list_view.js');
  js.push('./js/main_view.js');

  js.push('./js/main.js');
  head.js.apply(head, js);
})()

head.ready(function() {

});