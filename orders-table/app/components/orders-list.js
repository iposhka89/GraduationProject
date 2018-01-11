import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeOrder(order) {
      const confirmRemoving = confirm('Вы уверены, что хотите удалить этот заказ?');
      if (confirmRemoving) {
        order.destroyRecord();
      }
    },
    sortOrders(sortBy) {
      this.sendAction('actionToCall', sortBy);
    }
  }
});
