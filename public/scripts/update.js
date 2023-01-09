const https = require("https");
const fs = require("fs");
const { argv } = process;
const [,,base] = argv;

const fileNames = ['ramp.css', 'ramp.js', 'ramp.esm.js'];

fileNames.forEach(fn => {
    https.get(`https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/gh-pages/main/lib/${fn}`, (res) => {
        const path = `${base ?? './'}${(base ?? './').slice(-1) === '/' ? '' : '/'}${fn}`;
        const writeStream = fs.createWriteStream(path);

        res.pipe(writeStream);

        writeStream.on("finish", () => {
            writeStream.close();
            console.log(`Finished updating ${fn}.`);
        });
    });
})
