const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'My EJS app'});
});

app.listen(3000, () =>{
    console.log('Sever started on port 3000');
});