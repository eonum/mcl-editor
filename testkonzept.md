# Testkonzept #

In der Folge findet sich das Testkonzept, gemäss den Vorgaben der Universität Bern.

## Unit Tests ##
Es werden Unit Tests gemacht, wobei wir hierbei grundsätzlich zwischen **Unit Backend** und **Unit Frontend** unterscheiden. 

## Unit Backend ##
Als Unit Backend betrachten wir den **mittels Peggy generierten  (JavaScript) Parser**. Bei allfälligen Fehlern müsste die Grammatik angepasst werden, aber im lauffähigen System spielt die Grammatik eine untergeordnete Rolle und müsste höchstensfalls in unregelmässigen Abständen aktualisiert werden.

- Der Parser, als Hauptbestandteil der Unit Backend wird zum einen hinsichtlich seiner Includes getestet: Die vorgegebenen Keywords (Tabellennamen, Operatoren und ähnliches) werden aus JSON-Files während der Laufzeit eingelesen. Dieses korrekte Einlesen wird stichprobenartig überprüft.

- Sobald der Parser über seine Bestandteile (erwähnte Includes) verfügt, werden die ganz wesentlichen Parsingeigenschaften getestet. Dies erfolgt mit dem Parsen von einigen simplen, gewöhnlichen Eingaben und zusätzlich dann mit Grenzfällen (z.B. verschachtelte Ausdrücke). Neben diesen syntaktischen Fällen werden zu guter letzt semantische Fähigkeiten des Parsers überprüft, in dem gewisse Typen überprüft werden (von denen wir aufgrund der JSON-Files wissen).

Diese Tests sind alle mit **jest** eingerichtet und werden komfortabel _automatisch durchgeführt_ (siehe hierzu **README.md** unter **Testing with jest**)


## Unit Frontend ##
Die Tests der Unit Frontend sind einfacher gehalten. Dies aus dem Grund, dass die wesentliche Funktion des Produkts im Parser besteht und die wesentlichen syntaktischen und semantischen Überprüfungen hier stattfinden. Weiter sind die Tests der Unit Backend einfacher und übersichtlicher zu verwalten, da hier noch keine GUI-Interaktion stattfindet.

Aus diesem Grund wird die **Unit Frontend** _von Hand hinsichtlich Syntax-Highlighting geprüft_ und zudem die Variablen-Vorschläge (Autocompletion) getestet.


## Datenbank-Tests ##
Da das Produkt keine Datenbank enthält, entfällt dieser Test. Die wesentlichen Datenbestände werden aus den oben erwähnten **JSON-Files** eingelesen und in der _Unit Backend_ getestet. Aus diesem Grund sind keine Testdaten zu benützen und in der Folge auch nicht zu generieren.


## Integrationstests ##
Die Storys sind in diesem Projekt ganz wesentlich die eigentlichen Parsing-Funktionalitäten im Sinne einer syntaktischen und semantischen Überprüfung und entsprechender Rückmeldung. Aus diesem Grund besteht der Integrationstest aus den beiden Unit Tests Unit Backend und Unit Frontend.

Da die User-Storys das eigentliche Parsing enthalten, sind Spezial- und Grenzfälle im Test der Unit Backend enthalten. Auf Seiten Frontend sind die vom Kunden vorgegebenen Browser manuell zu prüfen (_Auto-Completion_, _Syntax-Highlighting_).


## Installationstests ##
Die Installation wird bzw. wurde in die vorgegebene Struktur des Kunden integriert. Die erwähnten obigen Tests erfolgen bereits auf dieser Umgebung. Die **wesentlichen Installationsanweisungen** sind im **README** des Projekts abgelegt.


## GUI-Tests ##
Zu den GUI-Tests, siehe obigen Unit Test der Unit Frontend.

## Stress-Tests ##
Die Software wird grösstenteils im CH-Markt an medizinische Institutionen verkauft. Die Anwendung erfolgt von speziell ausgebildetem Personal, welches in seiner Anzahl klein bleiben dürfte. Eine Bediener:in würde höchstens eine überschaubare Menge an speziellen Abfragen (in den meisten Fällen auch nur eine Abfrage pro Zeiteinheit) generieren. Hohe Belastungen wie viele und rechenintensive Zugriffe sind daher nicht realistisch. Daher erscheint ein Stress-Test nicht sinnvoll.


## Usability-Tests ##
Usability-Tests wurden aufgrund der fehlenden Integration bislang noch nicht durchgeführt. Folgende Überlegungen sind für zukünftige Usability-Tests festzuhalten:
Die künftigen Anwender der Software sind obig erwähntes Spezialpersonal. Diese Personen verfügen über gute Vorkenntnisse und dürften vermutlich in den meisten Fällen spezifisch geschult werden. Dieser Personenkreis wäre daher ideal, um die Bedienbarkeit zu testen. Solche Usability-Tests dürften üblicherweise darin bestehen, das Abfragen generiert werden und die syntaktische wie semantische Rückmeldung beachtet wird. 
