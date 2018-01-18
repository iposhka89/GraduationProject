import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  sortBy: 'personName',
  sortDir: 'true',
  queryParams: ['sortBy', 'sortDir', 'filter'],
  filteredOrders: Ember.computed('model.list.[]', 'filter', function() {
    return this.get('model.list').filter((item) => {
      return !item.get('isNew') && item.get('personName').includes(this.get('filter'));
    });
  }),
  actions: {
    updateQueryParams: function(sortBy, sortDir) {
      this.set('sortBy', sortBy);
      this.set('sortDir', sortDir);
    }
  }
});
