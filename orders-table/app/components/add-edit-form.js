import Ember from 'ember';

export default Ember.Component.extend({
  districts: [
    'Центральный',
    'Советский',
    'Первомайский',
    'Партизанский',
    'Заводской',
    'Ленинский',
    'Октябрьский',
    'Московский',
    'Фрунзенский'
  ],
  actions: {
    selectCommodity(value, item) {
      this.set('summaryPrice', `Цена: ${item.get('price')}$`);
      this.set('order.item', value);
      this.set('order.price', item.get('price'));
    },
    selectDistrict(value) {
      this.set('order.deliveryDistrict', value);
    },
    addOrder() {
      this.sendAction('actionToCall');
    }
  }
});
