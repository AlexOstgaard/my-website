
<span style = "color: mediumseagreen"> Alt i denne fargen skal i github. </span>


<span style = "color: indianred"> Alt i denne fargen skal IKKE i github. </span>


___
<h3><span style = "color: indianred">node_modules</span>-mappen</h3>
* Her er det bare dritmange filer vi ignorerer.
* Alt er eksterne pakker og biblioteker.
* Verktøykassen vår!
* Trenger ikke å ha disse filene i github, siden package.json forteller hva som må lastes ned for andre brukere.

##### Et par verktøy jeg bruker:
* <span style="color: steelblue">react-i18next</span> (i18n), som lar meg lage språk i json-filer, og bruke disse i .tsx-filene.
* <span style="color: steelblue">react-router-dom</span>, som lar meg ha rutere, altså flere "undernettsider".

___
<h3> <span style = "color: mediumseagreen">public</span>-mappen</h3>
* Her har vi filer brukeren kan åpne, men som ikke vises i nettsiden.
* Kan være <span style = "color: steelblue">.png</span>-er for eksempel.
* Favicon! Dette er ikonet som kommer i nettleseren. Kan være <span style = "color: steelblue">.png</span>, <span style = "color: steelblue">.svg</span> eller <span style = "color: steelblue">.ico</span>.
___
<h3> <span style = "color: mediumseagreen">src</span>-mappen</h3>
* Noen viktige mapper til <span style = "color: mediumseagreen">src</span>:
1.  <b><span style = "color: steelblue">assets</span></b>-mappen
	* Her har vi **filer**, **importerte fonter**, **andre statiske filer** (videoer...)

2. <b><span style = "color: steelblue">components</span></b>-mappen
	* Her har vi komponenter kan bruke på flere deler av nettsiden. F.eks. en header. 
	* Alle komponentene våre er til å brukes i <span style = "color: steelblue">app.tsx</span> mindre og mer lesbar.

3. <b><span style = "color: steelblue">i18n</span></b>-mappen
	* Her definerer vi norsk og engelsk i .json-filer. Lar oss bytte språk. I disse .json-filene har vi felles nøkler, men de peker på ulike oversettelser av nøklene. Lar oss skrive nøklene i .tsx-filer og kalle på nøklene.

* <span style = "color: steelblue">main.tsx</span> er filen som er koblet til <span style = "color: steelblue">index.html</span>. Denne filen importerer starter altså hele React-appen. Vi lar denne være.

* <span style = "color: steelblue">index.css</span> inneholder **Globale CSS-stiler** for hele appen. Er koblet til <span style = "color: steelblue">main.tsx</span>. 

* <span style = "color: steelblue">App.tsx</span> er <span style = "color: steelblue">.tsx</span>-filen vår somfungerer som hovedsiden. Denne åpnes når programmet åpnes, men inneholder ikke nødvendigvis alt i nettsiden.

* <span style = "color: steelblue">App.css</span> har stilene til <span style = "color: steelblue">App.tsx</span>.

* <span style = "color: steelblue">vite-env.d.ts</span> er filen som gjør at TypeScript og Vite samarbeider riktig. Gjør at TypeScript ikke klager på imports fra Vite.

* <span style = "color: steelblue">i18n.ts</span> er filen som henter i18n-biblioteket, og kobler det til React. use-funkjsonen forteller at vi bruker React-integrasjonen. init-funkjsonen forteller i18n hvilke sprøk vi har, og hvilket språk vi bruker at the moment.

___
*Resten av innholdet i mappen er enkeltfiler, sannsynligvis gjør vi ingen endringer i noen av de, utenom* <i style = "color: mediumseagreen">index.html</i>.

* <span style = "color: indianred">.gitignore</span> forteller Git hvilke filer som skal ignoreres.

* <span style = "color: mediumseagreen">eslint.config.js</span> er en konfigurasjonsfil, sjekker koden for feil og kvalitet.

* <span style = "color: mediumseagreen">index.html</span> er hovedprogrammet vårt med hele nettsiden. Siden alt innholdet defineres videre i <span style = "color: steelblue">main.tsx</span>, er det ikke mye som skjer her. Riktignok her vi endrer på hva som vises i taben.

* <span style = "color: mediumseagreen">package-lock.json</span> er en automatisk generert fil av NPM. Lar andre klone repoet.

* <span style = "color: mediumseagreen">package.json</span>, hovedfilen for NPM. Her kan man finne alle modulene som lastes ned i node_modules om noen kaller på npm install.

* <span style = "color: mediumseagreen">README.md</span>, hva tror du??

* <span style = "color: mediumseagreen">tsconfig.app.json</span> er json-filen for appen. (Jeg aner ikke hva dette mener.)

* <span style = "color: mediumseagreen">tsconfig.json</span> er hovedkonfigurasjonen for TypeScript. (????)

* <span style = "color: mediumseagreen">tsconfig.node.json</span> er TypeScript-konfigen av Vite. (??????)

* <span style = "color: mediumseagreen">vite.config.js</span> er konfig-filen for Vite. (?????????)

