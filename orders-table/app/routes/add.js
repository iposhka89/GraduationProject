import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      order: this.get('store').createRecord('order'),
      commodities: this.get('store').findAll('commodity')
    }
  },
  deactivate() {
    this.modelFor('add').order.deleteRecord();
  }
});
