// harshitpandey@Harshits-MacBook-Air Codeial % mkdir routes controllers views models config
// This query used to create directory that has all the componenets ahve in different folders to make a scalable web application 
// Routes---> All the destination(all Parths)
// // Controllers--->
// models----> Diff Schemas 
// cofig -----> Having different configuration 
// Inastall express and the accquire in index 
// Now git init to initialise git and start to commit changes 
const express = require('express');
const { ppid } = require('process');
const app=express();
const port =8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
// Use express router for different routes and it is exported from its index.js

// require layouts

const expressLayouts = require('express-ejs-layouts');

// To get the request in the correct format Important 
app.use(express.urlencoded());

// To used cookie parser 

app.use(cookieParser());


app.use(express.static('./assets'));




// before using routs i tell to used layouts to render 

app.use(expressLayouts);

// Place scrip and css in layout when render a page 
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );


app.use('/',require('./routes'));




app.set('view engine','ejs');  // Setting up our view engine 
app.set('views','./views');    // Setting up views folder 



app.listen(port ,function(err){    //Making our server listen 
    if(err){
        // console.log('Error',err);   // Print the error 
        
        console.log(`Error in running the server(): ${err}`);
    }
    // Server is up and running 
    console.log(`Server is running successfully on port : ${port}`);
});