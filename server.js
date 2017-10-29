/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require('express');
const path = require('path');

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

// Set port
const port = process.env.PORT || '8889';
app.set('port', port);

// Serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));
