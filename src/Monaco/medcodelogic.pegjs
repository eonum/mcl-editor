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
const Function = require("./functions.js")
}}

start
= expression:expression {return Function.arrayToString(expression)}
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

//old version: inList = variable _ ('not' / "") _ 'in list' _ codeList
inList
= variableCode _ ('not' / "") _ 'in list' _ codeList

inTable
= variable _ ('not' / "") _ 'in table' _ tableList _

function
= (("'")* _ Date _ ("'")* / min_max / where / sides / not / empty / dates / lookup) _

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

//old version: codeList = = lparen _ (number / string / code) (_ ',' _ number / string / code)* _ rparen
codeList
= lparen _ code (_ ',' _ code)* _ rparen

tableList
= lparen _ table  (_ ',' _ table _ )* _ rparen

variable
= ((variableDate / variableNumber / variableString / variableCode) _) / (lparen (variableDate / variableNumber / variableString / variableCode) rparen _ )

numberOrVariableNumber
= ((variableNumber / number) _) / (lparen (variableNumber / number) rparen _)

stringOrVariableString
= ((variableString / string) _) / (lparen (variableString / string) rparen _)

dateOrVariableDate
= ((variableDate / ("'")* _ Date _("'")* _) _) / (lparen (variableDate / ("'")*_ Date _ ("'")*) rparen _)

codeOrVariableCode
= ((variableCode / code) _) / (lparen (variableCode / code) rparen _)

variableString
= variableName: alwaysMatch &{return Function.isStringVariable(variableName) } {return Function.arrayToString(variableName)} 

variableNumber
= variableName: alwaysMatch &{return Function.isNumberVariable(variableName) } {return Function.arrayToString(variableName)}

variableDate
= variableName: alwaysMatch &{return Function.isDateVariable(variableName) } {return Function.arrayToString(variableName)}

variableCode
= variableName: alwaysMatch &{return Function.isCodeVariable(variableName) } {return Function.arrayToString(variableName)}

string
= "'" [_a-zA-Z]* "'" _

number
= digits:([0-9]+) _ 

Date
= digits:([12][0-9]|3|([0][1-9]/[1][0-2])([0][1-9]/[12][0-9]/[3][01])) _ {return Function.arrayToString(digits)}


code
=  ([a-zA-Z0-9*][.a-zA-Z0-9*]*) _

operator
= ('>=' / '<=' / '>' / '<' / '=' / '!=') _

table
= tableName:alwaysMatch &{return Function.isInTable(tableName)} {return tableName}

lparen
= '(' _

rparen
= ')' _

//space rule
_
= (" " / [\t\n\r])*

alwaysMatch
= [0-9a-zA-Z_]+