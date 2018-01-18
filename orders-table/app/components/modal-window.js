import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveOrder() {
      this.sendAction('actionToCall');
    },
    closeModal() {
      this.sendAction('closeModal');
    }
  }
});
