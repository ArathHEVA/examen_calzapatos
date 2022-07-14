"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("city", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			stateid: {
				type: Sequelize.INTEGER,

				references: {
					model: "state",
					key: "id",
				},
			},
			name: {
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
		await queryInterface.dropTable("citie");
	},
};
