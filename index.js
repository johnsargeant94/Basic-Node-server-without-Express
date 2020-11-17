const http = require ('http');
// built in module - this doesnt need installing (no need to run 'npm i http')
 
const server = http.createServer((req, res) => {
    console.log('server is running on 3005');

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first node page without express</title></head>')
    res.write('<body><h1>Hello, Server. How are you today?</h1>')
    res.write('<h2>Hello its John</h2>')
    res.write('</body>')
    res.write('</html>')
    res.end();
});
 
server.listen(3005);