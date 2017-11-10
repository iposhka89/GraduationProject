import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  personName: validator('presence', true),
  item: validator('presence', true),
  deliveryDistrict: validator('presence', true)
});

export default DS.Model.extend(Validations, {
  dateAndTime: DS.attr(),
  personName: DS.attr(),
  item: DS.attr(),
  price: DS.attr(),
  deliveryDistrict: DS.attr(),
  deliveryState: DS.attr()
});
