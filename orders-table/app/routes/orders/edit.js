import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      order: this.get('store').findRecord('order', params.orderId),
      commodities: this.get('store').findAll('commodity')
    })
  },
  deactivate() {
    this.store.unloadAll();
  }
});
