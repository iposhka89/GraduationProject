import Ember from 'ember';

export default Ember.Controller.extend({
  text: '',
  filteredOrders: Ember.computed('model.list.[]', 'text', function() {
    return this.get('model.list').filter((item) => {
      return !item.get('isNew') && item.get('personName').includes(this.get('text'));
    });
  })
});
