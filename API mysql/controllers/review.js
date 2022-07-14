const Reviews = require("../Schemas/Reviews");

module.exports = {
	create(req, res) {
		console.log("🍺 ~ create ~ req", req.body);
		try {
			return Reviews(req.body).save((err, data) => {
				if (!err) {
					res.status(200).send(data);
				} else {
					res.status(400).send(err);
				}
			});
		} catch (error) {
			res.status(400).send(error);
		}
	},
	findByUser(req, res) {
		// console.log("🍺 ~ findByUser ~ req", req);
		try {
			return Reviews.find({ pettsitterId: req.params.id }, (err, data) => {
				if (!err) {
					res.status(200).send(data);
				} else {
					res.status(400).send(err);
				}
			});
		} catch (error) {
			res.status(400).send(error);
		}
	},
};
