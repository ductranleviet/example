'use strict';

const example1 = require('../src/example1');
const array = [{ key1: 'value1', key2: 'value2' }, { keyA: 'valueA' }];
const string = 'key1=value1;key2=value2\nkeyA=valueA';

describe('example 1', () => {
  test('should update ', () => {
    expect(3).toBe(3);
  });

  test('store', () => {
    const result = example1.store(array);

    expect(typeof(result)).toBe('string');
    expect(result).toBe(string);
  });

  test('load', () => {
    const result = example1.load(string);

    expect(Array.isArray(result)).toBe(true)
    expect(result[0].key1).toBe('value1');
  });
});
