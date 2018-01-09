import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editOrder() {
      const order = this.get('model.order');
      order.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          order.save().then(() => {
            this.transitionToRoute('orders');
          });
        }
      })
    }
  }
});
