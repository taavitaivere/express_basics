const express = require('express')
const app = express()
const path = require('path')

const bodyParser = require('path')
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.get('/login', (req, res)=> {
    res.render('index', 'login');
});
app.post('/login',(req, res)=> {
    let username = req.body.username;
    let password = req.body.password;

    if(username === 'user' && password === 'qwerty'){
        re.redirect('/dashboard');
    }
})
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});