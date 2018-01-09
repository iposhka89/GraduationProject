import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeOrder(order) {
      const confirmRemoving = confirm('Вы уверены, что хотите удалить этот заказ?');
      if (confirmRemoving) {
        order.destroyRecord();
      }
    }
  },
  queryParams: ['id']
});
