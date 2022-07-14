"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("petstype", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("petstype");
	},
};
