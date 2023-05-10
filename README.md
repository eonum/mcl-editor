# README Medcodelogic Editor

## Brief description
This is the parser for medcodelogic.

In the file medcodelogic.pegjs you can find the current medcodelogic grammar rules.

Based on this rules the parser will be generated using the following commands (make sure peggy is installed globally):

create the parser.js from your grammar: -peggy medcodelogic.pegjs <br>


## Libraries
- Peggy for parser (use typescript) https://github.com/peggyjs/peggy.
- Codemirror https://codemirror.net/ or Monaco editor https://microsoft.github.io/monaco-editor/.
- Integrate Editor in react app (using typescript).
- Bootstrap for styling.

## Coding conventions / requirements
- Use functional components together with react hooks wherever possible
- Use camelCase notation (classes are PascalCase).
- Compile time constants (not keyword const) are always uppercase.
- All components reside in their own subdirectory in `/src/Components`.
- All services reside in their own subdirectory in `/src/Services`.
- All test-suites reside in their own subdirectory in `/src/__test_`.
- Every method has its own documentation written in Javadoc.
- Write everything in English (comments, variable names, function names, ...).
- Use self declaring code (f.e. method & variable names). 

## Setup
### Monaco Editor
https://microsoft.github.io/monaco-editor/monarch.html

Running the `/Monaco/main.html` requires the "live server" extension.
To run it: right click `/Monaco/main.html` and click open with live server.

### Development
Use `yarn` command to install all packages and dependencies from package.json.
Use `yarn start` to start local dev server.
### Production

### Testing
We use jest and puppeteer for our tests. Since we use typescript, we also need babel for transformation.
#### Prerequisites
You should be good to go after running `yarn`.
#### Config
All the configuration for jest, puppeteer and babel are specified in the  files jest.config.js, jest-puppeteer.config.js
and babel.config.js in the root folder and can be adapted to your needs. Since we do UI tests, we need a running server.
This is implemented via jest-puppeteer config file server block `server: { command: "yarn run startHeadlessTestPort"}` and
corresponding scripts in package.json
`"test": "jest --runInBand"` and `"startHeadlessOnTestPort": "BROWSER=none PORT=$npm_package_config_testPort yarn start"`.
#### Run tests
Use `yarn test` to start headless server and tests. You can also just test single suites using
`yarn test /path/to/test/file`. Currently the port is set to `localhost:8080` in package.json.

## Contact
For further question: 
- [info@eonum.ch](info@eonum.ch) -> eonum contact
- [eonum.ch/de/kontakt/](https://eonum.ch/de/kontakt/) -> eonum website

## Monaco
- See [this](https://microsoft.github.io/monaco-editor/typedoc/enums/languages.CompletionItemKind.html) for additional information about the CompletionItemKind
- See [this](https://microsoft.github.io/monaco-editor/typedoc/interfaces/languages.CompletionItem.html#documentation) for additional information about CompletionItems

<h1>Peggy Parser</h1>

ATTENTION: Do not change anything in the following files:
- Monaco/bundle.js
- Peggy/medcodelogic.js
if you need to change the parsing grammer follow the following instructions.

This is the parser for medcodelogic.<br>
In the file medcodelogic.pegjs you can find the current medcodelogic grammar rules.
Based on this rules the parser will be generated using the following commands (make sure peggy is installed globally):
create the parser.js from your grammar use the command peggy medcodelogic.pegjs (note here its peggy src/Peggy/medcodelogic.pegjs)

The generated parser can be used as an object in JS. But for use in the browser we had to bundle it. 
Therefore we used Webpack. All the necessary configurations are in the webpack.config.js

webpack.config.js if you want to use the function .parse from the bundled file (bundle.js) use Parser.parse(). We only use the .prase() function.
This function is exported (see webpack.config.js).
In the HTML the script for the bundle (actual Parser) needs to be initialized BEFORE the loader of the Monaco Code Editor.

If you change something in the grammar (medcodelogic.pegjs)  run peggy src/Peggy/medcodelogic.pegjs after your changes.
This will generate a new parser (medcodelogic.js). Then use npm run build to bundle the parser. Make sure to delet the old bundle.js file in the Monaco directory and replace the newly generated bundle.js file in the Monaco folder.

## Running
The submit button is disabled as long as there is no content or an error. Pressing the submit button will log the valid content into the console.