// TUTORIAL: https://www.youtube.com/watch?v=L72fhGm1tfE

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const { send } = require('process');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middlware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// How to load HTML file without Express
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
