const fs = require('fs');
const filePath = './Repos/test.json';

const appData = {
  name: process.env.APP_NAME,
  bundleIdentifier: process.env.BUNDLE_IDENTIFIER,
  developerName: process.env.DEVELOPER_NAME,
  localizedDescription: process.env.LOCALIZED_DESCRIPTION,
  iconURL: process.env.ICON_URL,
  tintColor: process.env.TINT_COLOR,
  screenshotURLs: [process.env.SCREENSHOT_URL],
  versions: [
    {
      version: process.env.VERSION,
      date: process.env.DATE,
      localizedDescription: process.env.VERSION_DESCRIPTION,
      downloadURL: process.env.DOWNLOAD_URL,
      size: parseInt(process.env.SIZE, 10),
      minOSVersion: process.env.MIN_OS_VERSION,
      maxOSVersion: process.env.MAX_OS_VERSION
    }
  ]
};

const jsonFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

jsonFile.apps.push(appData);

fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, 2));

console.log(`App ${appData.name} added successfully!`);
