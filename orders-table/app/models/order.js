import DS from 'ember-data';

export default DS.Model.extend({
  dateAndTime: DS.attr(),
  personName: DS.attr(),
  order: DS.attr(),
  price: DS.attr(),
  deliveryDistrict: DS.attr(),
  deliveryState: DS.attr()
});
