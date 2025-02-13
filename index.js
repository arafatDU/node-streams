const express = require("express");
const status = require("express-status-monitor");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(status());

app.get("/", (req, res) => {
	const stream = fs.createReadStream("./OxfordDictionary.txt", "utf-8");
	stream.on("data", (chunk) => res.write(chunk));
	stream.on("on", () => res.end());
});

app.listen(PORT, () => 
	console.log(`Server started at port ${PORT}`)
);