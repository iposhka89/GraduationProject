import { test } from 'qunit';
import moduleForAcceptance from 'orders-table/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Orders Route');

test('Should show orders as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/orders', 'Should redirect automatically');
  });
});

test('Should list available orders', function (assert) {
  visit('/');
  andThen(function() {
    assert.notEqual(find('.order-info').length, 0, 'Should see any orders');
  });
});
