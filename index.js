const express = require('express');
const app = express();
// const path = require('path');  
const port = process.env.PORT || 3000 ; 
const {engine} = require("express-handlebars")



app.use(express.static("public"));

app.set ("view engine" , "hbs");
app.engine(".hbs" , engine({
    extname:".hbs",
    defaultLayout:false,
    layoutsDir:"views"
}));





app.get("/about" , (req,res)=>{
  
    res.render("about"); 
});
app.get("/" , (req,res)=>{
    res.render("index" );  
});
app.get("/weather" , (req,res)=>{
    res.render("weather");
});
app.get("*" , (req,res) =>{
    res.render("404error" , {
        errmsg:"page not found please try again"
    });
});

app.listen(port , ()=>{
    console.log(`listen at port no. ${port}`);
})

