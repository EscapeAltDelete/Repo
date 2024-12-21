const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Repos/TrollApps.json');

const jsonFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (jsonFile.apps.length > 0) {
  jsonFile.apps.pop();
}

fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2));
