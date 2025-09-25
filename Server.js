const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let users = [
  { id: 1, name: "Aarav Mehta", email: "aarav.mehta@example.com", age: 25 },
  { id: 2, name: "Sneha Kulkarni", email: "sneha.kulkarni@example.com", age: 30 },
  { id: 3, name: "Rohan Desai", email: "rohan.desai@example.com", age: 28 }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

app.get('/users/:id/:email', (req, res) => {
  const { id, email } = req.params;
  const user = users.find(u => u.id === parseInt(id) && u.email === email);
  user ? res.json(user) : res.status(404).send('User not found');
});


app.delete('/users', (req, res) => {
  const { id } = req.body;
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.send(`User with ID ${id} deleted`);
  } else {
    res.status(404).send('User not found');
  }
});
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.id || !newUser.name || !newUser.email) {
    return res.status(400).send('Missing required fields');
  }
  users.push(newUser);
  res.status(201).send('User added successfully');
});
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const user = users.find(u => u.id === id);
  if (user) {
    Object.assign(user, updatedData);
    res.send(`User with ID ${id} updated`);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
