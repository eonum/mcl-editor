# README Medcodelogic Editor

## Brief description

## Coding conventions / requirements
- React app with typescript (if possible also for parser library).
- Use functional components together with react hooks wherever possible
- Use camelCase notation (classes are PascalCase).
- Constants are always uppercase.
- All components reside in their own subdirectory in `/src/Components`.
- All services reside in their own subdirectory in `/src/Services`.
- All test-suites reside in their own subdirectory in `/src/__test_`.
- Every method has its own documentation written in Javadoc.
- Write everything in English (comments, variable names, function names, ...).
- Try to use self declaring code (f.e. method & variable names) and 
## Setup
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
- +41 (0)31 311 17 06 -> eonum contact
- [info@eonum.ch](info@eonum.ch) -> eonum contact
- [jan.koch@students.unibe.ch](jan.koch@students.unibe.ch) -> university development team
- [eonum.ch/de/kontakt/](https://eonum.ch/de/kontakt/) -> eonum website
