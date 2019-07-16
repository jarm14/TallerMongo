const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const database = require('./app/config/dbconfig');

/* Init database */
database.init();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server on port 30000');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', require('./app/routes/routes'));