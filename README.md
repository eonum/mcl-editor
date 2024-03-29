# README Medcodelogic Editor

## Brief description
This medcodelogic parser is based on **Peggy** (https://github.com/peggyjs/peggy), a javascript parser. The frontend is made with codeeditor **Monaco** (https://microsoft.github.io/monaco-editor/monarch.html).

The parser is generated by Peggy, based on a grammar. The current medcodelogic grammar rules are to be found in **medcodelogic.pegjs**.
Based on this rules the parser can be generated using the following commands (make sure peggy is installed globally):

## Parsing with Peggy ##
Create the parser.js from your grammar:

`$peggy medcodelogic.pegjs`

### Testing peggy locally ###
Parsing with Peggy can be tested locally without further installation: 

`$peggy -test foo`

Actually the two peggy components are to be found in /src/:
- **medcodelogic.js** (the generated parser)
- **medcodelogic.pegjs** (the grammar)

## Testing with jest ##
This project uses **jest** (https://jestjs.io) for testing. All test-suites reside in their own subdirectory in `/src/__test_`.

There exists two scripts, found under: /src/__test__/
- **medcodelogic.test.js** (tests the parsing functions)
- **functions.test.js** (tests the imports from tables.json and variables.json)

These test scripts can be run easily as follows:

`yarn test` or individually using `yarn test  /src/__test__/functions.test.js`


## Frontend / GUI ##
The current HTML file takes a string as input, hands it over to the parser. The returned output is either a string (when parsed successfully) or an exception with an error warning.

The generated parser can be used as an object in JS. But for use in the browser we had to bundle it. Therefore we used Webpack. All the necessary configurations are to be found in the webpack.config.js.
If you want to use the function .parse from the bundled file (bundle.js) use Parser.parse(). We only use the .parse() function. This function is exported (see webpack.config.js).
The script for the bundle (the actual parser) needs to be initialized in main.html _before_ the loader of code editor Monaco.

If you change something in the grammar (medcodelogic.pegjs)  run `peggy src/Peggy/medcodelogic.pegjs` after your changes. This will generate a new parser (medcodelogic.js). Then use `yarn run build` to bundle the parser. Make sure to delete the old bundle.js file in the Monaco directory and replace the newly generated bundle.js file in the folder "/Monaco".

Alternativlely you can run **src/deploy.sh** to execute both the peggy and the build command.


### Submit the parsed result / further integration  ###
The submit button is disabled as long as there is no content or an error. Pressing the submit button will log the valid content into the console.


## Libraries
- Bootstrap for styling.

## Coding conventions / requirements
- Use functional components together with react hooks wherever possible
- Use camelCase notation (classes are PascalCase).
- Compile time constants (not keyword const) are always uppercase.
- All components reside in their own subdirectory in `/src/Components`.
- All services reside in their own subdirectory in `/src/Services`.
- Every method has its own documentation written in Javadoc.
- Write everything in English (comments, variable names, function names, ...).
- Use self declaring code (f.e. method & variable names). 

## Setup
### Monaco Editor

Running the `/Monaco/main.html` requires the "live server" extension.
#### Live Server Installation
Open VSCode and type in `live server` in the extension search bar (Ctrl + Shift + X) and click install.

Alternatively:
Open VSCode, type ctrl+P, and then type: 
`ext install ritwickdey.liveserver`

After Installation right click the main.html file and select `Open with Live Server` to run it.

### Development
Use `yarn` command to install all packages and dependencies from package.json.
Use `yarn start` to start local dev server.

#### Prerequisites
You should be good to go after running `yarn`.


## Contact
For further question: 
- [info@eonum.ch](info@eonum.ch) -> eonum contact
- [eonum.ch/de/kontakt/](https://eonum.ch/de/kontakt/) -> eonum website

## Monaco
- See [this](https://microsoft.github.io/monaco-editor/typedoc/enums/languages.CompletionItemKind.html) for additional information about the CompletionItemKind
- See [this](https://microsoft.github.io/monaco-editor/typedoc/interfaces/languages.CompletionItem.html#documentation) for additional information about CompletionItems


## Some theory: Parsing Expression Grammar (PEG) ##
PEG (Parsing Expression Grammar)**: In computer science, a parsing expression grammar (PEG) is a type of analytic formal grammar, i.e. it describes a formal language in terms of a set of rules for recognizing strings in the language. https://en.wikipedia.org/wiki/Parsing_expression_grammar

- Each parsing function conceptually takes an **input string as its argument**, and yields one of the following results:
**success**, in which the function may optionally move forward or consume one or more characters of the input string supplied to it, or
**failure**, in which case no input is consumed.
- The fundamental difference between context-free grammars and parsing expression grammars is that the **PEG's choice operator is ordered**. If the first alternative succeeds, the second alternative is ignored.

Some good tutorials are to be found here:
- Beginning to parse with Peggy https://coderwall.com/p/316gba/beginning-parsers-with-peg-js (easy beginner tutorial for simple grammar)
- Some simple grammar examples: https://tomassetti.me/a-peggy-js-tutorial/ 
- Some good examples of simple grammar rules: https://peggyjs.org/documentation.html#grammar-syntax-and-semantics

To start or to test simple grammar, you can start online in the following parsing sandbox: https://peggyjs.org/
