import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  comments: DS.hasMany('comment')
});

Todo.reopenClass({
  FIXTURES: [{
      id: 1,
      title: 'one',
      isCompleted: true,
      comments: [1, 2]
    },
    {
      id: 2,
      title: 'two',
      isCompleted: false,
      comments: [3]
    },
    {
      id: 3,
      title: 'Three',
      isCompleted: true,
      comments: [4]
    }
  ]
})

export default Todo;
