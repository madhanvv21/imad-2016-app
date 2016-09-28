var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {
    
    articleone : {
    title:'Article One|Madhan',
    heading:'Article One',
    date:'5 sep 16',
    content:`
    <p>This is the First Article.This is the First Article.This is the First Article. This is the First Article.  This is the First Article.   This is the First Article. This is the First Article. This is the First Article.  This is the First Article.  This is the First Article.  This is the First Article. This is the First Article.  This is the This is the First Article.  is the First Article. First Article. vThis is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            
    <p>This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. </p>
            
    <p>This is the First Article.This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article. This is the First Article.  </p>`
     },
    articletwo:{
        title:'Article two|Madhan',
    heading:'Article two',
    date:'6 sep 16',
    content:`
    <p>This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .</p>
    <p>This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .</p>
    <p>This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .This is the Second Article .</p>`
    },
    articlethree:{
        title:'Article three|Madhan',
    heading:'Article three',
    date:'7 sep 16',
    content:`
    <p>This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .</p>
    <p>This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .</p>
    <p>This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .This is the third article .</p>`
    }
    
};

function createtemplate(data){
    var date=data.date;
    var title=data.title;
    var content=data.content;
    var htmltemplate =`
        <html>
            <head>
                <title> ${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
           
               <link href="/ui/style.css" rel="stylesheet" />
         </head>
            <body>
            
                <div class="container">
                    <div>
                        <a href="/index.html">Home</a>
                    </div><hr>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
            </body>
        </html>
        `;
return htmltemplate; 
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    
    var articleName=res.param.articleName;
    res.send(createtemplate(articleName));
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
