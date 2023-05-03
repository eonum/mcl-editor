/**the following testcases are from MEDCODELOGIC-MASTER/test/medcodelogic.parser_test.rb
 * To initialize testing with jester we only import the function "medcodelogic.parse" from our
 * generated medcodelogic.parser medcodelogic.js
 * **/

const medcodelogic    = require('./medcodelogic.js');
//const {medcodelogic.parse} = require('./medcodelogic.js');

// Test conversion of an array to string
test('arrayToStringConversion', () =>{
    // mock array
    const test_array = Array(5);
    test_array[0] = 'H';
    test_array[1] = 'A';
    test_array[2] = 'L';
    test_array[3] = 'L';
    test_array[4] = 'O';

    expect(medcodelogic.arrayToString(test_array)).toBe("HALLO");
    });

test('test_comparison', () =>{
    expect(medcodelogic.parse("los > 12")).toBe("los > 12")
    expect(medcodelogic.parse("adm_weight > 2500")).toBe("adm_weight > 2500")
    expect(medcodelogic.parse("12 <= los")).toBe("12 <= los")
    });

test('test_parentheses', () =>{
    expect(medcodelogic.parse("( los )")).toBe("( los )")
    expect(medcodelogic.parse("(( los ))")).toBe("(( los ))")
    });
    
test('test_or', () =>{
    expect(medcodelogic.parse("adm_weight > 2500 or los > 2")).toBe("adm_weight > 2500 or los > 2")
    expect(medcodelogic.parse("(los) > 2 or adm_weight > 2500")).toBe("(los) > 2 or adm_weight > 2500")
    expect(medcodelogic.parse("(los > 2) or adm_weight > 2500")).toBe("(los > 2) or adm_weight > 2500")
    expect(medcodelogic.parse("los > 2 or (adm_weight > 2500)")).toBe("los > 2 or (adm_weight > 2500)")
    });
    
 test('test_and', () =>{
    expect(medcodelogic.parse("los > 2 and adm_weight > 2500")).toBe("los > 2 and adm_weight > 2500")
    });

test('test_function_call', () =>{
    expect(medcodelogic.parse("function()")).toBe("function()")
    expect(medcodelogic.parse("function(argument)")).toBe("function(argument)")
    expect(medcodelogic.parse("function(argument, \"argument\", argument)")).toBe("function(argument, \"argument\", argument)")    
    });

test('test_nested1', () =>{
    expect(medcodelogic.parse('pdx in table(C) > 1')).toBe('pdx in table(C) > 1')
    });

test('test_nested2', () =>{
    expect(medcodelogic.parse("los > 2 or (adm_weight and sdx in table(table1) > 3)")).toBe("los > 2 or (adm_weight and sdx in table(table1) > 3)")
    });

test('test_nested3', () =>{
    expect(medcodelogic.parse("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")).toBe("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")       
    });

