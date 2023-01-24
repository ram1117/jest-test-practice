const capitalize = require('../src/task4.js');

describe.each([['abcd ghij','Abcd Ghij'],['wxyz','Wxyz'],['a winner','A Winner']])('Capitalize string %i',(str,expected)=>{
test(`returns ${expected}`,()=>{
expect(capitalize(str)).toBe(expected);
});

});