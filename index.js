const express = require("express");
const status = require("express-status-monitor");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(status());

app.get("/", (req, res) => {
	fs.readFile("./OxfordDictionary.txt", (err, data) => {
		res.end(data);
	});
});

app.listen(PORT, () => 
	console.log(`Server started at port ${PORT}`)
);