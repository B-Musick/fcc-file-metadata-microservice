'use strict';

var express = require('express');
var cors = require('cors');
let bodyParser = require('body-parser');
// File handling - https://www.npmjs.com/package/express-fileupload
let fileUpload = require('express-fileupload');
// require and use "multer"...

var app = express();
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
app.post('/api/fileanalyse',(req,res)=>{
  // If no file input
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // Get the file from the input
  let file = req.files.upfile;
  // Make object to return
  let fileObject = {
    name: file.name,
    type: file.mimetype,
    size: file.size
  }
  // Return object as JSON
  res.json(fileObject);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
