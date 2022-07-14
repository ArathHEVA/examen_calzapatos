const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("./dbConnection/bd");
// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger("dev"));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
// app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
	// Métodos que se van a permitir
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Headers que se van a permitir
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Para permitir credenciales (Uso de cookies)
	res.setHeader("Access-Control-Allow-Credentials", true);
	//Aceptar todas las entredas
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Pasar al siguiente middleware
	next();
});

// Setup a default catch-all route that sends back a welcome message in JSON format.
require("./routes")(app);
app.get("*", (req, res) =>
	res.status(200).send({
		message: "Welcome to the beginning of nothingness.",
	})
);

const port = 5000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () =>
	console.log(
		"el servidor está escuchando peticiones en http://localhost:5000/"
	)
);
module.exports = app;
