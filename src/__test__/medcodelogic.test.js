/**
 * The following testcases are from MEDCODELOGIC-MASTER/test/medcodelogic.parser_test.rb
 * To initialize testing with jester we only import the function "medcodelogic.parse" from our
 * generated medcodelogic.parser medcodelogic.js
 * 
 * IMPORTANT: To run tests, all the variables in this file must be configured as exports in
 * section "module.exports" in the parser (medcodelogic.js)!
 * 
 * Example: 
 *   module.exports = {
 *   SyntaxError: peg$SyntaxError,
 *   parse: peg$parse,
 *   arrayToString
 *   };
 * 
 **/

const medcodelogic = require('../Monaco/medcodelogic.js');

test('test_comparison', () =>{
    expect(medcodelogic.parse("los > 12")).toBe("los > 12")    
    expect(medcodelogic.parse("adm_weight > 2500")).toBe("adm_weight > 2500")
    expect(medcodelogic.parse("12 <= los")).toBe("12 <= los")
    });

test('test_comparison - throwing', () => {
    expect(() => {
        medcodelogic.parse("los > 12 >");
    }).toThrow('Expected \" \", \"*\", \"+\", \"-\", \"/\", \"and\", \"or\", [\\t\\n\\r], or end of input but \">\" found.');
    });


test('test_or', () =>{
    expect(medcodelogic.parse("adm_weight > 2500 or los > 2")).toBe("adm_weight > 2500 or los > 2")
    expect(medcodelogic.parse("(los) > 2 or adm_weight > 2500")).toBe("(los) > 2 or adm_weight > 2500")       //TODO: doesn not run - shouldn't it?!
    expect(medcodelogic.parse("(los > 2) or adm_weight > 2500")).toBe("(los > 2) or adm_weight > 2500")
    expect(medcodelogic.parse("los > 2 or (adm_weight > 2500)")).toBe("los > 2 or (adm_weight > 2500)")
    });
  
 test('test_and', () =>{
    expect(medcodelogic.parse("los > 2 and adm_weight > 2500")).toBe("los > 2 and adm_weight > 2500")
    });

 test('in Table', () =>{
    expect(medcodelogic.parse("age_years in table(icd)")).toBe("age_years in table(icd)")                       //TODO: doesn not run - shouldn't it?!
    });

test('test_parentheses', () =>{
    medcodelogic.parse("( los )");
    medcodelogic.parse("(( los ))");
    expect(medcodelogic.parse("( los )")).toBe("( los )")
    expect(medcodelogic.parse("(( los ))")).toBe("(( los ))")
    });
    
test('test_function_call', () =>{
    expect(medcodelogic.parse("function()")).toBe("function()")                                                //TODO: doesn not run - shouldn't it?!
    expect(medcodelogic.parse("function(argument)")).toBe("function(argument)")                                //TODO: doesn not run - shouldn't it?!
    expect(medcodelogic.parse("function(argument, \"argument\", argument)")).toBe("function(argument, \"argument\", argument)")          //TODO: doesn not run - shouldn't it?! 
    });

test('test_nested1', () =>{
    expect(medcodelogic.parse('pdx in table(C) > 1')).toBe('pdx in table(C) > 1')                               //TODO: doesn not run - shouldn't it?!
    });

test('test_nested2', () =>{
    expect(medcodelogic.parse("los > 2 or (adm_weight and sdx in table(table1) > 3)")).toBe("los > 2 or (adm_weight and sdx in table(table1) > 3)")     //TODO: doesn not run - shouldn't it?!
    });

test('test_nested3', () =>{
    expect(medcodelogic.parse("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")).toBe("los > 2 * 6 AND los > 34 or adm_weight() > 3 Or los > 1 and sep = '01'")       //TODO: doesn not run - shouldn't it?!
    });
