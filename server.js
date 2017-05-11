var express = require('express');

// the app

let myApp  = express();

// expose the folder

myApp.use(express.static('public'));

// specify  port 

let port = process.env.PORT  || 9000;

// redirect the http traffic

myApp.use(function(req,res,next){
    if(req.header['x-forwarded-proto'] === 'https'){
         res.redirect(`http://${res.hostname}${res.url}`);
    }else{
             next();
    }
});

// express's ability to listen

myApp.listen(port, function(){
    console.log(`listening on port ${port},yea`);
});