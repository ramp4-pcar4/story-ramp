/**
 * This script is used to update the RAMP4 build in storylines to the latest RAMP4 build on the main branch of the RAMP4 repo.
 * Running npm run update will do the trick.
 */

const https = require('https');
const fs = require('fs');
const { argv } = process;
const [, , base] = argv;

const fileNames = ['ramp.css', 'ramp.js', 'ramp.esm.js'];

fileNames.forEach((fn) => {
    https.get(`https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/gh-pages/main/lib/${fn}`, (res) => {
        const path = `${base ?? './'}${(base ?? './').slice(-1) === '/' ? '' : '/'}${fn}`;
        const writeStream = fs.createWriteStream(path);

        res.pipe(writeStream);

        writeStream.on('finish', () => {
            writeStream.close();
            console.log(`Finished updating ${fn}.`);
        });
    });
});
