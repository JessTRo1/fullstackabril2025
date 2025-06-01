import fs from 'fs';
import csv from 'csv-parser';
import { parse } from 'json2csv';

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
};

const writeCSV = (filePath, data) => {
  const fields = Object.keys(data[0] || {}); // Detecta dinámicamente los campos
  const csvData = parse(data, { fields });
  fs.writeFileSync(filePath, csvData);
};

export { readCSV, writeCSV };
