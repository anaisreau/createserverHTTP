const http = require('http');
const port = 8000;
const url = require('url');

const requestHandler = (request, response) => {

  console.log(request.url);
  const parsedUrl = url.parse(request.url, true);

if(request.url=='/' ){
  response.end('Please Provide name and City parameters')
}else{
  response.end(`Hello ${parsedUrl.query.name} from ${parsedUrl.query.city}`);
}
  
};


const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});
