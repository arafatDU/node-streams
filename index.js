const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	fs.readFile("./OxfordDictionary.txt", (err, data) => {
		res.end(data);
	});
});

app.listen(PORT, () => 
	console.log(`Server started at port ${PORT}`)
);