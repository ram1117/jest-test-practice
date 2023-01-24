const arithmetic = require('../src/task3.js');

describe.each([[5,10,15],[7,6,13],[8,0,8]])('adding %i,%i',(a,b,expected)=>{
  test(`returns ${expected}`,()=>{
    expect(arithmetic.addition(a,b)).toEqual(expected);
  })
});

describe.each([[5,10,-5],[7,6,1],[8,0,8]])('subtracting %i,%i',(a,b,expected)=>{
  test(`returns ${expected}`,()=>{
    expect(arithmetic.subtraction(a,b)).toEqual(expected);
  })
});

describe.each([[5,10,50],[7,6,42],[8,0,0]])('multiplying %i,%i',(a,b,expected)=>{
  test(`returns ${expected}`,()=>{
    expect(arithmetic.multiplication(a,b)).toEqual(expected);
  })
});

describe.each([[5,10,0.5],[7,1,7],[8,0,Infinity]])('dividing %i,%i',(a,b,expected)=>{
  test(`returns ${expected}`,()=>{
    expect(arithmetic.division(a,b)).toEqual(expected);
  })
});