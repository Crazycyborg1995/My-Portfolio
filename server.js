const express = require('express');
const app = express();
const hbs = require('express-handlebars').create({
  extname: 'hbs',
  defaultLayout: 'main'
});
const path = require('path');
const port = process.env.PORT || 4000;

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    home: true
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/skills', (req, res) => {
  res.render('skills');
});

app.get('/work', (req, res) => {
  res.render('work');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.listen(port, () => {
  console.log('listening on port' + port);
});
