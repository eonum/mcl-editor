# README Medcodelogic Editor

## Brief description

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
