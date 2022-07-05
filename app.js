const xpress = require("express");
const body = require("body-parser");
const app = xpress();
const date = require(__dirname + "/date.js");



let items= ["Make Task"];

let workitems = ["Make Work Task"]

app.set('view engine', 'ejs');
app.use(body.urlencoded({extended:true}));
app.use(xpress.static("public"));

app.get("/", function(req, res) {

let day = date.getDay(); /*--calling my personal module that contains 2 functions---*/

  res.render("list", {ListTitle: day, newtasks:items});

});

app.post("/", function(req, res){

  let item= req.body.newitem;

  if (req.body.list === "Work"){
    workitems.push(item);
    res.redirect("/work")

  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){

  res.render("list", {ListTitle:"Work",newtasks: workitems});
});


app.get("/about", function (req, res){
  res.render("about");
});


app.post("/work", function(req,res){
  const item = req.body.newitem;
  workitems.push(item);
  res.redirect("/");
});





/* ---------------------server started-------------------------*/

app.listen(process.env.PORT || 3000 , function() { /*to launch on heroku*/
  console.log("Server started on port 3000");
});
