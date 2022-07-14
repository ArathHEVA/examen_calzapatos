/* Controllers */
const userController = require("../controllers/user");
const petsitterController = require("../controllers/petsitter");
const reviewController = require("../controllers/review");
module.exports = (app) => {
	app.get("/api", (req, res) =>
		res.status(200).send({
			message:
				"Example project did not give you access to the api web services",
		})
	);
	app.post("/api/user/create", userController.create);
	app.get("/api/user/list", userController.list);
	app.post("/api/user/login", userController.login);
	app.get("/api/user/find/name/:name", userController.find);

	app.post("/api/petsitter/create", petsitterController.create);
	app.post("/api/petsitter/update", petsitterController.update);
	app.post("/api/petsitter/delete/id/:id", petsitterController.delete);
	app.get("/api/petsitter/list", petsitterController.list);
	app.get("/api/petsitter/findByUser/id/:id", petsitterController.findByUser);
	app.get("/api/petsitter/findbystate/id/:id", petsitterController.find);
	app.post("/api/petsitter/addPets", petsitterController.addPets);
	app.get(
		"/api/petsitter/getPetsByUser/id/:id",
		petsitterController.getPetsByUser
	);
	app.post("/api/petsitter/deletePetType", petsitterController.deletePetType);
	app.post("/api/review/create", reviewController.create);
	app.get("/api/review/findByUser/id/:id", reviewController.findByUser);
};
