const extFunction = require('../Monaco/functions.js');

// Default test - so this test suite doesn't fail
test('default_test', () =>{
    expect(true).toBe(true)
});

test('arrayToString', () =>{
    expect(extFunction.arrayToString(new Array("H", "E", "L", "L", "O")).toBe("HELLO"))
});

test('isCodeVariable', () =>{

});