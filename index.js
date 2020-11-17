(async () => {

    //Modules
    const dotenv = require("dotenv");
    const fs = require("fs");
    const { createServer } = require("https");
    const parseURL = require("url").parse;
    const next = require("next");

    // Configure env variables
    dotenv.config();

    // Create app
    const app = next({ dev: process.env.DEV === "true" });
    const handler = app.getRequestHandler();

    // Prepare
    await app.prepare();

    // Create server
    createServer(
        { key: fs.readFileSync(process.env.SSL_KEY), cert: fs.readFileSync(process.env.SSL_CERT) },
        (req, res) => {

            // Parse URL
            const url = parseURL(req.url, true);

            // Handle reqest
            handler(req, res, url);
        }
    ).listen(8000);
})();