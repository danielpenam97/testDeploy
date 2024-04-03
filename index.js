// const http = require('http')

// http.createServer((request, response) => {

//     console.log(request);
//     response.setHeader('Content-Disposition','attachment; filename=lista.csv');
//     response.writeHead(200, {'Content-Type': 'application/csv'});

//     response.write('id; nombre');
//     response.write('1; Daniel');
//     response.write('2; Daniela');
//     response.write('3; Danny');
//     response.end();
// })
// .listen(4201)
// console.log('escuchando el puerto : 4201');

const express = require('express')
const app = express()
require('dotenv').config()
const hbs = require('hbs');

const port = process.env.PORT;


app.use(express.static('public'))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('', function(req,res){

  res.render('home', {
    nombre: 'Daniel Peña',
    titulo: 'Node Course'
  });
})

app.get('/', function(req,res){

    
  res.render('home', {
    nombre: 'Daniel Peña',
    titulo: 'Node Course'
  });
})

app.get('/generic', function (req, res) {
  
  res.render('generic', {
    nombre: 'Daniel Peña',
    titulo: 'Node Course'
  });
})


app.get('/elements', function (req, res) {
    
  res.render('elements', {
    nombre: 'Daniel Peña',
    titulo: 'Node Course'
  });
  })

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port)