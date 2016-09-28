var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
    title:'Article One|Madhan',
    heading:'Article One',
    date:'5 sep 16',
    content:`
    <p>This is the First Article.This is the First Article.This is the First Article. This is the First Article.  This is the First Article.   This is the First Article. This is the First Article. This is the First Article.  This is the First Article.  This is the First Article.  This is the First Article. This is the First Article.  This is the This is the First Article.  is the First Article. First Article. vThis is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            
    <p>This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            
    <p>This is the First Article.This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article.  </p>`
};

var htmltemplate =`



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/article1',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});
app.get('/ui/article2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/ui/article3',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
