require(['vs/editor/editor.main'], function() {
  // Define the language
  monaco.languages.register({ id: 'mylang' });

  // This method is used to load the data, however there are some problems as in this
  // way the loading is asynchron and the code below is run before the data is properly loaded.
  // TODO find a better way to load the data
  // NOTE there are some redunancies as the backend has developed a similar method, need to check with them which one to use / to uniform the methods
  function loadData(filePath) {
    return fetch(filePath)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error(error));
  }

  const varFilePath = 'variable_and_tables_info/variables.json';
  let mylangVariables;
  
  const tabFilePath = 'variable_and_tables_info/tables.json';
  let mylangTables;
  
  //TODO find out how to better handle the loading than with these promises
  const varPromise = loadData(varFilePath);
  const tabPromise = loadData(tabFilePath);

  // load variables data
  varPromise.then((variablesData) => {
    // save variables to global variable for later use
    window.variablesData = variablesData;
    mylangVariables = variablesData;
    mylangVariables = Object.entries(mylangVariables);
    mylangVariables = mylangVariables.map((variables) => variables[1])
  });

  // load tables data
  tabPromise.then((tablesData) => {
    // save tables to global variable for later use
    window.tablesData = tablesData;
    mylangTables = tablesData;
    mylangTables = Object.entries(mylangTables);
    mylangTables = mylangTables.map((tables) => tables[1])
    mylangTables = [].concat(...mylangTables)
  });

  // Define the list of keywords
  const mylangKeywords = [
    'continue', 'for', 'and', 'or',
    'if', 'break', 'else', 'return',
    'const', 'while', 'true', 'false',
  ];

  // Define the list of type keywords
  const mylangTypeKeywords = [
    'boolean', 'double', 'byte', 'int', 'short', 'char', 'void', 'long', 'float'
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
  
  Promise.all([varPromise, tabPromise]).then(() => {
    console.log(mylangVariables);
    console.log(mylangTables);

    //Add methods to call here:
  
    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('mylang', {
  
      keywords: mylangKeywords,
      
      typeKeywords: mylangTypeKeywords,

      //TODO properly map the variables
      variables: mylangVariables.map(variable => variable.field_name),

      //TODO properly map the tables
      tables: mylangTables.map(table => table.label),
      
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
    
        const suggestions = mylangKeywords.map(label => {
          return {
            label,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: label + ' '
          };
        }).concat(mylangFunctions.map(func => {
          return {
            label: func.label,
            kind: func.kind,
            insertText: func.insertText,
            detail: func.documentation
          };
        })).concat(mylangVariables.map(v => {
          return {
            label: v.field_name,
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: v.field_name,
            detail: v.name_de
          };
        })).concat(mylangTables.map(t => {
          return {
            label: t.label,
            //TODO find out what the differences are of the CompletionItemKind
            kind: monaco.languages.CompletionItemKind.Constant,
            insertText: t.label,
            detail: t.value + ""
          };
        }));

        // Filter the suggestions based on the current word
        let filteredSuggestions = suggestions.filter(suggestion => {
          //used for debugging
          //let test = suggestion.label.startsWith(word.word);
          //if(test){
          //  console.log(suggestion)
          //}
          //
          return suggestion.label.startsWith(word.word);
        });
        //log all possible options
        //console.log(filteredSuggestions)

        //the maximum options being suggested
        let maxOptions = 10
        // Cuts of if there are too many options
        if(filteredSuggestions.length > maxOptions){
          filteredSuggestions = filteredSuggestions.slice(0,maxOptions);
        }
        //console.log(filteredSuggestions)


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
        console.log(word.word)

        //if there is no word return
        if (!word) {
            return null;
        }

        var range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };
        
        // Check for matching keywords
        if (mylangKeywords.includes(word.word)) {
          return {
              range: range,
              contents: [{ value: word.word, }]
          };
        }

        // Check for matching functions
        const matchingMyLangFunction = mylangFunctions.find(f => (f.insertText === word.word || f.label === word.word));
        if (matchingMyLangFunction) {
          return {
              range: range,
              contents: [{ value: matchingMyLangFunction.documentation }]
          };
        }

        // Check for matching variables
        const matchingMyLangVariable = mylangVariables.find(v => v.field_name === word.word);
        if(matchingMyLangVariable){
          return {
            range: range,
            contents: [{ value: matchingMyLangVariable.name_de }]
          };
        }

        // Check for matching tables
        const matchingMyLangTable = mylangTables.find(t => t.label === word.word)
        if(matchingMyLangTable){
          console.log(matchingMyLangTable)
          return {
            range: range,
            contents: [{ value: matchingMyLangTable.value + "" }]
          }
        };
        
        return null;
      }
    });

  })
  
});