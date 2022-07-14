const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/PetSitter"; //Local

mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((db) => {
		console.log("Base de datos conectada.", URI);
	})
	.catch((error) => console.log(error));

module.exports = mongoose;
