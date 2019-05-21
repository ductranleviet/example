'use strict';

const _isNumber = require('lodash/isNumber');

const typeUser = {
  EMPLOYEE: 'EMPLOYEE',
  AFFILIATE: 'AFFILIATE',
  CUSTOMER: 'CUSTOMER',
};

const discountPercent = {
  EMPLOYEE: 0.3,
  AFFILIATE: 0.1,
  CUSTOMER: 0,
};

const typeStore = {
  STORE: 'STORE',
  GROCERIES: 'GROCERIES'
};

class User {
  constructor(options) {
    const { type, years } = options;
    this.type = typeUser[type] ? typeUser[type] : typeUser.CUSTOMER;
    this.years = years || 0;

    switch (this.type) {
      case typeUser.EMPLOYEE:
        this.discountPercent = discountPercent.EMPLOYEE;
        break;
      case typeUser.AFFILIATE:
        this.discountPercent = discountPercent.AFFILIATE;
        break;
      case typeUser.CUSTOMER:
        this.discountPercent = discountPercent.CUSTOMER;

        if (this.years > 2) {
          this.discountPercent = 0.05;
        }
        
        break;
      default:
        this.discountPercent = 0;
        break;
    }
  }
}

class Store {
  constructor(options) {
    const { type } = options;
    this.type = typeStore[type] ? typeStore[type] : typeStore.GROCERIES;
  }

  discount(price, user) {
    if (!_isNumber(price)) {
      throw 'type of price required Number';
    }

    const discountPercent = this.type == typeStore.STORE 
      ? (user ? user.discountPercent : 0)
      : 0;
    const discount = Math.floor(price/100) * 5 + price * discountPercent;

    return discount;
  }
}

module.exports = { User, Store };
