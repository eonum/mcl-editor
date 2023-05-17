const extFunction = require('../Monaco/functions.js');

// Tests if certain tables are to be found in imported tables.json
test('isInTable', () =>{
    // first entry of tables.json
    expect(extFunction.isInTable("MDC1")).toBe(true)

    // entry somewhere in the middle
    expect(extFunction.isInTable("L62_1")).toBe(true)

    // some entries at the end
    expect(extFunction.isInTable("Urologischer_Endoskopieraum")).toBe(true)
    expect(extFunction.isInTable("Strahl")).toBe(true)

    // not every entry is contained. the table itself for example not:
    expect(extFunction.isInTable("icd")).toBe(false)
});

// The following tests test for certain types of variables in variables.json
// The type is labeled as "variable_type

// Tests if certain variables are of type string
test('isStringVariable', () =>{
    expect(extFunction.isStringVariable("bfs_44v03")).toBe(true)
    expect(extFunction.isStringVariable("bfs_v43v010")).toBe(false)
});

// Tests if certain variables are of type number
test('isNumberVariable', () =>{
    expect(extFunction.isNumberVariable("cost_v460")).toBe(true)
    expect(extFunction.isNumberVariable("bfs_48v16")).toBe(false)
});

// Tests if certain variables are of type date
test('isDateVariable', () =>{
    expect(extFunction.isDateVariable("adm_date")).toBe(true)
    expect(extFunction.isDateVariable("cost_v310")).toBe(false)
});

// Tests if a certain code is to be found in variables.json
test('isCodeVariable', () =>{
    expect(extFunction.isCodeVariable("bfs_42v020")).toBe(true)
    expect(extFunction.isCodeVariable("cost_v451")).toBe(false)

});

// Test function to convert arrays to a string
test('arrayToString', () =>{
    expect(extFunction.arrayToString(new Array("H", "E", "L", "L", "O"))).toBe("HELLO")
});
