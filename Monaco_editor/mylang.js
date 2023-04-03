require(['vs/editor/editor.main'], function() {
  // Define the language
  monaco.languages.register({ id: 'mylang' });

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

  // Define the list of variables
  const mylangVariables = [
    { 
      label: 'api', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'api', 
      documentation: "Name: \n Zugriff per Schnittstelle \n\n" +
       "Beschreibung: \n Zugriff per Programmierschnittstelle: Aufruf nicht direkt über Casematch, sondern über eine andere Applikation (z.Bsp: ID DIACOS)\n\n" +
       "Type: \n string"
    },
    { 
      label: 'year', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'year', 
      documentation: "Name: \n Abrechnungsjahr \n\n" +
       "Beschreibung: \n \n\n" +
       "Type: \n number"
    },
    { 
      label: 'all_diagnoses', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'all_diagnoses', 
      documentation: "Name: \n Alle Diagnosen \n\n" +
       "Beschreibung: \n Haupt- und Nebendiagnosen \n\n" +
       "Type: \n code"
    },
    { 
      label: 'RCG', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'RCG', 
      documentation: "Name: \n RCG \n\n" +
       "Beschreibung: \n \n\n" +
       "Type: \n string"
    },
    { 
      label: 'adm_mode', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'adm_mode', 
      documentation: "Name: \n Aufnahmeart \n\n" +
       "Beschreibung: \n BFS Variablen 1.2.V03 und 1.2.V02 (Umrechnung gemäss Grouperdokumentation SwissDRG) \n\n" +
       "Type: \n string"
    },
    { 
      label: 'sep_mode', 
      kind: monaco.languages.CompletionItemKind.Variable, 
      insertText: 'sep_mode', 
      documentation: "Name: \n Entlassart \n\n" +
       "Beschreibung: \n BFS Variable 1.5.V02 und 1.5.V03 (Umrechnung gemäss SwissDRG Grouperdokumentation) \n\n" +
       "Type: \n string"
    },
    {
      label: 'los',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'los',
      documentation: "Name: \n Verweildauer in Tagen \n\n" +
        "Beschreibung: \n Berechnung anhand der BFS Variablen 1.5.V01, 1.2.V01 und 1.3.V04 \n\n" +
        "Type: \n number"
    },
    {
      label: 'hospital_id',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'hospital_id',
      documentation: "Name: \n Spital \n\n" +
        "Beschreibung: \n ID des Spitals \n\n" +
        "Type: \n string"
    },
    {
      label: 'yield',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'yield',
      documentation: "Name: \n Ertrag \n\n" +
        "Beschreibung: \n Ertrag \n\n" +
        "Type: \n number"
    },
    {
      label: 'prisma_1301',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'prisma_1301',
      documentation: "Name: \n Hauptkostenstelle PRISMA \n\n" +
        "Beschreibung: \n Hauptkostenstelle PRISMA \n\n" +
        "Type: \n string"
    },
    {
      label: 'drg',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'drg',
      documentation: "Name: \n DRG \n\n" +
        "Beschreibung: \n Gruppierte DRG \n\n" +
        "Type: \n code"
    },
    {
      label: 'mdc',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'mdc',
      documentation: "Name: \n MDC \n\n" +
          "Beschreibung: \n MDC - Major Diagnostic Category \n\n" +
          "Type: \n string"
    },
    {
      label: 'total_costs_without_ank',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'total_costs_without_ank',
      documentation: "Name: \n Gesamtkosten ohne ANK \n\n" +
        "Beschreibung: \n Gesamtkosten ohne ANK \n\n" +
        "Type: \n number"
    },
    {
      label: 'case_flag',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'case_flag',
      documentation: "Name: \n Abrechnungsstatus \n\n" +
        "Beschreibung: \n Abrechnungsstatus \n\n" +
        "Type: \n string"
    },
    {
      label: 'adm_date',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'adm_date',
      documentation: "Name: \n Aufnahmedatum \n\n" +
        "Beschreibung: \n Datum des Eintritts des Patienten ins Spital \n\n" +
        "Type: \n date"
    },
    {
      label: 'stat_drg',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'stat_drg',
      documentation: "Name: \n Statistische DRG \n\n" +
        "Beschreibung: \n Wahrscheinlichste DRG gemäss dem statistischen Modell / Klassifikator. Dies ist die DRG mit der grössten Ähnlichkeit zu diesem Fall. \n\n" +
        "Type: \n code"
    },
    {
      label: 'pccl',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'pccl',
      documentation: "Name: \n PCCL \n\n" +
        "Beschreibung: \n PCCL - Patient Complexity and Comorbidity Level \n\n" +
        "Type: \n number"
    },
    {
      label: 'ecw',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'ecw',
      documentation: "Name: \n Effektives Kostengewicht \n\n" +
        "Beschreibung: \n Effektives Kostengewicht nach Abzug/Zuschlag aller Ab- und Zuschläge \n\n" +
        "Type: \n number"
    },
    {
      label: 'total_costs',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'total_costs',
      documentation: "Name: \n Gesamtkosten mit ANK \n\n" +
        "Beschreibung: \n Gesamtkosten inklusive ambulanter und stationärer Notfallkosten \n\n" +
        "Type: \n number"
    },
    {
      label: 'age_days',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'age_days',
      documentation: "Name: \n Alter in Tagen \n\n" +
        "Beschreibung: \n Alter bei Eintritt berechnet aus den BFS Variablen 1.2.V01 und 1.1.V02. \n\n" +
        "Type: \n number"
    },
    {
      label: 'profit',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'profit',
      documentation: "Name: \n Gewinn \n\n" +
        "Beschreibung: \n Der erwartete Gewinn in CHF für diesen Fall. Der Gewinn wird aus den erwarteten Erlösen und den erwarteten Kosten berechnet. \n\n" +
        "Type: \n number"
    },
    {
      label: 'Sim',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'Sim',
      documentation: "Name: \n Sim \n\n" +
        "Beschreibung: \n Sim \n\n" +
        "Type: \n string"
    },
    {
      label: 'coverage',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'coverage',
      documentation: "Name: \n Kostendeckungsgrad \n\n" +
        "Beschreibung: \n Ertrag / Kosten \n\n" +
        "Type: \n number"
    },
    {
      label: 'baserate',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'baserate',
      documentation: "Name: \n Baserate \n\n" +
        "Beschreibung: \n Basisrate für die DRG-Entschädigung \n\n" +
        "Type: \n number"
    },
    {
      label: 'partition',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'partition',
      documentation: "Name: \n Partition \n\n" +
        "Beschreibung: \n DRG Partition (M -> Medizinisch, A -> Andere, O -> Operativ) \n\n" +
        "Type: \n string"
    },
    {
      label: 'encode_batch2017',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'encode_batch2017',
      documentation: "Name: \n SwissDRG Batch 2017 Format String \n\n" +
        "Beschreibung: \n String im Format des SwissDRG Batch 2017 \n\n" +
        "Type: \n string"
    },
    {
      label: 'med_outlier',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'med_outlier',
      documentation: "Name: \n Medizinische Übereinstimmung mit DRG \n\n" +
        "Beschreibung: \n Ähnlichkeit / medizinische Übereinstimmung mit DRG gewichtet nach DRG-Volumen. Dieses Mass wird verwendet für die Auswahl auffälliger Fälle. \n\n" +
        "Type: \n number"
    },
    {
      label: 'rules',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'rules',
      documentation: "Name: \n Prüfregeln \n\n" +
        "Beschreibung: \n Liste der Prüfregeln, die auf diesen Fall angewendet wurden. \n\n" +
        "Type: \n string"
    },
    {
      label: 'patient_id',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'patient_id',
      documentation: "Name: \n Patientenidentifikationsnummer PRISMA \n\n" +
        "Beschreibung: \n Eindeutige, jahresübergreifende, nichtsprechende Nummer pro Spital und Patient, die für jeden neuen Patienten vergeben wird. \n\n" +
        "Type: \n number"
    },
    {
      label: 'supplements_total',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'supplements_total',
      documentation: "Name: \n Gesamtbetrag der Zusatzentgelte \n\n" +
        "Beschreibung: \n \n\n" +
        "Type: \n number"
    },
    {
    label: 'supplements',
    kind: monaco.languages.CompletionItemKind.Variable,
    insertText: 'supplements',
    documentation: "Name: \n Zusatzentgelte SwissDRG Zusatzentgelte \n\n" +
      "Beschreibung: \n \n\n" +
      "Type: \n code"
    },
    {
      label: 'cost_per_day',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_per_day',
      documentation: "Name: \n Tageskosten Gesamtkosten mit ANK pro Aufenthaltstag \n\n" +
        "Beschreibung: \n \n\n" +
        "Type: \n number"
    },
    {
      label: 'id_mother',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'id_mother',
      documentation: "Name: \n ID ADmFall Mutter PRISMA \n\n" +
        "Beschreibung: \n Angabe der Id Admfall der Mutter (PRISMA Nr. 1200) bei Neugeborenen, welche in der Klinik geboren sind (Eintrittsart = 3)." + 
        "Falls die Geburt ambulant erfolgt und die Mutter deshalb in dieser Statistik nicht erfasst wurde, so ist bei dieser Variablen der Code 9999 zu codieren. \n\n" +
        "Type: \n string"
    },
    {
      label: 'likelihood',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'likelihood',
      documentation: "Name: \n Ähnlichkeit \n\n" +
        "Beschreibung: \n Ähnlichkeit dieses Falles zur gruppierten DRG. Berechnet als Zuweisungswahrscheinlichkeit im statistischen Modell." + 
        "Der Wert liegt zwischen 0 und 1. Die Ähnlichkeitswerte aller DRGs für einen Fall summieren sich auf 1. \n\n" +
        "Type: \n number"
    },
    {
      label: 'tags',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'tags',
      documentation: "Name: \n Tags \n\n" +
        "Beschreibung: \n Markierung mit Zusatzinformationen \n\n" +
        "Type: \n string"
    },
    {
      label: 'model_train_number',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'model_train_number',
      documentation: "Name: \n model_train_number \n\n" +
        "Beschreibung: \n Fallzahl für das DRG-Modell. \n\n" +
        "Type: \n number"
    },
    {
      label: 'top_ranks',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'top_ranks',
      documentation: "Name: \n top_ranks \n\n" +
        "Beschreibung: \n Liste der 5 ähnlichsten DRGs gemäss dem statistischen Modell. \n\n" +
        "Type: \n string"
    },
    {
      label: 'rank',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'rank',
      documentation: "Name: \n rank \n\n" +
        "Beschreibung: \n Ähnlichkeitsindex: Rang der gruppierten DRG im berechneten Modell." +
        "Ein Rang von 1 bedeutet, dass die gruppierte DRG auch die ähnlichste DRG ist. In diesem Fall stimmen das statistische Modell und die DRG-Gruppierung überein. \n\n" +
        "Type: \n number"
    },
    {
      label: 'bfs_41v02',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_41v02',
      documentation: "Name: \n bfs_41v02 \n\n" +
        "Beschreibung: \n Postleitzahl des den Patienten beherbergenden Hauses (Spitals) als Standort-Merkmal zu jedem Fall. Die Frage des Standortes eines Spitals ist insbesondere für die Versorgungsplanung (Zugänglichkeit) eine wichtige Frage. Sie kann anhand der bisherigen Variablen nicht mehr entschieden werden, weil die rechtliche Einheit immer weniger mit der geografischen Einheit übereinstimmt. \n\n" +
        "Type: \n string"
    },
    {
      label: 'cost_v101',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_v101',
      documentation: "Name: \n cost_v101 \n\n" +
        "Beschreibung: \n H+ Kontenrahmen: 400 \n\n" +
        "Type: \n number"
    },
    {
      label: 'bfs_22v01',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_22v01',
      documentation: "Name: \n bfs_22v01 \n\n" +
        "Beschreibung: \n Lebend- oder totgeboren \n\n" +
        "Type: \n string"
    },
    {
      label: 'cost_v102',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_v102',
      documentation: "Name: \n cost_v102 \n\n" +
        "Beschreibung: \n Blut und Blutprodukte (H+ Kontenrahmen: 400) \n\n" +
        "Type: \n number"
    },
    {
      label: 'bfs_22v02',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_22v02',
      documentation: "Name: \n bfs_22v02 \n\n" +
        "Beschreibung: \n Angabe für Mehrlingsgeburten \n\n" +
        "Type: \n number"
    },
    {
      label: 'cost_v103',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_v103',
      documentation: "Name: cost_v103\n\n" +
        "Beschreibung: Medizinisches Material\n\n" +
        "Type: number"
    },
    {
      label: 'bfs_02v01',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_02v01',
      documentation: "Name: bfs_02v01\n\n" +
        "Beschreibung: Anonymer Verbindungskode\n\n" +
        "Type: string"
    },
    {
      label: 'cost_v104',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_v104',
      documentation: "Name: cost_v104\n\n" +
        "Beschreibung: Implantate\n\n" +
        "Type: number"
    },
    {
      label: 'bfs_22v03',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_22v03',
      documentation: "Name: bfs_22v03\n\n" +
        "Beschreibung: Geburtsrang bei Mehrlingsgeburten\n\n" +
        "Type: number"
    },
    {
      label: 'bfs_02v02',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'bfs_02v02',
      documentation: "Name: bfs_02v02\n\n" +
        "Beschreibung: Kennzeichnung des Statistikfalls\n\n" +
        "Type: string"
    },
    {
      label: 'cost_v105',
      kind: monaco.languages.CompletionItemKind.Variable,
      insertText: 'cost_v105',
      documentation: "Name: cost_v105\n\n" +
        "Beschreibung: Medizinische, diagnostische und therapeutische Fremdleistungen (exkl. Arzthonorare)\n\n" +
        "Type: number"
    }
  ];

  
  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider('mylang', {
  
      keywords: mylangKeywords,
      
      typeKeywords: mylangTypeKeywords,

      variables: mylangVariables.map(variable => variable.label),
      
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
                                       '@default': 'identifier' } }],
          [/[A-Z][\w\$]*/, 'type.identifier' ],  // to show class names nicely
    
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
  
  
  // autocompletion
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
          insertText: func.label + '()',
          detail: func.documentation
        };
      }).concat(mylangVariables).map(v => {
        return {
          label: v.label,
          kind: v.kind,
          insertText: v.label,
          detail: v.documentation
        };
      }));

      // Filter the suggestions based on the current word
      const filteredSuggestions = suggestions.filter(suggestion => {
        return suggestion.label.startsWith(word.word);
      });

      // Create a CompletionList from the suggestions and return it
      return {
        suggestions: filteredSuggestions,
        incomplete: true,
        replaceRange: range
      };
    }
  });

  monaco.languages.registerHoverProvider('mylang', {
    provideHover: function(model, position) {
        // Get the current word and its range
        var word = model.getWordAtPosition(position);
        if (!word) {
            return null;
        }

        var range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
        };
        
        // Check if the word is a variable or function
        if (mylangKeywords.includes(word.word)) {
          return {
              range: range,
              contents: [{ value: word.word, }]
          };
        }
        const matchingMyLangFunction = mylangFunctions.find(f => f.label === word.word);
        if (matchingMyLangFunction) {
          return {
              range: range,
              contents: [{ value: matchingMyLangFunction.documentation }]
          };
        }
        const matchingMyLangVariable = mylangVariables.find(v => v.label === word.word);
        if(matchingMyLangVariable){
          return {
            range: range,
            contents: [{ value: matchingMyLangVariable.documentation }]
          };
        }
        
        return null;
    }
  });
});
