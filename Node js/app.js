const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db'); 
const routes = require('./routes/route') 


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.use(express.static('public'));

// Synchronize the models with the database (create the tables)
sequelize.sync();


app.use('/', routes);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/submit-form.html');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
