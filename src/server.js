const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Welcome to My Application");
});

app.listen(3000, function(){
    console.log("App listening to port 3000");
});