//Load Basic Things
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Making Two Global Varaibles
var past = ["Spicy Food","Desy Food","Fast Food"];
var workPast = [];
//Setting Engine
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// Apply Request
app.get("/", function(req, res){
  var myDate = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var today = myDate.toLocaleDateString("en-US", options);
  res.render("file", {head: today, liItem: past});
});
app.post("/", function(req, res){
  var listData = req.body.valueSend;
// Working for Work Page
  if(req.body.item === "Work"){

    workPast.push(listData);
    res.redirect("/work");
  }
  else{
    past.push(listData);
    res.redirect("/");
  }
  //Setting Up For Working Page

});
app.get("/work", function(req, res){
  res.render("file", {head: "Work", liItem: workPast});
});
//Setup Port
app.listen("3000");
