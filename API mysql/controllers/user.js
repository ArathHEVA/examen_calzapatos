const Sequelize = require("sequelize");
const user = require("../models").user;
module.exports = {
	create(req, res) {
		console.log("🍺 ~ create ~ req", req.body);
		return user
			.create({
				name: req.body.name,
				lastname: req.body.lastname,
				address: req.body.address,
				email: req.body.email,
				cellphone: req.body.cellphone,
				password: req.body.password,
			})
			.then((user) => res.status(200).send(user))
			.catch((error) => res.status(400).send(error));
	},
	list(_, res) {
		return user
			.findAll({})
			.then((user) => res.status(200).send(user))
			.catch((error) => res.status(400).send(error));
	},
	find(req, res) {
		return user
			.findAll({
				where: {
					name: req.params.name,
				},
			})
			.then((user) => res.status(200).send(user))
			.catch((error) => res.status(400).send(error));
	},
	login(req, res) {
		return user
			.findAll({
				where: {
					email: req.body.email,
					password: req.body.password,
				},
			})
			.then((user) => res.status(200).send(user))
			.catch((error) => res.status(400).send(error));
	},
};
