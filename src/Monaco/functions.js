
/**
 * This file holds all the functions used in the parser grammer medcodelogic.pegjs
 * 
 * There are automatic jest tests to be found in functions.test.js
 */

const variablesJson = require('./variables.json')
const tablesJson = require('./tables.json')

function isInTable(input){
  var modifiedInput = arrayToString(input)

     for(const key in tablesJson){
      for(let i = 0; i< tablesJson[key].length; i++){
        if(tablesJson[key][i] != undefined){
          if (tablesJson[key][i].label == modifiedInput){return true}
      }
  }  
} 
{return false}
}

/**
 * Returns true if the input is a validvariable name AND safes itsvariable name
 * and data type in the globalvariables. If thevariable name is not valid, return false.
 * This function applies only, for the left side of an operator.
*/
function isStringVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='string'){return true}
    }
        {return false}
}

function isNumberVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='number'){return true}
    }
        {return false}
}

function isDateVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='date'){return true}
    }
        {return false}
}

function isCodeVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='code'){ 
            return true
        }
    }
        {return false}
}

/**
 * Returns an string. This function also turns multidimensional arrays into string.
 * @Attention if the input is a number (not inside an array) we get no return.
 * This should not be an issue, since input is alawys an array.  
**/
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
 }

 //export all the functions, so they can be accesed 
 module.exports = {
    isInTable: isInTable,
    isStringVariable: isStringVariable,
    isNumberVariable: isNumberVariable,
    isDateVariable: isDateVariable,
    isCodeVariable: isCodeVariable,
    arrayToString: arrayToString,
    variablesJson: variablesJson,
    tablesJson: tablesJson
  };