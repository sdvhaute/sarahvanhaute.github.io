const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

// App configuration
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true })); //to be able to parse the body
app.use(express.static(path.join(__dirname, 'public')));






app.get('/home',(req, res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})



