/**the following testcases are from MEDCODELOGIC-MASTER/test/parser_test.rb
 * To initialize testing with jester we only import the function "parse" from our
 * generated parser medcodelogic.js
 * **/

const {parse} = require('./medcodelogic.js');

const testArray=["age=5"];


test('test_comparison', () =>{
    expect(parse("los > 12")).toBe("los > 12")
    expect(parse("adm_weight > 2500")).toBe("adm_weight > 2500")
    expect(parse("12 <= los")).toBe("12 <= los")
    });

test('test_parentheses', () =>{
    expect(parse("( los )")).toBe("( los )")
    expect(parse("(( los ))")).toBe("(( los ))")
    });
    
test('test_or', () =>{
    expect(parse("adm_weight > 2500 or los > 2")).toBe("adm_weight > 2500 or los > 2")
    expect(parse("(los) > 2 or adm_weight > 2500")).toBe("(los) > 2 or adm_weight > 2500")
    expect(parse("(los > 2) or adm_weight > 2500")).toBe("(los > 2) or adm_weight > 2500")
    expect(parse("los > 2 or (adm_weight > 2500)")).toBe("los > 2 or (adm_weight > 2500)")
    });
    
 test('test_and', () =>{
    expect(parse("los > 2 and adm_weight > 2500")).toBe("los > 2 and adm_weight > 2500")
    });

test('test_function_call', () =>{
    expect(parse("function()")).toBe("function()")
    expect(parse("function(argument)")).toBe("function(argument)")
    expect(parse("function(argument, \"argument\", argument)")).toBe("function(argument, \"argument\", argument)")    
    });

test('test_nested1', () =>{
    expect(parse('pdx in table(C) > 1')).toBe('pdx in table(C) > 1')
    });

test('test_nested2', () =>{
    expect(parse("los > 2 or (adm_weight and sdx in table(table1) > 3)")).toBe("los > 2 or (adm_weight and sdx in table(table1) > 3)")
    });

test('test_nested3', () =>{
    expect(parse("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")).toBe("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")       
    });
    


