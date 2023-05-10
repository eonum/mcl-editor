const extFunction = require('../Monaco/functions.js');

test('isInTable', () =>{
});

test('isStringVariable', () =>{
    expect(extFunction.isStringVariable("bfs_44v03")).toBe(true)
});

test('isNumberVariable', () =>{
    expect(extFunction.isNumberVariable("cost_v460")).toBe(true)
});

test('isDateVariable', () =>{

});

// Test if a certain code is to be found in variables.json
test('isCodeVariable', () =>{
    expect(extFunction.isCodeVariable("bfs_42v020")).toBe(true)

});

// Test function to convert arrays to a string
test('arrayToString', () =>{
    expect(extFunction.arrayToString(new Array("H", "E", "L", "L", "O"))).toBe("HELLO")
});
