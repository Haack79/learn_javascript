// comes with some powerful packages
// files system fs
const fs = require('fs');
// for server requests
const http = require('http'); 
// routing node module
const url = require('url');


// dirname is home folder  / readFileSync(rounous) only happens once when app starts up. 
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// console.log(__dirname, json); 
const laptopData = JSON.parse(json); 

// this is what gets called whenever someone accessess or goes to a page on your system. the server
const server = http.createServer((req, res) => {
    // console.log(req); --> tons of request data.  has url init. // can do req.url
    const pathName = url.pathName(req.url, true).pathname;   // puts into a body object 
    const id = url.parse(req.url, true).query.id;
    // PRODUCT OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            let overViewOutput = data;
            // usually use express to handle these things.

            res.end(data); 
            res.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {

                // usually use express to handle these things.
                const cardsOuput = laptopData.map(el => replaceTemplate(data, el)).join('');
                overViewOutput.replae('{%CARDS%}', cardsOutput); 
                res.end(overViewOutput); 
            });
        });

        // LAPTOP DETAIL 
    } else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, 'Content-type': 'text/html');
        // readFile is async 
        res.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            const ouput = replaceTemplate(data, laptop); 
            // usually use express to handle these things.

            res.end(data); 
        });
        // regular expression for image
    } else if ((/\.(jpg|jpeg|png|gif)$/i/).test(pathName)) {
        fs.readFile(`%{__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, {'Content-type': 'img/jpg'});
        })
    
        // URL NOT FOUND
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('not found  ')
    }
    // console.log('someone accessed the server! send a response!); 
    res.writeHead(200, {'Content-type': 'text/html'}); // build this in, send header with response. 
    res.end('This is the response');
});

// this is where you tell it to listen, port 
// 127.0.0.1 is localhost  - below look for requests at port 1337 
server.listen(1337, '127.0.0.1', () => {
    console.log('listening for requests now'); 
});

function replaceTemplate(originalHTML, laptop) {
    let output = originalHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output // res.end(ouput); 
}