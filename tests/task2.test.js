const reverseString = require('../src/task2.js');

it('reversing a string',()=>{
  expect(reverseString('abcd')).toBe('dcba');
});

it('reversing a string',()=>{
  expect(reverseString('abc d')).toBe('dcba');
});

