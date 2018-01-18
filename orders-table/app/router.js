import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders', {queryParams: ['filter', 'sortBy', 'sortDir']}, function() {
    this.route('add');
    this.route('edit', {queryParams: 'id'});
  });
});

export default Router;
