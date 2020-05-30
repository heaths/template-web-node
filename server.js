const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Routes
app
    .get('/package*.json', (req, resp) => {
        resp.status(403).end();
    })
    .get('/node_modules/*', (req, resp) => {
        // Mitigate probing for module versions.
        resp.status(404).end();
    })
    .use(express.static(__dirname));

app.listen(port, () => console.log(`Listening for connections on http://localhost:${port}`));
