const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const items = [];
const workItems = [];
let title = "";

app.get("/", function(req, res){
    title = date();
    res.render('list', {listTitle: title, newListItem : items});
})

app.get(`/work`, function(req, res){
    title = "Work List";
    res.render('list', {listTitle: title, newListItem : workItems});
})

app.post("/", function(req, res){
    let item = req.body.todo1;
    if(req.body.submit === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

// app.post("/work", function(req, res){
//     var workItem = req.body.todo1;
//     res.redirect("/work");
// })

app.listen(3000, function(){
    console.log("Server is running on port 3000 ....");
})