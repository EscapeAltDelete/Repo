const fs = require('fs');
const path = require('path');
const { JSON_FILE } = process.env;

const filePath = path.join(__dirname, `../Repos/${JSON_FILE}.json`); // Use the selected JSON file

const jsonFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (jsonFile.apps.length > 0) {
  jsonFile.apps.pop();
}

fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2));
