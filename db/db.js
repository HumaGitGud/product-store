import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import chalk from "chalk";

// Load .env file
dotenv.config({
    path: "./.env"
});
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

// MySQL database configuration - initialize Sequelize to connect to MySQL database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: msg => console.log(`SQL: ${chalk.blue(msg)}`)
})

// Try to authenticate and connect to the database
try {
    await sequelize.authenticate();
    console.log(chalk.magenta("Connected to DB!"));
} catch (err) {
    console.log(`Unable to connect to DB: ${chalk.red(err)}`);
}

export default sequelize;