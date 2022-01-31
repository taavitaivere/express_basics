const express = require('express')
const app = express();
const path = require('path')
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.get('/questions', (req, res)=> {
    let questions = [
        {title: "What is node.js?", user: "kadi", votes: "10"},
        {title: "What is express.js?", user: "mike", votes: "8"}
    ]
    res.render('index', {questions : questions});
});
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});