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

const jsonFilePath = path.join(__dirname, 'Repos/test.json');
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

jsonFile.apps.push(appData);

fs.writeFileSync(jsonFilePath, JSON.stringify(jsonFile, null, 2));
