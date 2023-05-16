require(['vs/editor/editor.main'], function() {
  // Define the language
  monaco.languages.register({ id: 'mylang' });

  /**
   * Mock method, will be replaced by eonum
   * @param {*} filePath file path to the JSON file
   * @returns a Promise with the data and a status of the asyncronous function
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   */
  async function loadTablesFromJSON(filePath){
    return fetch(filePath)
      .then(response => response.json())  // Turn the JSON into a JS object.
      .then(tabData => {
        // mylangTables = tabData;
        mylangTables = Object.entries(tabData); // Transforms everything into an Object.
        mylangTables = mylangTables.map((tables) => tables[1]); // Cuts off the name.
        mylangTables = [].concat(...mylangTables);  // Concatenate all the tables into one array.

        console.log("Original Tables before transformation")
        console.log(mylangTables)

        // Transforms the mylangTables into a Monaco Element
        mylangTables = mylangTables.map(t => {
          return {
            label: t.label,
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: t.label,
            detail: t.value + ""
          };
        })
      })
      .catch(error => console.error(error));
  }

  /**
   * Mock method, will be replaced by eonum
   * @param {*} filePath file path to the JSON file
   * @returns a Promise with the data and a status of the asyncronous function
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   */
  async function loadVariablesFromJSON(filePath){
    return fetch(filePath)
      .then(response => response.json())  // Turn the JSON into a JS object.
      .then(varData => {
        // mylangVariables = varData;
        mylangVariables = Object.entries(varData);  // Transforms everything into an Object.
        mylangVariables = mylangVariables.map(variables => variables[1]);  // Cuts off the name.

        console.log("Original Variables before transformation")
        console.log(mylangVariables)

        // Transforms the mylangVariables into a Monaco Element
        mylangVariables = mylangVariables.map(v => {
          // Set the correct documentation
          let options = ""
          if(!v.is_enum){
            options = "\nAlles vom Typ " + v.variable_type
          }
          else{
            //options = v.values
            let count = 1;
            for(opt of v.values_de){
              options += "\n" + count + ") " + opt;
              count += 1;
            }
          }

          return {
            label: v.field_name,
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: v.field_name,
            detail: v.name_de,
            documentation: "Mögliche Werte : " + options
          };
        })
      })
      .catch(error => console.error(error));
  }

  /**
   * A getter for all the lists
   * @returns an Array with all the Lists concatenated
   */
  function getAllLists(){
    return mylangKeywords
    .concat(mylangFunctions)
    .concat(mylangVariables)
    .concat(mylangTables);
  }

  // Links to the JSON files
  const varFilePath = '../../variables.json';
  const tabFilePath = '../../tables.json';

  let mylangVariables;
  let mylangTables;

  /** @todo There is a bug where after entering a keyword the editor doesn't work properly */
  /** @todo Are these really necessary / needed in medcoedelogic? */
  // Define the list of keywords
  const mylangKeywords = [
    {
      label: 'continue',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'continue'
    },
    {
      label: 'for',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'for',
    },
    {
      label: 'and',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'and',
    },
    {
      label: 'or',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'or',
    },
    {
      label: 'if',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'if',
    },
    {
      label: 'break',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'break',
    },
    {
      label: 'else',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'else',
    },
    {
      label: 'return',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'return',
    },
    {
      label: 'const',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'const',
    },
    {
      label: 'while',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'while',
    },
    {
      label: 'true',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'true',
    },
    {
      label: 'false',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'false',
    },
  ];

  /** @todo Are these really necessary / needed in medcoedelogic? */
  // Define the list of type keywords
  const mylangTypeKeywords = [
    {
      label: "boolean",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "boolean"
    },
    {
      label: "double",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "double"
    },
    {
      label: "byte",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "byte"
    },
    {
      label: "int",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "int"
    },
    {
      label: "short",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "short"
    },
    {
      label: "char",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "char"
    },
    {
      label: "void",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "void"
    },
    {
      label: "long",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "long"
    },
    {
      label: "float",
      kind: monaco.languages.CompletionItemKind.TypeParameter,
      insertText: "float"
    },
  ];

  // Define the list of functions
  const mylangFunctions = [
    { 
      label: 'inList', 
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: 'inList()', 
      documentation: [
        'Beschreibung',
        '','Gibt alle Codes zurück, die in beiden Listen enthalten sind.',
        '',
        'Signatur',
        '', 'List of Codes inList(List of Codes, List of Codes)', '',
        '',
        'Parameter',
        '- List of Codes (Liste von Codes): Die beiden zu vergleichenden Listen von Codes.',
        '',
        'Rückgabewert',
        '- (Liste von Codes): Die Codes, die in beiden Listen enthalten sind.',
        '',
        'Beispiel',
        '', 'inList([1, 2, 3], [2, 3, 4])', '// Gibt zurück: [2, 3]', ''
        ].join('\n')
    },
    { 
      label: 'not', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'not()',
      documentation: [
        'Beschreibung',
        '','Negiert einen booleschen Wert.',
        '',
        'Signatur',
        '', 'Boolean not(Boolean value)', '',
        '',
        'Parameter',
        '- value (Boolean): Der boolesche Wert, der negiert werden soll.',
        '',
        'Rückgabewert',
        '- (Boolean): Der negierte boolesche Wert.',
        '',
        'Beispiel',
        '', 'not(true)', '// Gibt zurück: false', ''
        ].join('\n')
    },
    { 
      label: 'inTable',
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'inTable()',
      documentation: [
        'Beschreibung',
        '','Gibt alle Codes zurück, die in der Liste und in mindestens einer der Tabellen enthalten sind.',
        '',
        'Signatur',
        '', 'Liste von Codes inTable(Liste von Codes, Liste von Tabellen)', '',
        '',
        'Parameter',
        '- Liste von Codes (Liste): Eine Liste von Codes.',
        '- Liste von Tabellen (Liste): Eine Liste von Tabellen.',
        '',
        'Rückgabe',
        '- (Liste): Die Liste der Codes, die in der Liste und in mindestens einer der Tabellen enthalten sind.',
        '',
        'Beispiel',
        '', 'inTable(["A", "B", "C"], [{ "A": true, "B": false }, { "B": true, "C": true }])', '// Returns: ["A", "B", "C"]', ''
        ].join('\n') 
    },
    { 
      label: 'min', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'min()',
      documentation: [
        'Beschreibung',
        '','Gibt das Minimum in einer Liste zurück.',
        '',
        'Signatur',
        '', 'Number min(List of numbers)', '',
        '',
        'Parameter',
        '- List of numbers (Liste von Zahlen): Die Liste von Zahlen, in der das Minimum gefunden werden soll.',
        '',
        'Rückgabe',
        '- (Number): Das Minimum in der Liste.',
        '',
        'Beispiel',
        '', 'min([4, 6, 2, 8])', '// Gibt zurück: 2', ''
        ].join('\n') 
    },
    { 
      label: 'max', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'max()',
      documentation: [
        'Beschreibung',
        '','Gibt das Maximum in einer Liste zurück.',
        '',
        'Signatur',
        '', 'Number max(List of numbers)', '',
        '',
        'Parameter',
        '- List of numbers (Liste von Zahlen): Die Liste von Zahlen, in denen das Maximum gefunden werden soll.',
        '',
        'Rückgabe',
        '- (Number): Das Maximum in der Liste von Zahlen.',
        '',
        'Beispiel',
        '', 'max([1, 2, 3, 4])', '// Gibt zurück: 4', ''
        ].join('\n')
    },
    { 
      label: 'dates', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'dates()',
      documentation: [
        'Beschreibung',
        '','Gibt das Datum in Tagen für jeden Code (Prozedur) zurück.',
        '',
        'Signatur',
        '', 'List of Numbers dates(List of Codes)', '',
        '',
        'Parameter',
        '- List of Codes (Liste von Codes): Die Liste der Codes (Prozeduren), für die das Datum in Tagen zurückgegeben wird.',
        '',
        'Rückgabe',
        '- (Liste von Zahlen): Die Liste der Datumsangaben in Tagen für jeden Code (Prozedur).',
        '',
        'Beispiel',
        '', 'dates(["A123", "B456", "C789"])', '// Gibt z.B. [100, 200, 300] zurück', ''
        ].join('\n')
    },
    { 
      label: 'date', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'date()',
      documentation: [
        'Beschreibung',
        '','Parst eine Zeichenfolge in ein Datum.',
        '',
        'Signatur',
        '', 'Date date(String dateLiteral)', '',
        '',
        'Parameter',
        '- dateLiteral (String): Die zu parsende Zeichenfolge, die das Datum darstellt.',
        '',
        'Rückgabe',
        '- (Date): Das geparste Datum.',
        ].join('\n') 
    },
    { 
      label: 'sides', 
      kind: monaco.languages.CompletionItemKind.Function, 
      insertText: 'sides()',
      documentation: [
        'Beschreibung',
        '','Gibt die Codes zurück, die mit einer bestimmten Seite (Prozedur) angegeben sind.',
        '',
        'Signatur',
        '', 'List of Codes sides(List of Codes, String side)', '',
        '',
        'Parameter',
        '- codes (List of Codes): Die Liste der Codes.',
        '- side (String): Der Name der Seite.',
        '',
        'Rückgabewert',
        '- (List of Codes): Die Liste der Codes, die mit der angegebenen Seite übereinstimmen.',
        ].join('\n') 
    },
  ];
  
  /**
   * Everything that relies on the completion of the loadingprocess for the myLangVariables and myLangTables is put in here
   * This ensures that the loading process is completed before continuing.
   */
  Promise.all([loadTablesFromJSON(tabFilePath), loadVariablesFromJSON(varFilePath)]).then(() => {
    console.log("Tables & Variables after loading")
    console.log(mylangTables);
    console.log(mylangVariables);
  
    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('mylang', {
  
      keywords: mylangKeywords.map(kw => kw.label),
      
      typeKeywords: mylangTypeKeywords.map(tkw => tkw.label),

      variables: mylangVariables.map(variable => variable.label),

      tables: mylangTables.map(table => table.label),

      functions: mylangFunctions.map(f => f.label),

      //functions: ['inList', 'sides', 'date', 'max', 'min', 'inTable', 'not'],
      
      operators: [
      '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
      '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
      '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
      '%=', '<<=', '>>=', '>>>='
      ],
      
      // we include these common regular expressions
      symbols:  /[=><!~?:&|+\-*\/\^%]+/,
      
      // C# style strings
      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  
      tokenizer: {
          
        root: [
          // identifiers and keywords
          [/[a-z_$][\w$]*/, { cases: { '@typeKeywords': 'keyword',
                                       '@keywords': 'keyword',
                                       '@variables': 'variable',
                                       "@tables" : "module",
                                       '@functions': 'function',
                                       '@default': 'identifier' }}],
          [/[A-Z][\w\$]*/, { cases: {  "@tables" : "module",
                                        "@default": 'type.identifier' }}],  // to show class names nicely
    
          // whitespace
          { include: '@whitespace' },
    
          // delimiters and operators
          [/[{}()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],
          [/@symbols/, { cases: { '@operators': 'operator',
                                  '@default'  : '' } } ],
    
          // @ annotations.
          // As an example, we emit a debugging log message on these tokens.
          // Note: message are supressed during the first load -- change some lines to see them.
          [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
    
          // numbers
          [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
          [/0[xX][0-9a-fA-F]+/, 'number.hex'],
          [/\d+/, 'number'],
    
          // delimiter: after number because of .\d floats
          [/[;,.]/, 'delimiter'],
    
          // strings
          [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
          [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],
    
          // characters
          [/'[^\\']'/, 'string'],
          [/(')(@escapes)(')/, ['string','string.escape','string']],
          [/'/, 'string.invalid']
        ],
    
        comment: [
          [/[^\/*]+/, 'comment' ],
          [/\/\*/,    'comment', '@push' ],    // nested comment
          ["\\*/",    'comment', '@pop'  ],
          [/[\/*]/,   'comment' ]
        ],
    
        string: [
          [/[^\\"]+/,  'string'],
          [/@escapes/, 'string.escape'],
          [/\\./,      'string.escape.invalid'],
          [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
        ],
    
        whitespace: [
          [/[ \t\r\n]+/, 'white'],
          [/\/\*/,       'comment', '@comment' ],
          [/\/\/.*$/,    'comment'],
        ],
      }

    });

    // Responsible for the autocompletion
    monaco.languages.registerCompletionItemProvider('mylang', {
      provideCompletionItems: function(model, position) {
        // Get the current word and its range
        var word = model.getWordUntilPosition(position);
        var range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        // Filter the suggestions based on the current word
        let filteredSuggestions = getAllLists().filter(suggestion => {
          return suggestion.label.startsWith(word.word);
        });

        // The maximum options being suggested.
        const MAX_OPTIONS = 10
        // Cuts of if there are too many options
        /** @todo Check if there is a better way to handle this. The problem is if there are too many options, just one is shown at the moment */
        if(filteredSuggestions.length > MAX_OPTIONS){
          filteredSuggestions = filteredSuggestions.slice(0,MAX_OPTIONS);
        }

        // Create a CompletionList from the suggestions and return it
        return {
          suggestions: filteredSuggestions,
          incomplete: true,
          replaceRange: range
        };
      }
    });

    // Responsible for the hover tooltips
    monaco.languages.registerHoverProvider('mylang', {
      provideHover: function(model, position) {
        // Get the current word and its range
        var word = model.getWordAtPosition(position);

        if(!word){
          return
        }

        var range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };

        // Filter the suggestions based on the current word
        let filteredToolTip = getAllLists().filter(suggestion => {
          return suggestion.label.includes(word.word);
        });

        /** @todo What should happen if multiple things match the possibility? */
        if(!filteredToolTip || filteredToolTip.length == 0){
          return{
            range: range,
            contents: [{value: ""}]
          }
        }
        else{
          return {
            range: range,
            contents: [{value: filteredToolTip[0].documentation}] // Get the first of the options and show documentation as tooltip
          }
        }
      }
    });

    function markError(error) {
      // Extract line number and column number from error message
      const match = error.message.match(/at .*:(\d+):(\d+)/);
      if (!match) {
        console.error('Failed to extract line and column number from error message:', error.message);
        return;
      }
      const lineNumber = parseInt(match[1]);
      const column = parseInt(match[2]);
    
      // Create error marker
      const model = editor.getModel();
      const marker = {
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: model.getLineMaxColumn(lineNumber),
        message: error.message,
        severity: monaco.MarkerSeverity.Error
      };
    
      // Add error marker to model
      monaco.editor.setModelMarkers(model, 'myMarker', [marker]);
    }
    

  })
  
});