const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse');

const parse = csvParse.parse;

(() => {
  const fileName = 'companyFairSubmissions.csv';
  const csvFilePath = path.resolve(__dirname, fileName);
  if (!fs.existsSync(csvFilePath)) {
    throw new Error(`File "${csvFilePath}" not found.`);
  }
  
  // relevant column headers
  const headers = [
    'company-name', 'focuses', 'position-types', 'interviews', 'website',
    'virtual-fair-times', 'in-person-fair-times', 'logo', 'attending-virtual-fair', 'attending-in-person-fair',
  ];
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  
  parse(fileContent, { delimiter: ',', skip_empty_lines: true}, (error, result) => {
    if (error) { throw error; }

    const columnIndices = headers.map((header) => {
      const index = result[0].indexOf(header);
      if (index === -1) { throw new Error(`ERROR: ${header} field not found`); }
      return index;
    });
  
    const companiesMap = new Map(); // using map to overwrite duplicate company names
    for (const row of result.slice(1)) {
      const tupleRecord = columnIndices.map(index => row[index]);
      const [companyName, companyFocuses, positionTypes, interviews,
        website, virtualTimes, inPersonTimes, logoUrlCheckString,
        attendingVirtualFair, attendingInPersonFair,
      ] = tupleRecord;
      // if row empty, don't add to map
      if (!companyName) { continue; }
      // if attending neither fair, don't add to map
      if (!(attendingVirtualFair === 'Yes' || attendingInPersonFair === 'Yes')) { continue; }

      if (companiesMap.has(companyName.trim().toLowerCase())) { throw new Error(`ERROR: Duplicate company ${companyName} found`); }

      const companyObj = {
        companyName,
        // join focuses into string separated by commas
        focuses: `${companyFocuses}`.split(/\s*,\s*/).join(', '),
        // split position types into an array
        positionTypes: positionTypes.split(/\s*,\s*/),
        website,
        interviews,
        virtualTimes: attendingVirtualFair === 'No' ? "" : virtualTimes,
        inPersonTimes: attendingInPersonFair === 'No' ? "" : inPersonTimes,
        logoUrlCheckString
      }
      companiesMap.set(companyName.trim().toLowerCase(), companyObj);
    }

    // write data to .ts file

    // convert data to JSON string
    const json = JSON.stringify(Array.from(companiesMap.values()), null, 2);
    const startTag = `/**** GEN:S id="companies-csv" */`;
    const endTag = `/**** GEN:E id="companies-csv" */`;
    // read target file contents
    const dataPath = path.resolve(`${__dirname}/src/data/companies.ts`);
    const dataPathContent = fs.readFileSync(dataPath, 'utf-8');
    // compute edge indices of content to replace
    const startIndex = dataPathContent.indexOf(startTag) + startTag.length;
    const endIndex = dataPathContent.indexOf(endTag, startIndex);
    // replace that content with updated content
    const updatedContent = `\nexport const companies = JSON.parse(\`${json}\`);\n`;
    const newContent =
      dataPathContent.substring(0, startIndex)
      + updatedContent
      + dataPathContent.substring(endIndex);
    fs.writeFileSync(dataPath, newContent);
  });
})();
