/**
  * WICHTIG: Es werden solange Regeln geprüft, bis eine Regel komplett matched.
  * Teilregeln wie (variable operator dataType) matchen erst dann, wenn Variable, Operator
  * und dataType matchen. Failt eine Regel, alles was in der Klammer steht ignoriert und zur
  * nächsten Regel gesprungen. Aus diesem Grund wird bei fehlerhafter Eingabe erst nach dem Prüfen
  * ALLER Regeln eine Exception geworfen.
  *
  * TODO: Aktualisieren!
**/

{{

//import variablesJson from '.variables.json'

const variablesJson = require('../../variables.json')
const tablesJson = require('../../tables.json')
var currentGlobalDataType;
var currentGlobalVariableName;
var currentGlobalData;

function isInTable(input){
    var modifiedInput = arrayToString(input)

       for (const key in tablesJson) {
        // Compare key with input
        if (key == modifiedInput){return true}
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
 };
}}

start
= expression:expression {return arrayToString(expression)}
//(age = 5 and age = 6) or age = 7 and things like that do not work yet

expression
= paranthesesSimpleExpression _ and_or* _ 

and_or 
= (('and'i/'or'i) _ paranthesesSimpleExpression _)

paranthesesSimpleExpression
= lparen paranthesesSimpleExpression rparen / simpleExpression

simpleExpression
= (comparison / calculation / inList / inTable / function / variable / number) _

comparison 
= ((dateCompare / numberCompare / stringCompare / codeCompare) _ / (lparen (numberCompare / stringCompare / dateCompare) rparen)) _

calculation 
= (numberOrVariableNumber) _ (('+'/'-'/'*'/'/') _ (numberOrVariableNumber))+ _

stringCompare
= (stringOrVariableString _ operator _ stringOrVariableString) 

numberCompare
= ((calculation / numberOrVariableNumber) _ operator _ (calculation / numberOrVariableNumber))

dateCompare
= (dateOrVariableDate _ operator _ dateOrVariableDate)

codeCompare
= (codeOrVariableCode _ operator _ codeOrVariableCode)

inList
= variable _ ('not' / "") _ 'in list' _ codeList

inTable
= variable _ ('not' / "") _ 'in table' _ tableList _

function
= (Date / min_max / where / sides / not / empty / dates / lookup) _

min_max
= ('min'/'max') _ lparen _ list _ rparen _

where
= variable _ 'where' _ comparison _

sides
= 'sides' _ lparen _ list _ ',' _ ('L' / 'R' / 'B') _ rparen _

not
= _'not' _ comparison _

list
= 'list' _ lparen alwaysMatch rparen

empty
= 'empty' _ lparen alwaysMatch rparen

dates
= 'dates' _ lparen alwaysMatch rparen

//lookup accepts any strings in between parantheses, the strings may be separated by spaces
lookup 
= 'lookup' _ lparen (alwaysMatch _ )* rparen

codeList
= lparen _ (number / string / code) (_ ',' _ number / string / code)* _ rparen

tableList
= lparen _ table  (_ ',' _ table _ )* _ rparen

variable
= ((variableDate / variableNumber / variableString / variableCode) _) / (lparen (variableDate / variableNumber / variableString / variableCode) rparen _ )

numberOrVariableNumber
= ((variableNumber / number) _) / (lparen (variableNumber / number) rparen _)

stringOrVariableString
= ((variableString / string) _) / (lparen (variableString / string) rparen _)

dateOrVariableDate
= ((variableDate / Date) _) / (lparen (variableDate / Date) rparen _)

codeOrVariableCode
= ((variableCode / code) _) / (lparen (variableCode / code) rparen _)

variableString
= variableName: alwaysMatch &{return isStringVariable(variableName) } {return arrayToString(variableName)} 

variableNumber
= variableName: alwaysMatch &{return isNumberVariable(variableName) } {return arrayToString(variableName)}

variableDate
= variableName: alwaysMatch &{return isDateVariable(variableName) } {return arrayToString(variableName)}

variableCode
= variableName: alwaysMatch &{return isCodeVariable(variableName) } {return arrayToString(variableName)}

string
= "'" [_a-zA-Z]* "'" _

number
= digits:([0-9]+) _ 

Date
= digits:([12][0-9]|3|([0][1-9]/[1][0-2])([0][1-9]/[12][0-9]/[3][01])) _ {return arrayToString(digits)}


code
= "'" ([a-zA-Z0-9*][.a-zA-Z0-9*]*) "'" _

operator
= ('>=' / '<=' / '>' / '<' / '=' / '!=') _

table
= tableName:alwaysMatch &{return isInTable(tableName)} {return tableName}

lparen
= '(' _

rparen
= ')' _

//space rule
_
= (" " / [\t\n\r])*

alwaysMatch
= [0-9a-zA-Z_]+
