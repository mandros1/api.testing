const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/product', (req, res, next) => {
    const { body } = req;
    console.log(body);
    res.redirect('/');
});

app.use( '/add-product', (req, res, next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    next(); // Skip not to execute any other response.sends
});

app.use( '/', (req, res, next) =>{
    res.send('<h1>Hello from express brah</h1>');
});

app.listen(3000);

