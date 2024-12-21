const fs = require('fs');
const path = require('path');

const jsonFiles = fs.readdirSync(path.join(__dirname, '../Repos'))
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''));

console.log('Available JSON files:', jsonFiles);
