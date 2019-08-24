// Dependencies
const express = require('express');
const path = require('path');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Create express app instance.
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require(path.join(__dirname, 'app', 'routing', 'htmlRoutes')));
app.use('/api', require(path.join(__dirname, 'app', 'routing', 'apiRoutes')));


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
});