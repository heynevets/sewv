// jshint esversion: 6
const express = require("express");
const bp = require("body-parser");
const date = require(__dirname + '/date.js');
const path = require('path')
const favicon = require('serve-favicon')


app = express();

app.use(express.static("public"));
app.use(favicon(path.join('public', 'images', 'favicon.ico')))

app.use(bp.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

var items = [];
var workItem = [];

let daynum = date.getDate();

// app.use(favicon(__dirname + 'public/images/favicon.ico'));

// app.use('/favicon.ico', express.static('public/images/favicon.ico'));


app.get("/", function(req, res) {

  // res.send("Hello Today is " + days[daynum]);
  res.render("list", {
    day: daynum,
    items: items,
    listType: "general"
  });

});
//
// /pdf/SmClComplaint-.pdf
// app.use('/pdf', express.static('/SmClComplaint-.pdf'));

//
// app.get("/work", function(req, res) {
//   res.render("list", {
//     day: daynum,
//     items: workItem,
//     listType: "work"
//   });
// });
//
//
// app.post("/", function(req, res) {
//   var item = req.body.i2add;
//   console.log(req.body);
//   if (req.body.list === 'work') {
//     workItem.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//
//   }
//
//
// });
//



// app.get("/about", function(req, res) {
//   res.render("about");
// });

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server started at port 3000");
  }
});
