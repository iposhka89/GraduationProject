import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      list: this.get('store').findAll('order')
    }
  },
  actions: {
    openModal: function(modalName) {
      this.transitionTo(modalName);
    },
    willTransition() {
      this.refresh();
    }
  }
});
