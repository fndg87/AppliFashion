# AppliFashion

This project is my solution for the Applitools Holiday Shopping Hackathon. 
https://applitools.com/hackathon-v20-3-instructions/

This visual automated test project was built using :

- NPM
- Cypress with the AppliTools Eyes plugin.

# Quick start 

```
git clone https://github.com/fndg87/AppliFashion.git
npm install -y
```

### COMMAND TO RUN THE TESTS:
```
APPLITOOLS_API_KEY='YOURTOKEN' npx cypress run --env URL=https://demo.applitools.com,ENV=PRODV1 --spec "./cypress/integration/hackathon/holiday_shopping-test.spec.js"
```

NOTE: Please input your AppliTools API token in the above command.

Also, please define 'URL' and'ENV' as in the command above. The supported environment name are: DEV, PRODV1 or PRODV2"
```
ENV is 'PRODV1' {$URL}+/tlcHackathonMasterV1.html
ENV is 'DEV' {$URL}+/tlcHackathonDev.html
ENV is 'PRODV2' {$URL}+/tlcHackathonMasterV2.html

```
