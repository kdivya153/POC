const fs = require('fs');
const path = require('path');
const SOURCE_CONFIG_FILE = path.join(
  __dirname,
  '..',
  'node_modules',
  'configModule',
  'constants',
  'config.json'
);
const DEST_CONFIG_FILE = path.join(__dirname, '..', '.', 'supportConfig.json');
const SOURCE_REPORT_TEMPLATE = path.join(__dirname, '..', '/reportTemplates/scenarios.tmpl');
const DEST_REPORT_TEMPLATE  = path.join(__dirname, '..', 'node_modules/multiple-cucumber-html-reporter/templates/components/scenarios.tmpl');
try {
    // Check if the source file exists
    if (fs.existsSync(SOURCE_CONFIG_FILE)) {
    // Copy the file to the new location with a new name
    fs.copyFileSync(SOURCE_CONFIG_FILE, DEST_CONFIG_FILE);
    console.log(`Copied ${SOURCE_CONFIG_FILE} to ${DEST_CONFIG_FILE}`);
    } else {
    // Source file does not exist, do nothing
    console.log('Source file does not exist, no action taken.');
    }
    // Check if source file exists
    if (!fs.existsSync(SOURCE_REPORT_TEMPLATE)) {
        throw new Error(`Source template file ${SOURCE_REPORT_TEMPLATE} does not exist.`);
    }
    // Check if target directory exists, create it if not
    if (!fs.existsSync(DEST_REPORT_TEMPLATE)) {
        throw new Error(`Source template file ${DEST_REPORT_TEMPLATE} does not exist.`);
    }
    // Copy the file synchronously
    fs.copyFileSync(SOURCE_REPORT_TEMPLATE, DEST_REPORT_TEMPLATE);
    console.log(`Successfully copied ${SOURCE_REPORT_TEMPLATE} to ${DEST_REPORT_TEMPLATE}.`);
} catch (error) {
console.error('Error:', error.message);
}

