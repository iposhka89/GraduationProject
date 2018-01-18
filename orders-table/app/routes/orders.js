import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    filter: {refreshModel: true},
    sortedBy: {refreshModel: true},
    sortedDir: {refreshModel: true}
  },
  model() {
    return {
      list: this.get('store').findAll('order')
    }
  },
  actions: {
    willTransition() {
      this.refresh();
    }
  }
});
