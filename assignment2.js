const http = require('http');
const url = require('url');

const todos = [
  { id: 1, task: 'Learn JavaScript' },
  { id: 2, task: 'Build a web server' },
  { id: 3, task: 'Write some code' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const parts = pathname.split('/').filter(Boolean); 

  if (parts.length === 1 && parts[0] === 'todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
    return;
  }

  if (parts.length === 2 && parts[0] === 'todos') {
    const id = parseInt(parts[1]);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`<h1>Todo with id ${id} not found</h1>`);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Todo #${todo.id}</h1><p>Task: ${todo.task}</p>`);
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Not Found</h1>');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
