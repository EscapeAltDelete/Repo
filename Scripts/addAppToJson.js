const fs = require('fs');
const path = require('path');
const { APP_NAME, DOWNLOAD_URL, JSON_FILE } = process.env;
const developerName = DOWNLOAD_URL.split('/')[3];
const iconURL = `https://raw.githubusercontent.com/EscapeAltDelete/Repo/main/Images/Icons/${APP_NAME}.png`;
const screenshotURL = `https://img.shields.io/github/release/${developerName}/${APP_NAME}.png?label=&style=flat-square&color=black`;
const appData = {
  name: APP_NAME,
  bundleIdentifier: APP_NAME,
  developerName: developerName,
  localizedDescription: `Latest release of ${APP_NAME}.`,
  iconURL: iconURL,
  tintColor: "#2C3E50",
  screenshotURLs: [screenshotURL],
  versions: [
    {
      version: "∞",
      date: "",
      localizedDescription: `Latest release of ${APP_NAME}.`,
      downloadURL: DOWNLOAD_URL,
      size: 0,
      minOSVersion: "14.0",
      maxOSVersion: "17.0"
    }
  ]
};
const jsonFilePath = path.join(__dirname, `../Repos/${JSON_FILE}.json`);
const jsonFile = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
jsonFile.apps.push(appData);
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonFile, null, 2));
