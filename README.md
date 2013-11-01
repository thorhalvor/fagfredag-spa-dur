# Fagfredag i Webstep Fokus om SPA

Dette er et repository med eksempelkode fra fagfredag i Webstep Fokus hvor tema er Single Page Application (SPA) rammeverk.

Dette er Durandal-versjonen. http://durandaljs.com


For å kjøre igang, installer node (med package manager) fra http://nodejs.org/.
kjør så: 

```
git clone https://github.com/henningc/fagfredag-spa-dur.git
cd fagfredag-spa-dur
npm install -g grunt-cli
npm install
grunt
```

For å hente data i JSON-format og med riktige CORS-headere, bruk http://yr-proxy.tosh.no med samme URL som til yr, f.eks:

```
http://yr-proxy.tosh.no/sted/Norge/Telemark/Sauherad/Gvarv/varsel.xml
```
eller 
```
http://yr-proxy.tosh.no/sted/Norge/Telemark/Sauherad/Gvarv/varsel.json
```