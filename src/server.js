const http = require('http');

http.createServer((req, res) => {
  res.setHeader('set-cookie', 'a=b;Max-Age=600;Domain=cms.com;Path=/');
  res.setHeader('Location', 'http://cms.com:7776/index.html');
  res.statusCode = 302;
  res.end('wirte cookie');
}).listen(7777);