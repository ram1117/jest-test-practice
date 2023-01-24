const strLength = require('../src/task1.js');


test('String length', ()=>{
  expect(strLength("abcde")).toEqual(5);
});

test('String length', ()=>{
  expect(strLength("abcdeghijklmnop")).toEqual(12);
});

test('String length', ()=>{
  expect(()=>strLength('').toThrow(Error));
});

test('String length', ()=>{
  expect(()=>strLength('abcdefghijklmnop').toThrow(Error));
});

