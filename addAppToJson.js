const fs = require('fs');
const path = require('path');

const appName = process.env.APP_NAME;
const downloadURL = process.env.DOWNLOAD_URL;

const developerName = downloadURL.split('/')[3];
const iconURL = `https://raw.githubusercontent.com/EscapeAltDelete/Repo/main/Images/Icons/${appName}.png`;
const screenshotURL = `https://img.shields.io/github/release/${developerName}/${appName}.png?label=&style=flat-square&color=black`;

const appData = {
  name: appName,
  bundleIdentifier: appName,
  developerName: developerName,
  localizedDescription: `Latest release of ${appName}`,
  iconURL: iconURL,
  tintColor: "#2C3E50",
  screenshotURLs: [screenshotURL],
  versions: [
    {
      version: "∞",
      date: "",
      localizedDescription: `Latest release of ${appName}`,
      downloadURL: downloadURL,
      size: 0,
      minOSVersion: "14.0",
      maxOSVersion: "17.0"
    }
  ]
};

const filePath = path.join(__dirname, 'Repos/test.json'); // Ensure this path is correct

// Log the paths and app data for debugging purposes
console.log('App Data:', appData);
console.log('File Path:', filePath);

try {
  const jsonFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log('Existing JSON File:', jsonFile);

  jsonFile.apps.push(appData);
  console.log('Updated JSON File:', jsonFile);

  fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2));
  console.log(`App ${appData.name} added successfully!`);
} catch (error) {
  console.error('Error reading or writing JSON file:', error);
}
