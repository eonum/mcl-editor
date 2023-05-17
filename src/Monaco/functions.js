
/**
 * This file holds all the functions used in the parser grammer medcodelogic.pegjs
 * All functions will be exported at the end of the file and imported via require function
 * into the medcodelogic.pegjs file
 * There are automatic jest tests to be found in functions.test.js
 */

//import tables and variables
const variablesJson = require('./variables.json')
const tablesJson = require('./tables.json')

/**
 * This function takes an array from current parser rule and checks if the
 * the input is a valid table name.
 * @param {array} input 
 * @returns true if input is in tables.json or false if not
 */
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
 * This function takes an array from current parser rule and checks if the
 * the input is a valid string variable.
 * @param {array} input 
 * @returns true if input is in variables.json and string variable or false if not
 */
function isStringVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='string'){return true}
    }
        {return false}
}

/**
 * This function takes an array from current parser rule and checks if the
 * the input is a valid number variable.
 * @param {array} input 
 * @returns true if input is in variables.json and number variable or false if not
 */
function isNumberVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='number'){return true}
    }
        {return false}
}

/**
 * This function takes an array from current parser rule and checks if the
 * the input is a valid date variable.
 * @param {array} input 
 * @returns true if input is in variables.json and date variable or false if not
 */
function isDateVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name)  to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='date'){return true}
    }
        {return false}
}

/**
 * This function takes an array from current parser rule and checks if the
 * the input is a valid code variable.
 * @param {array} input 
 * @returns true if input is in variables.json and code variable or false if not
 */
function isCodeVariable(input){
    var modifiedInput = arrayToString(input)

    for (const key in variablesJson) {
        // Compare the field_name (variable name) to the input from the parser
        if (key == modifiedInput && variablesJson[key].variable_type =='code'){ 
            return true
        }
    }
        {return false}
}

/**
 * Takes an array input from the parser and converts it to a string
 * @param {array} arr
 * @returns string
 */
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

 /**
  * Export all the functions, so they can be accesed by the grammar medcodelogic.pegjs
  */ 
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