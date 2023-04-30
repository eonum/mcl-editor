{{const Json = require('./variables.json')
var currentGlobalDataType;
var currentVariableName;
var currentGlobalData;

function isVariableNameLeft(input){
    var modifiedInput = arrayToString(input)

    for (const key in Json) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput){
            currentGlobalDataType = Json[key].variable_type
            currentVariableName = modifiedInput
            return true
            
        }
    }

        {return false}
}

function isDataTypeRight(input){
    if(isDate(input) == currentGlobalDataType){return arrayToString(input)}
    if(isNumber(input) == currentGlobalDataType){return arrayToString(input)}
    if(isString(input) == currentGlobalDataType){return arrayToString(input)}
    //if(isCode(input) == currentGlobalDataType){arrayToString(input)}
    {return "invalid data type, expected: " + currentGlobalDataType}
}

function isDataTypeLeft(input){
    if(isDate(input) == 'date'||isNumber(input) == 'number'|| isString(input) == 'string'){
        currentGlobalDataType = getDataType(input)
        currentGlobalData = arrayToString(input)
        return true
        }
    else {return false}
}

function isVariableNameRight(input){
    var modifiedInput = arrayToString(input)

    for (const key in Json) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && Json[key].variable_type == currentGlobalDataType){
            return modifiedInput
        }
    }

        {return "invalid variable"}
}

function isString(input){
    var modifiedInput = arrayToString(input)
    if( /\d/.test(modifiedInput) == true){return false}
    else {return 'string'}
}

//Error!! if a string starts with a number, it will be a number according to parseInt()
function isNumber(input){
    var modifiedInput = arrayToString(input)
    if(isNaN(parseInt(modifiedInput)) == true){return false}
    else{return 'number'}
    //if(modifiedInput == 'number'){return true}
}

function isDate(input){
    var modifiedInput = arrayToString(input)
     
      // Date format: YYYYMMDD
      var datePattern = /^([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/;
      // Check if the date string format is a match
      if (modifiedInput.match(datePattern) == null) {return false;}
        else {return 'date'}
}

function isCode(input){
    {return 'code'}
}

//helpers
function fromNumberToString(input){
    if(typeof(input) == 'number'){return input.toString()}
    else{return input}

}

// returns the datatype of an input
function getDataType(input){
    if(isDate(input) == 'date'){return 'date'}
    if(isNumber(input) == 'number'){return 'number'}
    if(isString(input) == 'string'){return 'string'}
}

// arrayToString does not work in numbers not in an array eg. arrayToString(12) does not work but
// arrayToString([12]) does work
const arrayToString = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
       if(Array.isArray(arr[i])){
          str += `${arrayToString(arr[i])}`;
       }else{
          str += `${arr[i]}`;
       };
    };
    return str;
 };

function cleanArray(arr){
var filtered = arr.filter(function(x) {
  return x !== undefined;
});
return filtered
}
}}




start
= expression

expression
= simple_expression space  and_or* space

and_or =
(('and'/'or') space simple_expression space)

simple_expression =
(comparison / calculation)

comparison
=   first:(variableNameLeft space operator space dataTypeRight space )  {return arrayToString(first)} /
    second:(dataTypeLeft space operator space variableNameRight space ) {return arrayToString(second)}


calculation 
=   first:(variableNameLeft space ('+'/'-'/'*'/'/') space dataTypeRight space )  {return arrayToString(first)} /
    second:(dataTypeLeft space ('+'/'-'/'*'/'/') space variableNameRight space ) {return arrayToString(second)}

variableNameLeft
= name:alwaysMatch  &{return isVariableNameLeft(name)} {return currentVariableName}

dataTypeRight
= type:alwaysMatch {return isDataTypeRight(type)}

dataTypeLeft
= type:alwaysMatch &{return isDataTypeLeft(type)}{return currentGlobalData}

variableNameRight
= name:alwaysMatch {return isVariableNameRight(name)}

operator
= '>=' / '<=' / '>' / '<' / '=' / '!='

alwaysMatch
= [0-9a-zA-Z._]+

space
= (" " / [\t\n\r])*
