'use strict';

const _isArray = require('lodash/isArray');
const _forEach = require('lodash/forEach');
const _isPlainObject = require('lodash/isPlainObject');
const _isString = require('lodash/isString');
const _fromPairs = require('lodash/fromPairs');

/* 
*  Convert Object to String
*  Input: { key1: value1, key2: value2, ... }
*  Output: 'key1=value1;key2=value2;....'
*/

const encodeObject = function(object) {
  let result = '';
  if (!_isPlainObject(object)) {
    throw 'Error type of Object';
  }

  for (let key in object) {
    result = `${result}${key}=${object[key]};`
  }

  return result.slice(0, -1);
};

const store = function(array) {
  const resuls = [];
  if (!_isArray(array)) {
    throw 'Error type of Array';
  }

  _forEach(array, function(element) {
    resuls.push(encodeObject(element));
  });

  return resuls.join('\n');
};

const decodeObject = function(string) {
  if (!_isString(string)) {
    throw 'Error type of String';
  }
  
  return _fromPairs(string.split(';').map(s => s.split('=')));
};

const load = function(string) {
  const results = [];
  if (!_isString(string)) {
    throw 'Error type of String';
  }

  const arr = string.split('\n');

  _forEach(arr, function(element) {
    results.push(decodeObject(element));
  });

  return results;
};

module.exports = { store, load };
