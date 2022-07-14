"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("petsitter", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cityid: {
				type: Sequelize.INTEGER,
				references: {
					model: "city",
					key: "id",
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			lastname: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			cellphone: {
				type: Sequelize.STRING,
			},
			photourl: {
				type: Sequelize.STRING,
			},
			age: {
				type: Sequelize.INTEGER,
			},
			petstypes: {
				type: Sequelize.JSON,
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("petsitter");
	},
};
