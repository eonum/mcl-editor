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

     for(const key in tablesJson){
      for(let i = 0; i< tablesJson[key].length; i++){
        if(tablesJson[key][i] != undefined){
          if (tablesJson[key][i].label == modifiedInput){return true}
      }
  }  
} 
{return false}
}

// this function is not done yet
function isInList(input){
    var modifiedInput = arrayToString(input)
    return true;
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

//Parts of expression may be separated by and, or
expression
= fullExpression (_ and_or _ fullExpression )*  

//accepts and, or. Not casesensitive
and_or =
('and'i/'or'i)

//Parts of expression may be put in parentheses
fullExpression
=  _ simpleExpression _  / (lparen _ expression _ rparen) 

/*Expression may be:
- A comparison (age_years = 5)
- A calculation (5 + 5)
- A function
- any variable
- any number
*/
simpleExpression
= (function / comparison / calculation  / variable / number) _


/*Comparison may be:
- comparing dates
- comparing numbers
- comparing strings
- comparing code
*/
comparison 
= (dateCompare / numberCompare / stringCompare / codeCompare) _  

/*Calculation, may be in parentheses
*/
calculation 
= term  (_ ('+'/'-'/'*'/'/') _ term)* 

/*A term may be a calculation or anything with type number
*/
term
= (lparen _ calculation _ rparen) / numberOrVariableNumber / dateOrVariableDate / min_max / sides

/*Compares Strings and String Variables, Strings with Strings and String Variable with String Variable
*/
stringCompare
= (stringOrVariableString _ operator _ stringOrVariableString) 

/*Compares Numbers and Number Variables, Numbers with Numbers and Number Variables with Number Variables
*/
numberCompare
= (numberType _ operator _ numberType)

/*Compares Dates and Date Variables, Dates with Dates and Date Variables with Date Variable
*/
dateCompare
= (dateOrVariableDate _ operator _ dateOrVariableDate)

/*Compares Code with Code Variables, Code with Code and Code Variables with Code Variables
*/
codeCompare
= (codeOrVariableCode _ operator _ codeOrVariableCode)

/*
A function may be:
- inList
- inTable
- min
- max
- where
- not
- empty
- dates
- lookup
*/
function 
= (inList / inTable/ min_max / where / sides / not / empty / dates / lookup)

/*Function in List
Expects a variable of type code first, then "in list", then a list of codes in parantheses. "in list" is not case sensitive
*/
inList
= variableCode _ ('not' / "") _ 'in'i _'list'i _ codeList

/*Function in Table
Expects a variable first, then "in table", then a list of tables in parantheses. "in table" is not case sensitive
*/
inTable 
= variable _ ('not' / "") _ 'in'i_' table'i _ tableList _

/*Functions min and max
Expects "min" or "max", then a list of numberTypes
*/
min_max
= ('min'/'max') _ lparen _ numberList _ rparen _

/*Function where
Expects a variable or a function, then "where", then a comparison in parentheses
*/
where
= variable _ 'where'i _ lparen _ comparison _ rparen _

/*Function sides
Expects 'sides', then a any expression, then a ",", then either 'L', 'R', 'B' in parentheses
*/
sides
= 'sides'i _ lparen _ alwaysMatch _ ',' _  "'" ('L'i / 'R'i / 'B'i) "'"_ rparen _

/*Function not
Expects "not", then a comparison in parentheses
*/
not
= _'not'i _ lparen _ comparison _ rparen _

/*Function empty
Expects "empty", then a comparison in parentheses
*/
empty
= 'empty'i _ lparen comparison rparen

/*Function dates
Expects "dates", then any value in parantheses
*/
dates
= 'dates'i _ lparen alwaysMatch rparen

/*Function lookup 
accepts any strings in between parantheses, the strings may be separated by spaces
*/
lookup 
= 'lookup'i _ lparen (alwaysMatch _ )* rparen

/*Number List
Accepts a list of number Types separated by ","
*/
numberList
= numberType (_ ',' _ numberType)*

/*Number List
Accepts a list of codes Types separated by ","
*/
codeList
= lparen _ code (_ ',' _ code)* _ rparen

/*Number List
Accepts a list of tables Types separated by ","
*/
tableList
= lparen _ table  (_ ',' _ table _ )* _ rparen

/*Variable
Checks wether it is a variable of any type
*/
variable
= ((variableDate / variableNumber / variableString / variableCode) _) / (lparen (variableDate / variableNumber / variableString / variableCode) rparen _ )

/*Either a number or a number variable
*/
numberOrVariableNumber
= ((variableNumber / number) _) / (lparen (variableNumber / number) rparen _)

/*Either a string or a string variable
*/
stringOrVariableString
= ((variableString / string) _) / (lparen (variableString / string) rparen _)

/*Either a date or a string variable
*/
dateOrVariableDate
= ((variableDate / date) _) / (lparen (variableDate / date) rparen _)

/*Either a code or a code variable
*/
codeOrVariableCode
= ((variableCode / code) _) / (lparen (variableCode / code) rparen _)

/*Checks whether it is a string variable
*/
variableString
= variableName: alwaysMatch &{return isStringVariable(variableName) } {return arrayToString(variableName)} 

/*Checks whether it is a number variable
*/
variableNumber
= variableName: alwaysMatch &{return isNumberVariable(variableName) } {return arrayToString(variableName)}

/*Checks whether it is a date variable
*/
variableDate
= variableName: alwaysMatch &{return isDateVariable(variableName) } {return arrayToString(variableName)}

/*Checks whether it is a code variable
*/
variableCode
= variableName: alwaysMatch &{return isCodeVariable(variableName) } {return arrayToString(variableName)}

/*Types that can be used as a number
*/
numberType
= numberOrVariableNumber / dateOrVariableDate / min_max / sides /  calculation / dates

/*Format in which string should be written: Any letters with ' around them
*/
string
= "'" [_a-zA-Z]* "'" _

/*Format in which numbers should be written: Any numbers
*/
number
= digits:([0-9]+) _ 

/*Format in which date should be written: Either 8 numbers or 'date', then left parentheses, then ", then 8 numbers, then ", then right parentheses
*/
date
= digits:([12][0-9]|3|([0][1-9]/[1][0-2])([0][1-9]/[12][0-9]/[3][01])) _ {return arrayToString(digits)} / 'date' lparen '"' [12][0-9]|3|([0][1-9]/[1][0-2])([0][1-9]/[12][0-9]/[3][01]) '"'rparen


/*Format in which code should be written: Any letters or numbers
*/
code
=  ([a-zA-Z0-9*][.a-zA-Z0-9*]*) _

/*Possible operators: >=, <=, >, <, =, !=
*/
operator
= ('>=' / '<=' / '>' / '<' / '=' / '!=') _

table
= tableName:alwaysMatch &{return isInTable(tableName)} {return tableName}

/*
Defines left Parentheses
*/
lparen
= '(' _

/*
Defines right Parentheses
*/
rparen
= ')' _

/*
Defines space
*/
_
= (" " / [\t\n\r])*

/*
Matches anything
*/
alwaysMatch
= [0-9a-zA-Z_]+