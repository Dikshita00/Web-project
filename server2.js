const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set view engine to hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET route to render form
app.get('/', (req, res) => {
  res.render('calc');
});

// POST route to calculate sum
app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const result = num1 + num2;
  res.render('calc', { num1, num2, result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
