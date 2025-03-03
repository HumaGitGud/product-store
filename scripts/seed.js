import sequelize from "../db/db.js";
import ProductsSchema from "../models/ProductsSchema.js";
import products from "../models/products.js";
import chalk from "chalk";

// Seed data into the database - bulk create records 
async function seedDatabase() {
    try {
        console.log(chalk.yellow("Seeding database..."));
        await ProductsSchema.bulkCreate(products);
        console.log(chalk.green("Database seeded successfully"));
    } catch (err) {
        console.log(chalk.red("Failed to seed database: ", err));
    } finally {
        await sequelize.close();
        console.log(chalk.blue("Database connection closed."));
    }
}

// added "seed": "node scripts/seed.js", in package.json
// run seed - npm run seed
seedDatabase();