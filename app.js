const PORT = process.env.PORT || 5000;
var express = require("express");

var app = express();

app.get("/", function (req, res){
	res.render("views/index.ejs");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
