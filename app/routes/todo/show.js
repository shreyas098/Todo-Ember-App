import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    const todos = this.store.peekAll('todo');
    return todos.filter('todo', function (todo) {
      return !todo.get('isCompleted', params.todo_id);
    })
  },

  renderTemplate: function (controller) {
    this.render('todo/show', {
      controller: controller
    })
  }
});
