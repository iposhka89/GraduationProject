import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addOrder() {
      const order = this.get('model.order');
      order.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          order.save();
        }
      })
    }
  }
});
