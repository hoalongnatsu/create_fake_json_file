const fs = require('fs');
const json = require('big-json');

const readStream = fs.createReadStream('faker.json');
const parseStream = json.createParseStream();

parseStream.on('data', function (faker) {
   for (const fake in faker) {
      console.log(`${fake}: ${faker[fake].length}`);
   }
});

readStream.pipe(parseStream);