import DS from 'ember-data';


var Comment = DS.Model.extend({
  body: DS.attr('string'),
  todo: DS.belongsTo('todo')
})

Comment.reopenClass({
  FIXTURES: [{
      id: 1,
      body: "Hello",
      todo: 1
    },
    {
      id: 2,
      body: "Hello1",
      todo: 1
    },
    {
      id: 3,
      body: "Hello3",
      todo: 2
    },
    {
      id: 4,
      body: "Hello34",
      todo: 3
    }
  ]
})
export default Comment;
