'use strict';

const { User, Store } = require('../src/example3');

describe('example 1', () => {
  test('user EMPLOYEE store STORE', () => {
    const user = new User({
      type: 'EMPLOYEE'
    });

    const store = new Store({
      type: 'STORE'
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(342);
  });

  test('user AFFILIATE store STORE', () => {
    const user = new User({
      type: 'AFFILIATE'
    });

    const store = new Store({
      type: 'STORE'
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(144);
  });

  test('user CUSTOMER 1 years store STORE', () => {
    const user = new User({
      type: 'CUSTOMER',
      years: 1
    });

    const store = new Store({
      type: 'STORE',
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(45);
  });

  test('user CUSTOMER 3 years store STORE', () => {
    const user = new User({
      type: 'CUSTOMER',
      years: 3
    });

    const store = new Store({
      type: 'STORE',
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(94.5);
  });

  // Store GROCERIES

  test('user EMPLOYEE store GROCERIES', () => {
    const user = new User({
      type: 'EMPLOYEE'
    });

    const store = new Store({
      type: 'GROCERIES'
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(45);
  });

  test('user AFFILIATE store GROCERIES', () => {
    const user = new User({
      type: 'AFFILIATE'
    });

    const store = new Store({
      type: 'GROCERIES'
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(45);
  });

  test('user CUSTOMER 1 years store GROCERIES', () => {
    const user = new User({
      type: 'CUSTOMER',
      years: 1
    });

    const store = new Store({
      type: 'GROCERIES',
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(45);
  });

  test('user CUSTOMER 3 years store GROCERIES', () => {
    const user = new User({
      type: 'CUSTOMER',
      years: 3
    });

    const store = new Store({
      type: 'GROCERIES',
    });

    const discount = store.discount(990, user);

    expect(discount).toBe(45);
  });

});
