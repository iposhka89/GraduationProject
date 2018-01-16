import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      list: this.get('store').findAll('order')
    }
  },
  actions: {
    willTransition() {
      this.refresh();
    },
    closeModal() {
      this.transitionTo('orders');
    }
  }
});
