/**Grammarfix: all the rules who use keywords eg. "or" are case-insensitive. I added an "i" at the end of every keyword
so OR, oR, Or is also excepted.
**/
start =
expression { return text()}


expression
= or

or =
and space* ('or'i space* and)*

and =
comparison space* ('and'i space* comparison)*

comparison =
sum space* (operator space * sum)?

sum =
product space* (('+' / '-') space* product)*

product =
where space* (('*'/ '/') space* in_table)*

where = 
in_table space* ('where' space* ((lparen  expression rparen) / expression) space*)?

in_table =
in_list space* (('not'i? space* 'in table'i 's'i?) lparen table_list rparen space*)?

in_list =
simple_expression space* (('not'i? space* 'in list'i) lparen code_list rparen space*)?

simple_expression =
(lookup / function_call / variable / constant / lparen space* expression space* rparen) space*

constant =
(string / number) space*

variable =
identifier

function_call =
identifier lparen list rparen space*

lookup = 
space* 'lookup'i lparen variable space* 'in'i space* table space* ('by'i space* variable)? space* rparen space*

list =
(expression (',' space* expression)*)?

table_list =
(table (',' space* table)*)?

table =
([_a-zA-Z][_a-zA-Z0-9]*) space*

code_list =
(code (',' space* code)*)?

number =
('-'? [0-9]+) space*

string =
'"' ([^"]*) '"' / "'" ([^']*) "'" space*

operator =
'>=' / '<=' / '>' / '<' / '=' / '!='

code = 
([a-zA-Z0-9*][.a-zA-Z0-9*]*) space*

identifier = 
([_a-zA-Z][_a-zA-Z0-9]*) space*

lparen =
'(' space*

rparen = 
')' space*

space 
 = " " / [\t\n\r]
