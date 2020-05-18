const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs')
console.log(__dirname)
console.log(path.join(__dirname,'../public'));

// app.com
viewspath = path.join(__dirname, '../templates/views')
partialPath =  path.join(__dirname, '../templates/partial')
console.log(partialPath)
app.set('views', viewspath)
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(partialPath);

const port = process.env.PORT || 4000;
// app.get('/', (req, res)=>{
//     res.send('<h1>hello express<h1>');
    
// } );

// app.get('/help', (req, res)=>{
//     res.send('help page');
    
// } );
// app.get('/about', (req, res)=>{
//     res.send({name: 'trilok',
// last_name: 'rawat'});
    
// } );
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('index', {
        title:  'main'
    });
    
} );
app.get('/about', (req, res)=>{
    res.render('about', {
        title:  'about'
    });
    
} );
app.get('/help', (req, res)=>{
    res.render('help', {
        'help_text': 'trilok',
        title:  'help'
    });
    
} );
app.get('/weather', (req, res)=>{
    res.send('<h4><b>weather page</b></h4>');
    
} );
app.get('**', (req, res)=>{
    res.send('<h4><b>weather page</b></h4>');
    
} );

app.listen(port, (err, result)=> {
    console.log('server is start on port 3000');
})