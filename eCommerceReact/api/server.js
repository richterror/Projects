// server.js = fil som gör att jag kan starta igång servern 

const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8085; 

const serverURI = 'http://localhost:' + PORT; 
const mongoURI = process.env.MONGO_URI;

// Lyssnar efter ändringar i appen
app.listen(PORT, () => console.log('Webserver: ' + serverURI));

// Mongoose används för att koppla ihop servern med databasen
mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to DB'));
