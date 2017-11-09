import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addOrder() {
      this.get('model.order').save();
    }
  }
});
