import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize: function(type, object, property) {
    if (type.modelName === 'order') {
      object.item = object.commodityData.commodityName;
      object.price = object.commodityData.commodityPrice;

      delete object.commodityData;
    }

    return this._super(type, object, property);
  },
  serialize(type, options) {
    const object = this._super(...arguments);

    if (type.modelName === 'order') {
      object.commodityData = {
        commodityName: object.item,
        commodityPrice: object.price
      };

      delete object.item;
      delete object.price;
    }

    return object;
  },
});
