import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: 'personName',
  sortDir: true,
  sortedOrders: Ember.computed('filteredOrders.@each', 'sortBy', 'sortDir', function() {
    const sortBy = this.get('sortBy');

    return this.get('filteredOrders').sort((a, b) => {
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
  }
});
