import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      order: this.get('store').createRecord('order')
    }
  }
});
