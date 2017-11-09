import Ember from 'ember';

export default Ember.Component.extend({
  commodities: [{
    id: 1,
    name: 'Барабаны',
    price: '600'
  }, {
    id: 2,
    name: 'Гитара',
    price: '300'
  }, {
    id: 3,
    name: 'Басс-гитара',
    price: '250'
  }, {
    id: 4,
    name: 'Синтезатор',
    price: '350'
  }, {
    id: 5,
    name: 'Чехол',
    price: '50'
  }, {
    id: 6,
    name: 'Тюнер',
    price: '35'
  }, {
    id: 7,
    name: 'Барабанные палочки',
    price: '15'
  }],
  districts: [{
    id: 1,
    name: 'Центральный'
  }, {
    id: 2,
    name: 'Советский'
  }, {
    id: 3,
    name: 'Первомайский'
  }, {
    id: 4,
    name: 'Партизанский'
  }, {
    id: 5,
    name: 'Заводской'
  }, {
    id: 6,
    name: 'Ленинский'
  }, {
    id: 7,
    name: 'Октябрьский'
  }, {
    id: 8,
    name: 'Московский'
  }, {
    id: 9,
    name: 'Фрунзенский'
  }],
  actions: {
    selectCommodity(value, item) {
      this.set('summaryPrice', `Цена: ${item.price}$`);
      this.set('model.item', value);
    },
    selectDistrict(value) {
      this.set('model.deliveryDistrict', value);
    },
    addOrder() {
      this.sendAction('actionToCall');
    }
  }
});
