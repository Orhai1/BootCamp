import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('mysql://root:1234@localhost:3306/pokemon_db');