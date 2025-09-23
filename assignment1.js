const http=require('http');
const url=require('url');
const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  const fName = query.fName || "Guest";
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end(`<h>Hello ${fName}</h1>`);
});

const PORT =300;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});