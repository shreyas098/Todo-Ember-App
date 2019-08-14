import Ember from 'ember';

export default Ember.Controller.extend({
   isEditing: false,
   actions: {
     editToDo(todo) {
         todo.set('isEditing', true);
       },
       acceptChanges(todo) {
         todo.set('isEditing', false);
         var title = this.get('model.title');
         if (Ember.isEmpty(title)) {
           this.removetodo(todo);
         } else {
           todo.save();
         }
       },
       removetodo(todo) {
         todo.deleteRecord();
         todo.save();
       },
   }
});
