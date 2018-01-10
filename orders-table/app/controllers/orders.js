import Ember from 'ember';

export default Ember.Controller.extend({
  text: '',
  sortBy: 'personName',
  sortDir: true,
  filteredOrders: Ember.computed('model.list.@each', 'text', 'sortBy', 'sortDir', function() {
    const orders = this.get('model.list').filter((item) => {
      return item.get('personName').includes(this.get('text'));
    });

    const sortBy = this.get('sortBy');

    return orders.sort((a, b) => {
      let el1, el2;

      el1 = this.get('sortDir') ? a.get(sortBy) : b.get(sortBy);
      el2 = this.get('sortDir') ? b.get(sortBy) : a.get(sortBy);

      if (el1 < el2) {
        return -1;
      }
      if (el1 > el2) {
        return 1;
      }
      return 0;
    });
  }),
  actions: {
    removeOrder(order) {
      const confirmRemoving = confirm('Вы уверены, что хотите удалить этот заказ?');
      if (confirmRemoving) {
        order.destroyRecord();
      }
    },
    sortOrders(sortBy) {
      this.set('sortBy', sortBy);
      this.set('sortDir', !this.get('sortDir'));
    }
  },
  queryParams: ['id']
});
