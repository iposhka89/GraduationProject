import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize: function(type, object, property) {
    if (property === 'commodities') {
      object.name = object.data.commodityName;
      object.price = object.data.commodityPrice;

      delete object.data;
    }

    return this._super(type, object, property);
  }
});
