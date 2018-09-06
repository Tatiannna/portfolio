const PORT = process.env.PORT || 5000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res){
	res.render("index.ejs");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
