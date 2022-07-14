"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			lastname: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			cellphone: {
				type: Sequelize.STRING,
			},
			password: {
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
		await queryInterface.dropTable("user");
	},
};
