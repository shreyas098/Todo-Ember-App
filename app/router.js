import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('todo', {
    path: '/'
  }, function () {
    this.route('active', function () {
      this.route('comments', {
        path: '/:active_id'
      });
    });
    this.route('completed');
    this.route('show', {
      path: 'show/:todo_id'
    });
  });


});

export default Router;
