import DS from 'ember-data';

var Todo =  DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [{
      id: 1,
      title: 'one',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'two',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Three',
      isCompleted: true,
    }
  ]
})

export default Todo;
