var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles={
'article-one' : {
    title:'Article one|Madhan',
    heading:'Article one',
    date:'20 sep 16',
    content:` <p>This is the First Article.This is the First Article.This is the First Article. This is the First Article.  This is the First Article.   This is the First Article. This is the First Article. This is the First Article.  This is the First Article.  This is the First Article.  This is the First Article. This is the First Article.  This is the This is the First Article.  is the First Article. First Article. vThis is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article.This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article.  </p>`
    },
    'article-two':{
    title:'Article Two|Madhan',
    heading:'Article Two',
    date:'22 sep 16',
    content:` <p>This is the First Article.This is the First Article.This is the First Article. This is the First Article.  This is the First Article.   This is the First Article. This is the First Article. This is the First Article.  This is the First Article.  This is the First Article.  This is the First Article. This is the First Article.  This is the This is the First Article.  is the First Article. First Article. vThis is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article.This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article.  </p>`
        
    },
    'article-three':{
    title:'Article Three|Madhan',
    heading:'Article Three',
    date:'20 sep 16',
    content:` <p>This is the First Article.This is the First Article.This is the First Article. This is the First Article.  This is the First Article.   This is the First Article. This is the First Article. This is the First Article.  This is the First Article.  This is the First Article.  This is the First Article. This is the First Article.  This is the This is the First Article.  is the First Article. First Article. vThis is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            <p>This is the First Article.This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article.  </p>`
    }
};

function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html> 
    <head>
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
    
       
   </head>
  <body>
      <div class="container">
        <div>
            <a href="/">Home</a>
        </div><hr>
    <div>
        ${date}
    </div>
    
<div>
  ${content}
  
  </div></div>
  </body>
  </html>
`;

return htmlTemplate;
}

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());


});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
