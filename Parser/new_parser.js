{
    "age_years": {
        "field_name": "age_years",
        "name_de": "Alter in Jahren bei Eintritt",
        "name_fr": "Age en années",
        "name_it": "Età in anni",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "case_number": {
        "field_name": "case_number",
        "name_de": "Fallnummer der Fallkostenstatistik",
        "name_fr": "Clef du cas Numéro du cas dans la statistique des coûts par cas",
        "name_it": "Chiave del caso",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "age_days": {
        "field_name": "age_days",
        "name_de": "Alter in Tagen",
        "name_fr": "Age en jour",
        "name_it": "Età in giorni",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "adm_weight": {
        "field_name": "adm_weight",
        "name_de": "Aufnahmegewicht",
        "name_fr": "Poids de l'admission",
        "name_it": "Peso all'ammissione",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "sex": {
        "field_name": "sex",
        "name_de": "Geschlecht",
        "name_fr": "Sexe",
        "name_it": "Sesso",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "M",
            "W",
            "U"
        ],
        "values_de": [
            "männlich",
            "weiblich",
            "unbekannt"
        ],
        "values_fr": [
            "masculin",
            "féminin",
            "inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "adm_mode": {
        "field_name": "adm_mode",
        "name_de": "Aufnahmeart",
        "name_fr": "Type d'admission",
        "name_it": "Genere di ammissione",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "01",
            "11",
            "06",
            "99"
        ],
        "values_de": [
            "Normal",
            "Verlegt (Aufenthalt länger als 24 Stunden im verlegenden Spital)",
            "Verlegt (Aufenthalt kürzer als 24 Stunden im verlegenden Spital)",
            "Unbekannt"
        ],
        "values_fr": [
            "normal",
            "transféré (Séjour plus long que 24 heures dans l'hôpital de soins aigus transférant.)",
            "transféré (Séjour plus court que 24 heures dans l'hôpital de soins aigus transférant.)",
            "inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "sep_mode": {
        "field_name": "sep_mode",
        "name_de": "Entlassart",
        "name_fr": "Type de sortie",
        "name_it": "Genere di uscita",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "07",
            "06",
            "04",
            "00",
            "99"
        ],
        "values_de": [
            "Verstorben",
            "Verlegt (in anderes Spital)",
            "Gegen ärztlichen Rat beendet",
            "Normal",
            "Unbekannt"
        ],
        "values_fr": [
            "décédé",
            "transféré (dans un autre hôpital)",
            "terminé contre l'avis médical",
            "normal",
            "inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "los": {
        "field_name": "los",
        "name_de": "Verweildauer in Tagen",
        "name_fr": "Durée du séjour en jours",
        "name_it": "Durata della degenza in giorni",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "pdx": {
        "field_name": "pdx",
        "name_de": "Hauptdiagnose",
        "name_fr": "Diagnostic principal",
        "name_it": "Diagnosi principale",
        "variable_type": "code",
        "code_model": "IcdCode",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "icd"
    },
    "hmv": {
        "field_name": "hmv",
        "name_de": "Beatmungsdauer in Stunden",
        "name_fr": "Durée de respiration artificielle",
        "name_it": "Durata della respirazione assistita in ore",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "prisma_1301": {
        "field_name": "prisma_1301",
        "name_de": "Hauptkostenstelle PRISMA",
        "name_fr": "Centre de prise en charge des coûts PRISMA",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_48v17-20": {
        "field_name": "bfs_48v17-20",
        "name_de": "Aufenthaltsort nach Zwischenaustritt",
        "name_fr": "Séjour après interruption",
        "name_it": "Nome italiano",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "diagnoses": {
        "field_name": "diagnoses",
        "name_de": "Nebendiagnosen",
        "name_fr": "Diagnostics secondaire",
        "name_it": "Diagnosi secondarie",
        "variable_type": "code",
        "code_model": "IcdCode",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "icd"
    },
    "drg": {
        "field_name": "drg",
        "name_de": "DRG",
        "name_fr": "DRG",
        "name_it": "DRG",
        "variable_type": "code",
        "code_model": "Drg",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "drg"
    },
    "mdc": {
        "field_name": "mdc",
        "name_de": "MDC",
        "name_fr": "MDC",
        "name_it": "MDC",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "ecw": {
        "field_name": "ecw",
        "name_de": "Effektives Kostengewicht",
        "name_fr": "Cost-weight effectif",
        "name_it": "Cost-weight effettivo",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "case_flag": {
        "field_name": "case_flag",
        "name_de": "Abrechnungsstatus",
        "name_fr": "Étiquette de la facture",
        "name_it": "Cost weight flag",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "01",
            "02",
            "03",
            "04",
            "05"
        ],
        "values_de": [
            "Normallieger",
            "Oberer Outlier",
            "Unterer Outler",
            "Verlegungsabschlagspflichtig",
            "Unbewertete DRG"
        ],
        "values_fr": [
            "Inlier",
            "High-outlier",
            "Low-outlier",
            "Soumis à réduction de transfert",
            "DRG non évalué"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "adm_date": {
        "field_name": "adm_date",
        "name_de": "Aufnahmedatum",
        "name_fr": "Date d'admission",
        "name_it": "Data di ricovero",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "stat_drg": {
        "field_name": "stat_drg",
        "name_de": "Statistische DRG",
        "name_fr": "DRG statistique",
        "name_it": "DRG statistico",
        "variable_type": "code",
        "code_model": "Drg",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "drg"
    },
    "bfs_02v01": {
        "field_name": "bfs_02v01",
        "name_de": "Anonymer Verbindungskode",
        "name_fr": "Code de liaison anonyme",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "pccl": {
        "field_name": "pccl",
        "name_de": "PCCL",
        "name_fr": "PCCL",
        "name_it": "PCCL",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_02v02": {
        "field_name": "bfs_02v02",
        "name_de": "Kennzeichnung des Statistikfalls",
        "name_fr": "Définition du cas",
        "name_it": "Nome italiano",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "A",
            "B",
            "C"
        ],
        "values_de": [
            "normaler Minimaldatensatz",
            "Administrative Meldung mit redu- ziertem Datensatz",
            "Administrative Meldung mit volls- tändigem Minimaldatensatz"
        ],
        "values_fr": [
            "Saisie au moyen d’une liste de données minimale",
            "Annonce administrative avec liste de données réduite",
            "Annonce administrative avec liste de données minimale"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_03v02": {
        "field_name": "bfs_03v02",
        "name_de": "Psychiatrie-Datensatz",
        "name_fr": "Questionnaire psychiatrique",
        "name_it": "Nome italiano",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "nein",
            "ja"
        ],
        "values_fr": [
            "non",
            "oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_22v07": {
        "field_name": "bfs_22v07",
        "name_de": "Verlegung Kind in anderes Spital",
        "name_fr": "Transfert de l'enfant das un autre hôpital",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            ""
        ],
        "values_de": [
            "Nein",
            "Ja",
            "leer"
        ],
        "values_fr": [
            "non",
            "oui",
            "vide"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_23v01": {
        "field_name": "bfs_23v01",
        "name_de": "Geburtsdatum der Mutter",
        "name_fr": "Date de naissance de la mère",
        "name_it": "",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_03v03": {
        "field_name": "bfs_03v03",
        "name_de": "Patientengruppen-Datensatz",
        "name_fr": "Questionnaire par groupes de patients",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "nein",
            "ja"
        ],
        "values_fr": [
            "non",
            "oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_03v04": {
        "field_name": "bfs_03v04",
        "name_de": "Kantonaler Datensatz",
        "name_fr": "Questionnaire cantonal",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "nein",
            "ja"
        ],
        "values_fr": [
            "non",
            "oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_11v02": {
        "field_name": "bfs_11v02",
        "name_de": "Geburtsdatum",
        "name_fr": "Date de naissance",
        "name_it": "Data di nascita",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_11v04": {
        "field_name": "bfs_11v04",
        "name_de": "Wohnort (Region)",
        "name_fr": "Région de domicile",
        "name_it": "Nome italiano",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_12v01": {
        "field_name": "bfs_12v01",
        "name_de": "Eintrittsdatum und -Stunde",
        "name_fr": "Date et heure d’admission",
        "name_it": "",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_12v02": {
        "field_name": "bfs_12v02",
        "name_de": "Aufenthaltsort vor dem Eintritt",
        "name_fr": "Séjour avant l’admission",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "55",
            "66",
            "83",
            "84"
        ],
        "values_de": [
            "Zuhause",
            "Zuhause mit SPITEX Versorgung",
            "Krankenheim, Pflegeheim",
            "Altersheim, andere sozialmed. Institutionen",
            "Psychiatrische Klinik, anderer Betrieb",
            "anderes Krankenhaus (Akutspital) oder Geburtshaus",
            "Strafvollzugsanstalt",
            "andere",
            "unbekannt",
            "PsychiatrischAbteilung/Klinik, gleicher Betrieb",
            "Akutabteilung/-klinik, gleicher Betrieb",
            "Rehabilitationsklinik, anderer Betrieb",
            "Rehabilitations-abteilung/-klinik, gleicher Betrieb"
        ],
        "values_fr": [
            "Domicile",
            "Domicile avec soins à domicile",
            "Etablissement de santé non hospitalier médicalisé",
            "Etablissement de santé non hospitalier non médicalisé",
            "Hôpital psychiatrique, autre établissement",
            "Autre hôpital (soins aigus) ou maison de naissance",
            "Institution d’exécution des peines",
            "Autre",
            "Inconnu",
            "Division/clinique psychiatrique, même établissement",
            "Division/Clinique de soins aigus, même établissement",
            "Clinique de réadaptation, autre établissement",
            "Division/clinique de réadaptation, même établissement"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_11v05": {
        "field_name": "bfs_11v05",
        "name_de": "Nationalität",
        "name_fr": "Nationalité",
        "name_it": "nazionalità",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_12v03": {
        "field_name": "bfs_12v03",
        "name_de": "Eintrittsart",
        "name_fr": "Mode d’admission",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "8",
            "9"
        ],
        "values_de": [
            "Notfall (Behandlung innerhalb von 12 Std. unabdingbar)",
            "angemeldet, geplant",
            "Geburt (Kind in dieser Klinik geboren)",
            "interner Übertritt",
            "„Verlegung innerhalb 24 Std.“",
            "andere",
            "unbekannt"
        ],
        "values_fr": [
            "Urgence (nécessité d’un traitement dans les 12 heures)",
            "Annoncé, planifié",
            "Naissance (enfant né intra-muros)",
            "Transfert interne",
            "Transfert dans les 24 heures",
            "Autre",
            "Inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "drugs": {
        "field_name": "drugs",
        "name_de": "Medikamente",
        "name_fr": "Médicaments",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_12v04": {
        "field_name": "bfs_12v04",
        "name_de": "Einweisende Instanz",
        "name_fr": "Décision d’envoi",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "8",
            "9"
        ],
        "values_de": [
            "selbst, Angehörige",
            "Rettungsdienst (Ambulanz, Polizei)",
            "Arzt",
            "nichtmedizinischer Therapeut",
            "sozialmedizinischer Dienst",
            "Justizbehörden",
            "andere",
            "unbekannt"
        ],
        "values_fr": [
            "Initiative propre, proches",
            "Service de sauvetage (ambulance, police)",
            "Médecin",
            "Thérapeute non médecin",
            "Services sociaux",
            "Autorités judiciaires",
            "Autre",
            "Inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_13v01": {
        "field_name": "bfs_13v01",
        "name_de": "Behandlungsart",
        "name_fr": "Type de prise en charge",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "3",
            "9"
        ],
        "values_de": [
            "ambulant",
            "stationär",
            "unbekannt"
        ],
        "values_fr": [
            "Ambulatoire",
            "Hospitalisation",
            "Inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_13v02": {
        "field_name": "bfs_13v02",
        "name_de": "Klasse",
        "name_fr": "Classe",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "9"
        ],
        "values_de": [
            "allgemein",
            "halbprivat",
            "privat",
            "unbekannt"
        ],
        "values_fr": [
            "Chambre commune",
            "Semi-privé",
            "Privé",
            "Inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_13v04": {
        "field_name": "bfs_13v04",
        "name_de": "Administrativer Urlaub \u0026 Ferien vollendete Stunden",
        "name_fr": "Vacances, congés administratifs heures révolues",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_14v01": {
        "field_name": "bfs_14v01",
        "name_de": "Hauptkostenstelle",
        "name_fr": "Centre de prise en charge des coûts",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "M000",
            "M050",
            "M100",
            "M200",
            "M300",
            "M400",
            "M500",
            "M600",
            "M700",
            "M800",
            "M850",
            "M900",
            "M950",
            "M990",
            "M960",
            "M970"
        ],
        "values_de": [
            "M000 Fachgebiete (allgemein)",
            "M050 Intensivmedizin",
            "M100 Innere Medizin",
            "M200 Chirurgie",
            "M300 Gynäkologie und Geburtshilfe",
            "M400 Pädiatrie",
            "M500 Psychiatrie und Psychotherapie",
            "M600 Ophthalmologie",
            "M700 Oto-Rhino- Laryngologie",
            "M800 Dermatologie und Venereologie",
            "M850 Medizinische Radiologie",
            "M900 Geriatrie",
            "M950 Physikalische Medizin und Rehabilitation",
            "M990 Andere Tätigkeitsbereiche",
            "M960 Notfallzentrum",
            "M970 Ärztenotfallpraxis"
        ],
        "values_fr": [
            "M000 Disciplines médicales (en général)",
            "M050 Soins intensifs",
            "M100 Médecine interne",
            "M200 Chirurgie",
            "M300 Gynécologie et obstétrique",
            "M400 Pédiatrie",
            "M500 Psychiatrie et psychothérapie",
            "M600 Ophtalmologie",
            "M700 Oto-rhino-laryngologie",
            "M800 Dermatologie et vénérologie",
            "M850 Radiologie médicale",
            "M900 Gériatrie",
            "M950 Médecine physique et réadaptation",
            "M990 Autres domaines d’activités",
            "M960 Centres d’urgence ",
            "M970 Cabinet d'urgences des médecins"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_14v02": {
        "field_name": "bfs_14v02",
        "name_de": "Hauptkostenträger für Grundversicherungsleistungen",
        "name_fr": "Prise en charge des soins de base",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "8",
            "9"
        ],
        "values_de": [
            "Krankenversicherung (obligat.)",
            "Invalidenversicherung",
            "Militärversicherung",
            "Unfallversicherung",
            "Selbstzahler (zB. Ausländer ohne Grundversicherung)",
            "andere",
            "unbekannt"
        ],
        "values_fr": [
            "Assurance-maladie (obligatoire)",
            "Assurance-invalidité",
            "Assurance-militaire",
            "Assurance-accident",
            "Autopayeur (par ex. étrangers sans assurance)",
            "Autre",
            "Inconnue"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_15v01": {
        "field_name": "bfs_15v01",
        "name_de": "Austrittsdatum und -Stunde",
        "name_fr": "Date et heure de sortie",
        "name_it": "",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_15v02": {
        "field_name": "bfs_15v02",
        "name_de": "Entscheid für Austritt",
        "name_fr": "Décision de sortie",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "8",
            "9"
        ],
        "values_de": [
            "auf Initiative des Behandelnden",
            "auf Initiative des Patienten (gegen Ansicht des Behandelnden)",
            "auf Initiative einer Drittperson",
            "interner Übertritt",
            "gestorben",
            "anderes",
            "unbekannt"
        ],
        "values_fr": [
            "Sur l’initiative du traitant",
            "Sur l’initiative du patient (contre l’avis du traitant)",
            "Sur l’initiative d’une tierce personne",
            "Transfert interne",
            "Décédé",
            "Autre",
            "Inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_13v03": {
        "field_name": "bfs_13v03",
        "name_de": "Aufenthalt in einer Intensivstation vollendete Stunden",
        "name_fr": "Séjour en soins intensifs heures révolues",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_15v03": {
        "field_name": "bfs_15v03",
        "name_de": "Aufenthalt nach Austritt",
        "name_fr": "Séjour après la sortie",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "44",
            "55",
            "66"
        ],
        "values_de": [
            "Todesfall",
            "Zuhause",
            "Krankenheim, Pflegeheim",
            "Altersheim, andere sozialmed. Institution",
            "Psychiatrische Klinik, anderer Betrieb",
            "Rehabilitationsklinik, anderer Betrieb",
            "anderes Krankenhaus (Akutspital) oder Geburtshaus",
            "Strafvollzugsanstalt",
            "andere",
            "unbekannt",
            "Psychiatrische Abteilung/Klinik, gleicher Betrieb",
            "Rehabilitations-abteilung/-klinik, gleicher Betrieb",
            "Akutabteilung/-klinik, gleicher Betrieb"
        ],
        "values_fr": [
            "Décédé",
            "domicile",
            "établ. de santé non hospit. médicalisé",
            "id. non médicalisé",
            "institution psychiatrique, autre établissement",
            "institution de réadaptation, autre établissement",
            "autre hôpital (soins aigus) ou maison de naissance",
            "institution d’exécution des peines",
            "autre",
            "inconnu",
            "Division/clinique psychiatrique, même établissement",
            "Division/clinique de réadaptation, même établissement",
            "Division/Clinique de soins aigus, même établissement"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_15v04": {
        "field_name": "bfs_15v04",
        "name_de": "Behandlung nach Austritt",
        "name_fr": "Prise en charge après la sortie",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "8",
            "9"
        ],
        "values_de": [
            "Todesfall",
            "geheilt/kein Behandlungsbedarf",
            "ambulante Behandlung",
            "ambulante Pflege (z.B. SPITEX)",
            "stationäre Behandlung oder Pflege",
            "Rehabilitation (amb. oder stat.)",
            "anderes",
            "unbekannt"
        ],
        "values_fr": [
            "Décédé",
            "Guéri, aucun besoin de suivi",
            "Soins ou traitement ambulatoires (cabinet médical ou en établissement)",
            "Soins à domicile",
            "Soins ou traitement stationnaires",
            "Réadaptation ambulatoire ou stationnaire",
            "Autre",
            "Inconnue"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_16v02": {
        "field_name": "bfs_16v02",
        "name_de": "Zusatz zu Hauptdiagnose",
        "name_fr": "Complément au diagnostic principal",
        "name_it": "",
        "variable_type": "code",
        "code_model": "IcdCode",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "icd"
    },
    "bfs_22v01": {
        "field_name": "bfs_22v01",
        "name_de": "Vitalstatus",
        "name_fr": "Etat à la naissance",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            ""
        ],
        "values_de": [
            "totgeboren",
            "lebendgeboren",
            "Frage stellt sich nicht"
        ],
        "values_fr": [
            "mort-né",
            "né vivant",
            "pas pertinent"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_22v02": {
        "field_name": "bfs_22v02",
        "name_de": "Mehrling",
        "name_fr": "Naissances multiples",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_22v05": {
        "field_name": "bfs_22v05",
        "name_de": "Körperlänge in Zentimeter",
        "name_fr": "Longueur en centimètres",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_03v01": {
        "field_name": "bfs_03v01",
        "name_de": "Neugeborenen-Datensatz",
        "name_fr": "Questionnaire nouveau-nés",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "nein",
            "ja"
        ],
        "values_fr": [
            "non",
            "oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_22v06": {
        "field_name": "bfs_22v06",
        "name_de": "Kongenitale Missbildungen",
        "name_fr": "Malformations congénitales",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            "9",
            ""
        ],
        "values_de": [
            "Nein",
            "Ja",
            "unbekannt",
            "leer"
        ],
        "values_fr": [
            "non",
            "oui",
            "inconnu",
            "vide"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_22v03": {
        "field_name": "bfs_22v03",
        "name_de": "Geburtsrang bei Mehrlingsgeburten",
        "name_fr": "Rang lors d'une naissance multiple",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v02": {
        "field_name": "bfs_23v02",
        "name_de": "Gestationsalter 1",
        "name_fr": "Durée de la grossesse 1",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v03": {
        "field_name": "bfs_23v03",
        "name_de": "Gestationsalter 2",
        "name_fr": "Durée de la grossesse 2",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v06": {
        "field_name": "bfs_23v06",
        "name_de": "Anzahl vorausgegangener Fehl- oder Totgeburten",
        "name_fr": "Nombre des fausses couches et des mortinaissances précédentes",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v07": {
        "field_name": "bfs_23v07",
        "name_de": "Anzahl vorausgegangener Schwangerschaftsabbrüche",
        "name_fr": "Nombre des interruptions de grossesse précédentes",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v05": {
        "field_name": "bfs_23v05",
        "name_de": "Anzahl vorausgegangener Lebendgeburten",
        "name_fr": "Nombre des naissances vivantes précédentes",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v04": {
        "field_name": "bfs_23v04",
        "name_de": "Anzahl vorausgegangener Schwangerschaften insgesamt",
        "name_fr": "Total des grossesses précédentes",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_23v08": {
        "field_name": "bfs_23v08",
        "name_de": "Verlegung Mutter aus anderem Spital",
        "name_fr": "Transfert de la mère d'un autre hôpital",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            ""
        ],
        "values_de": [
            "non",
            "oui",
            "leer"
        ],
        "values_fr": [
            "nein",
            "ja",
            "vide"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_42v020": {
        "field_name": "bfs_42v020",
        "name_de": "MD-Zusatz zu Hauptdiagnose",
        "name_fr": "Complément au diagnostic principal MD",
        "name_it": "",
        "variable_type": "code",
        "code_model": "IcdCode",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "icd"
    },
    "bfs_41v02": {
        "field_name": "bfs_41v02",
        "name_de": "Lokalisation des Spitals - Postleitzahl",
        "name_fr": "Localisation de l’hôpital - Numéro postal (NPA)",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_44v02": {
        "field_name": "bfs_44v02",
        "name_de": "Schweregrad der akuten Erkrankung",
        "name_fr": "Gravité de la maladie aiguë",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_45v02": {
        "field_name": "bfs_45v02",
        "name_de": "Kopfumfang bei Geburt in cm",
        "name_fr": "Tour de tête à la naissance en cm",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "delta_ecw": {
        "field_name": "delta_ecw",
        "name_de": "Delta ECW",
        "name_fr": "Delta ECW",
        "name_it": "Delta ECW",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_per_day": {
        "field_name": "cost_per_day",
        "name_de": "Tageskosten",
        "name_fr": "Coûts par jour",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v104": {
        "field_name": "cost_v104",
        "name_de": "Implantate",
        "name_fr": "Implants",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_44v04": {
        "field_name": "bfs_44v04",
        "name_de": "NEMS, Total aller Schichten",
        "name_fr": "NEMS, total de toutes les séances",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_47vXX": {
        "field_name": "bfs_47vXX",
        "name_de": "Zwischenaustritte",
        "name_fr": "interruptions, sortie",
        "name_it": "",
        "variable_type": "date",
        "code_model": "",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_47vXX_2": {
        "field_name": "bfs_47vXX_2",
        "name_de": "Wiedereintritte",
        "name_fr": "interruption, réadmissions",
        "name_it": "",
        "variable_type": "date",
        "code_model": "",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_47vXX_3": {
        "field_name": "bfs_47vXX_3",
        "name_de": "Grund für Wiedereintritt",
        "name_fr": "Raison de la réadmission",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": true,
        "values": [
            "1",
            "2",
            "3",
            "9"
        ],
        "values_de": [
            "Wiederaufnahme mit gleicher MDC",
            "Wiederaufnahme mit gleicher MDC durch Komplikationen",
            "Rückverlegung",
            "unbekannt"
        ],
        "values_fr": [
            "réadmission avec la même MDC",
            "réadmission avec la même MDC en raison de complications",
            "retransfert",
            "inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_47v41": {
        "field_name": "bfs_47v41",
        "name_de": "Weitere Wiedereintritte",
        "name_fr": "Réadmissions ultérieures",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            ""
        ],
        "values_de": [
            "(default) nicht mehr als 5 Aufenthalte bzw. 4 Wiedereintritte",
            "mehr als 5 Aufenthalte bzw. 4 Wiedereintritte",
            ""
        ],
        "values_fr": [
            "(defaut), pas plus de 5 séjours (soit 4 réadmissions)",
            "plus de 5 séjours (4 réadmissions)",
            ""
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_44v03": {
        "field_name": "bfs_44v03",
        "name_de": "Art des Score",
        "name_fr": "Genre de score",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "S",
            "P",
            "C",
            ""
        ],
        "values_de": [
            "SAPS",
            "PIM2",
            "CRIB",
            "leer"
        ],
        "values_fr": [
            "SAPS",
            "PIM2",
            "CRIB",
            "vide"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_48v01": {
        "field_name": "bfs_48v01",
        "name_de": "DRG Status",
        "name_fr": "Statut DRG",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "nein",
            "ja"
        ],
        "values_fr": [
            "non",
            "oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "total_costs": {
        "field_name": "total_costs",
        "name_de": "Gesamtkosten mit ANK",
        "name_fr": "Coûts totals avec CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "total_costs_without_ank": {
        "field_name": "total_costs_without_ank",
        "name_de": "Gesamtkosten ohne ANK",
        "name_fr": "Coûts totals sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "rank": {
        "field_name": "rank",
        "name_de": "Ähnlichkeitsindex",
        "name_fr": "Indice de similarité",
        "name_it": "Similarity index",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "top_ranks": {
        "field_name": "top_ranks",
        "name_de": "Ähnliche DRGs",
        "name_fr": "DRG similaires",
        "name_it": "Similar DRGs",
        "variable_type": "string",
        "code_model": "",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "model_train_number": {
        "field_name": "model_train_number",
        "name_de": "Fallzahl für DRG-Modell",
        "name_fr": "Nombre de cas pour ce modèle DRG",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "tags": {
        "field_name": "tags",
        "name_de": "Tags",
        "name_fr": "Tags",
        "name_it": "Tags",
        "variable_type": "string",
        "code_model": "",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "likelihood": {
        "field_name": "likelihood",
        "name_de": "Ähnlichkeit",
        "name_fr": "Similarité",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "id_mother": {
        "field_name": "id_mother",
        "name_de": "ID ADmFall Mutter PRISMA",
        "name_fr": "ID mère PRISMA",
        "name_it": "ID mother PRISMA",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v105": {
        "field_name": "cost_v105",
        "name_de": "Medizinische, diagnostische und therapeutische Fremdleistungen (exkl. Arzthonorare)",
        "name_fr": "Prestations médicales, diagnostiques et thérapeutiques de tiers (non-compris honoraires médicaux)",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v106": {
        "field_name": "cost_v106",
        "name_de": "Arzthonoraraufwand, (nicht sozialversicherungspflichtig)",
        "name_fr": "Honoraires médicaux (non-soumis aux assurances sociales)",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v102": {
        "field_name": "cost_v102",
        "name_de": "Blut und Blutprodukte",
        "name_fr": "Sang et produits sanguins",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v107": {
        "field_name": "cost_v107",
        "name_de": "Arzthonoraraufwand, Spitalärzte (sozialversicherungspflichtig)",
        "name_fr": "Honoraires de médecins, médecins hospitaliers (soumis aux assurances sociales)",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v110": {
        "field_name": "cost_v110",
        "name_de": "Übrige patientenbezogene Fremdleistungen",
        "name_fr": "Autres prestations de tiers liées au patient",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v109": {
        "field_name": "cost_v109",
        "name_de": "Patiententransporte durch Dritte",
        "name_fr": "Transports de patients fournis par des tiers",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v111": {
        "field_name": "cost_v111",
        "name_de": "Übrige Auslagen für Patienten",
        "name_fr": "Autres frais liés aux patients",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v200": {
        "field_name": "cost_v200",
        "name_de": "Patientenadministration, Gemeinkosten exkl. ANK",
        "name_fr": "Administration des patients, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v201": {
        "field_name": "cost_v201",
        "name_de": "Patientenadministration, ANK",
        "name_fr": "Administration des patients, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v108": {
        "field_name": "cost_v108",
        "name_de": "Arzthonoraraufwand, Belegärzte (sozialversicherungspflichtig)",
        "name_fr": "Honoraires de médecins, médecins agréés (soumis aux assurances sociales)",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": null,
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v210": {
        "field_name": "cost_v210",
        "name_de": "OP Saal, Gemeinkosten exkl. ANK",
        "name_fr": "Salles d’opérations, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v221": {
        "field_name": "cost_v221",
        "name_de": "Anästhesie, ANK",
        "name_fr": "Anesthésie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v211": {
        "field_name": "cost_v211",
        "name_de": "OP Saal, ANK",
        "name_fr": "Salles d’opérations, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v230": {
        "field_name": "cost_v230",
        "name_de": "Intensivpflege (IPS) und Intermediat Care (ICM), Gemeinkosten exkl. ANK",
        "name_fr": "Soins intensifs(IPS) et Intermediate Care (ICM), Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v231": {
        "field_name": "cost_v231",
        "name_de": "Intensivpflege (IPS) und Intermediat Care (ICM), ANK",
        "name_fr": "Soins intensifs(IPS) et Intermediate Care (ICM), CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v232": {
        "field_name": "cost_v232",
        "name_de": "Ärzteschaften der IPS - Aktivitäten 6b, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v220": {
        "field_name": "cost_v220",
        "name_de": "Anästhesie, Gemeinkosten exkl. ANK",
        "name_fr": "Anesthésie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v233": {
        "field_name": "cost_v233",
        "name_de": "Ärzteschaften der IPS - Aktivitäten 6b, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v240": {
        "field_name": "cost_v240",
        "name_de": "Anerkannte Intermediate Care Stellen (IMCU), Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v242": {
        "field_name": "cost_v242",
        "name_de": "Ärzteschaften der IMCU - Aktivitäten 6b, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v250": {
        "field_name": "cost_v250",
        "name_de": "Notfall, Gemeinkosten exkl. ANK",
        "name_fr": "Urgences, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v252": {
        "field_name": "cost_v252",
        "name_de": "Ärzteschaften des Notfalls - Aktivitäten 6b, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v251": {
        "field_name": "cost_v251",
        "name_de": "Notfall, ANK",
        "name_fr": "Urgences, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v243": {
        "field_name": "cost_v243",
        "name_de": "Ärzteschaften der IMCU - Aktivitäten 6b, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v261": {
        "field_name": "cost_v261",
        "name_de": "Bildgebende Verfahren, ANK",
        "name_fr": "Coûts imagerie médicale et médicine nucléaire, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v253": {
        "field_name": "cost_v253",
        "name_de": "Ärzteschaften des Notfalls - Aktivitäten 6b, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v260": {
        "field_name": "cost_v260",
        "name_de": "Bildgebende Verfahren, Gemeinkosten exkl. ANK",
        "name_fr": "Coûts imagerie médicale et médicine nucléaire, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v271": {
        "field_name": "cost_v271",
        "name_de": "Gebärsaal, ANK",
        "name_fr": "Corps médical de la salle d’accouchements, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v270": {
        "field_name": "cost_v270",
        "name_de": "Gebärsaal, Gemeinkosten exkl. ANK",
        "name_fr": "Corps médical de la salle d’accouchements, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v272": {
        "field_name": "cost_v272",
        "name_de": "Ärzteschaften des Gebärsaals - Aktivitäten 6b, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v273": {
        "field_name": "cost_v273",
        "name_de": "Ärzteschaften des Gebärsaals - Aktivitäten 6b, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v280": {
        "field_name": "cost_v280",
        "name_de": "Nuklearmedizin und Radioonkologie, Gemeinkosten exkl. ANK",
        "name_fr": "Médecine nucléaire et radiooncologie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v290": {
        "field_name": "cost_v290",
        "name_de": "Labor, Gemeinkosten exkl. ANK",
        "name_fr": "Laboratoire, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v291": {
        "field_name": "cost_v291",
        "name_de": "Labor, ANK",
        "name_fr": "Laboratoire, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v300": {
        "field_name": "cost_v300",
        "name_de": "Dialyse, Gemeinkosten exkl. ANK",
        "name_fr": "Dialyse, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v301": {
        "field_name": "cost_v301",
        "name_de": "Dialyse, ANK",
        "name_fr": "Dialyse, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v310": {
        "field_name": "cost_v310",
        "name_de": "Ärzteschaften, Aktivitäten 1-5, Gemeinkosten exkl. ANK",
        "name_fr": "Corps médical, activités 1-5, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v281": {
        "field_name": "cost_v281",
        "name_de": "Nuklearmedizin und Radioonkologie, ANK",
        "name_fr": "Médecine nucléaire et radiooncologie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_48v16": {
        "field_name": "bfs_48v16",
        "name_de": "Gestationsalter_12M",
        "name_fr": "Durée de la grossesse_12M",
        "name_it": "Nome italiano",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v321": {
        "field_name": "cost_v321",
        "name_de": "Physiotherapie, ANK",
        "name_fr": "Physiothérapie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v330": {
        "field_name": "cost_v330",
        "name_de": "Ergotherapie, Gemeinkosten exkl. ANK",
        "name_fr": "Ergothérapie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v331": {
        "field_name": "cost_v331",
        "name_de": "Ergotherapie, ANK",
        "name_fr": "Ergothérapie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v341": {
        "field_name": "cost_v341",
        "name_de": "Logopädie, ANK",
        "name_fr": "Logopédie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v340": {
        "field_name": "cost_v340",
        "name_de": "Logopädie, Gemeinkosten exkl. ANK",
        "name_fr": "Logopédie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v360": {
        "field_name": "cost_v360",
        "name_de": "Medizinische und therapeutische Diagnostik, Gemeinkosten exkl. ANK",
        "name_fr": "Diagnostic médical et thérapeutique, coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v350": {
        "field_name": "cost_v350",
        "name_de": "Nichtärztliche Therapien und Beratungen, Gemeinkosten exkl. ANK",
        "name_fr": "Thérapies non médicales et conseils, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v361": {
        "field_name": "cost_v361",
        "name_de": "Medizinische und therapeutische Diagnostik, ANK",
        "name_fr": "Diagnostic médical et thérapeutique, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v351": {
        "field_name": "cost_v351",
        "name_de": "Nichtärztliche Therapien und Beratungen, ANK",
        "name_fr": "Thérapies non médicales et conseils, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v362": {
        "field_name": "cost_v362",
        "name_de": "Ärzteschaften der medizinischen und therapeutischen Diagnostik - Aktivitäten 6b, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v363": {
        "field_name": "cost_v363",
        "name_de": "Ärzteschaften der medizinischen und therapeutischen Diagnostik - Aktivitäten 6b, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v370": {
        "field_name": "cost_v370",
        "name_de": "Pflege, Gemeinkosten exkl. ANK",
        "name_fr": "Soins, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v371": {
        "field_name": "cost_v371",
        "name_de": "Pflege, ANK",
        "name_fr": "Soins, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v381": {
        "field_name": "cost_v381",
        "name_de": "Hotellerie-Zimmer, ANK",
        "name_fr": "Hôtellerie chambre, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v390": {
        "field_name": "cost_v390",
        "name_de": "Hotellerie-Küche, Gemeinkosten exkl. ANK",
        "name_fr": "Hôtellerie cuisine, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v391": {
        "field_name": "cost_v391",
        "name_de": "Hotellerie-Küche, ANK",
        "name_fr": "Hôtellerie cuisine, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v400": {
        "field_name": "cost_v400",
        "name_de": "Hotellerie-Service, Gemeinkosten exkl. ANK",
        "name_fr": "Hôtellerie service, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v380": {
        "field_name": "cost_v380",
        "name_de": "Hotellerie-Zimmer, Gemeinkosten exkl. ANK",
        "name_fr": "Hôtellerie chambre, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v401": {
        "field_name": "cost_v401",
        "name_de": "Hotellerie-Service, ANK",
        "name_fr": "Hôtellerie service, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "all_diagnoses": {
        "field_name": "all_diagnoses",
        "name_de": "Alle Diagnosen",
        "name_fr": "Diagnostics",
        "name_it": "Diagnosi",
        "variable_type": "code",
        "code_model": "IcdCode",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "icd"
    },
    "api": {
        "field_name": "api",
        "name_de": "Zugriff per Schnittstelle",
        "name_fr": "Accès par l'interface",
        "name_it": "",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1"
        ],
        "values_de": [
            "Nein",
            "Ja"
        ],
        "values_fr": [
            "Non",
            "Oui"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "year": {
        "field_name": "year",
        "name_de": "Abrechnungsjahr",
        "name_fr": "Année",
        "name_it": "Anno",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_44v05": {
        "field_name": "bfs_44v05",
        "name_de": "Aufenthalt in einer Intermediate Care Station (IMC)",
        "name_fr": "Séjour dans une Intermediate Care Sation (IMC)",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_44v06": {
        "field_name": "bfs_44v06",
        "name_de": "Erfassung der Aufwandpunkte für IMC",
        "name_fr": "Relevé des points IMC",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "supplements": {
        "field_name": "supplements",
        "name_de": "Zusatzentgelte",
        "name_fr": "Rémunérations supplémentaires",
        "name_it": "Rimunerazioni supplementari",
        "variable_type": "code",
        "code_model": "Supplement",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "supplements_total": {
        "field_name": "supplements_total",
        "name_de": "Gesamtbetrag der Zusatzentgelte",
        "name_fr": "Montant total des rémunérations supplémentaires",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "patient_id": {
        "field_name": "patient_id",
        "name_de": "Patientenidentifikationsnummer PRISMA",
        "name_fr": "PID PRISMA",
        "name_it": "PID PRISMA",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_v43v015": {
        "field_name": "bfs_v43v015",
        "name_de": "Beginn der MD-Hauptbehandlung",
        "name_fr": "Début du traitement principal MD",
        "name_it": "Inizio del trattamento principale MD",
        "variable_type": "date",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003e",
                "\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v411": {
        "field_name": "cost_v411",
        "name_de": "Übrige Leistungserbringer, ANK",
        "name_fr": "Autres fournisseurs de prestations, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v421": {
        "field_name": "cost_v421",
        "name_de": "Pathologie, ANK",
        "name_fr": "Pathologie, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v420": {
        "field_name": "cost_v420",
        "name_de": "Pathologie, Gemeinkosten exkl. ANK",
        "name_fr": "Pathologie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v440": {
        "field_name": "cost_v440",
        "name_de": "Rettungs- bzw. Ambulanzdienst - (nur Sekundärtransporte), Gemeinkosten exkl. ANK",
        "name_fr": "Service de sauvetage et d’ambulance (uniquement transports secondaires), Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v441": {
        "field_name": "cost_v441",
        "name_de": "Rettungs- bzw. Ambulanzdienst - (nur Sekundärtransporte), ANK",
        "name_fr": "Service de sauvetage et d’ambulance (uniquement transports secondaires), CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "bfs_v43v011": {
        "field_name": "bfs_v43v011",
        "name_de": "Seitigkeit der MD-Hauptbehandlung",
        "name_fr": "Latéralité pour le traitement principal MD",
        "name_it": "Lateralità del trattamento principale MD",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "0",
            "1",
            "2",
            "3",
            "9",
            ""
        ],
        "values_de": [
            "beidseitig",
            "einseitig rechts",
            "einseitig links",
            "einseitig unbekannt",
            "unbekannt",
            "Frage stellt sich nicht "
        ],
        "values_fr": [
            "bilatéral",
            "unilatéral droit",
            "unilatéral gauche",
            "unilatéral côté inconnu",
            "inconnu",
            "la question ne se pose pas"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_v43v016": {
        "field_name": "bfs_v43v016",
        "name_de": "Ambulante Behandlungen auswärts, Hauptbehandlung",
        "name_fr": "Traitement ambulatoire extra-muros, traitement principal",
        "name_it": "Trattamenti ambulatoriali esterni, trattamento principale",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "",
            "1",
            "2",
            "3",
            "9"
        ],
        "values_de": [
            " (default) Frage stellt sich nicht; eigenes Krankenhausareal, gleicher Betrieb ",
            "eigenes Krankenhausareal, anderer Betrieb",
            "ausserhalb eigenem Krankenhausareal, gleicher Betrieb",
            "ausserhalb eigenem Krankenhausareal, anderer Betrieb",
            "unbekannt"
        ],
        "values_fr": [
            "(default) la question ne se pose pas, pas de changement d’établissement ni d’aire hospitalière",
            " même aire hospitalière, autre établissement. ",
            "Même établissement, autre aire hospitalière. ",
            "Autre établissement, autre aire hospitalière. ",
            "inconnu"
        ],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "bfs_v43v010": {
        "field_name": "bfs_v43v010",
        "name_de": "Hauptbehandlung",
        "name_fr": "Traitement principal MD",
        "name_it": "Trattamento principale MD",
        "variable_type": "code",
        "code_model": "ChopCode",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "chop"
    },
    "med_outlier": {
        "field_name": "med_outlier",
        "name_de": "Medizinische Übereinstimmung mit DRG",
        "name_fr": "Conformité médicale avec le DRG",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v101": {
        "field_name": "cost_v101",
        "name_de": "Arzneimittel",
        "name_fr": "Médicaments",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v103": {
        "field_name": "cost_v103",
        "name_de": "Medizinisches Material",
        "name_fr": "Matériel médical",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v241": {
        "field_name": "cost_v241",
        "name_de": "Anerkannte Intermediate Care Stellen (IMCU), ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v320": {
        "field_name": "cost_v320",
        "name_de": "Physiotherapie, Gemeinkosten exkl. ANK",
        "name_fr": "Physiothérapie, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v410": {
        "field_name": "cost_v410",
        "name_de": "Übrige Leistungserbringer, Gemeinkosten exkl. ANK",
        "name_fr": "Autres fournisseurs de prestations, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v453": {
        "field_name": "cost_v453",
        "name_de": "Ärzteschaften des Herzkatheter-Labor – Aktivität 6a2, ANK",
        "name_fr": "Corps médical du laboratoire de cathétérisme cardiaque - Activités 6a2, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v460": {
        "field_name": "cost_v460",
        "name_de": "Psychologie, Gemeinkosten exkl. ANK",
        "name_fr": "Psychologie, Coûts indirects sans CUI",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v461": {
        "field_name": "cost_v461",
        "name_de": "Psychologie, ANK",
        "name_fr": "Psychologie, CUI",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v450": {
        "field_name": "cost_v450",
        "name_de": "Herzkatheter-Labor, Gemeinkosten exkl. ANK",
        "name_fr": "Laboratoire de cathétérisme cardiaque, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v451": {
        "field_name": "cost_v451",
        "name_de": "Herzkatheter-Labor, ANK",
        "name_fr": "Laboratoire de cathétérisme cardiaque, CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v452": {
        "field_name": "cost_v452",
        "name_de": "Ärzteschaften des Herzkatheter-Labor – Aktivität 6a2, Gemeinkosten exkl. ANK",
        "name_fr": "Corps médical du laboratoire de cathétérisme cardiaque – Activités 6a2, Coûts indirects sans CUI",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v311": {
        "field_name": "cost_v311",
        "name_de": "Ärzteschaften, Aktivitäten 1-5, ANK",
        "name_fr": "Corps médical, activités1-5, CUI",
        "name_it": "Nome italiano",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "encode_batch2017": {
        "field_name": "encode_batch2017",
        "name_de": "SwissDRG Batch 2017 Format String",
        "name_fr": "SwissDRG Batch 2017 Format String",
        "name_it": "SwissDRG Batch 2017 Format String",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v212": {
        "field_name": "cost_v212",
        "name_de": "Ärzteschaften des OP-Saals - Aktivitäten 6a, Gemeinkosten exkl. ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "cost_v213": {
        "field_name": "cost_v213",
        "name_de": "Ärzteschaften des OP-Saals - Aktivitäten 6a, ANK",
        "name_fr": "",
        "name_it": "",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "partition": {
        "field_name": "partition",
        "name_de": "Partition",
        "name_fr": "partition",
        "name_it": "partizione",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [
            "M",
            "O",
            "A"
        ],
        "values_de": [
            "Medizinisch",
            "Operativ",
            "Andere"
        ],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": true,
        "table_type": "string"
    },
    "procedures": {
        "field_name": "procedures",
        "name_de": "Prozeduren",
        "name_fr": "Procédures",
        "name_it": "Procedure",
        "variable_type": "code",
        "code_model": "ChopCode",
        "isarray": true,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "nombre est égal à",
                "length_e"
            ],
            [
                "nombre est plus grand que",
                "length_gt"
            ],
            [
                "nombre est moins que",
                "length_lt"
            ],
            [
                "est dans",
                "$in"
            ],
            [
                "n'est pas dans",
                "$nin"
            ],
            [
                "est dans le tableau",
                "$inTable"
            ],
            [
                "n'est pas dans le tableau",
                "$ninTable"
            ]
        ],
        "is_enum": false,
        "table_type": "chop"
    },
    "baserate": {
        "field_name": "baserate",
        "name_de": "Baserate",
        "name_fr": "Baserate",
        "name_it": "Baserate",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "coverage": {
        "field_name": "coverage",
        "name_de": "Kostendeckungsgrad",
        "name_fr": "Taux de couverture des coûts",
        "name_it": "Rapporto di recupero dei costi",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "profit": {
        "field_name": "profit",
        "name_de": "Gewinn",
        "name_fr": "Profit",
        "name_it": "Profitto",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "yield": {
        "field_name": "yield",
        "name_de": "Ertrag",
        "name_fr": "Rendement",
        "name_it": "Rendimento",
        "variable_type": "number",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ],
            [
                "\u003c",
                "\u003c"
            ],
            [
                "\u003c=",
                "\u003c="
            ],
            [
                "\u003e",
                "\u003e"
            ],
            [
                "\u003e=",
                "\u003e="
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    },
    "hospital_id": {
        "field_name": "hospital_id",
        "name_de": "Spital",
        "name_fr": "Hôpital",
        "name_it": "Ospedale",
        "variable_type": "string",
        "code_model": "",
        "isarray": false,
        "values": [],
        "values_de": [],
        "values_fr": [],
        "values_it": [],
        "operators_option_list": [
            [
                "=",
                "="
            ],
            [
                "≠",
                "\u003c\u003e"
            ]
        ],
        "is_enum": false,
        "table_type": "string"
    }
}