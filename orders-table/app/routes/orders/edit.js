import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  queryParams: {
    id: {refreshModel: true}
  },
  model(param, transition) {
    let id = transition.queryParams.id;
    if (id) {
      return RSVP.hash({
        order: this.get('store').findRecord('order', id),
        commodities: this.get('store').findAll('commodity')
      })
    }
  },
  deactivate() {
    this.store.unloadAll();
  }
});
