import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

// Define productsDB schema/table
const ProductsSchema = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0, 255]
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0, 255]
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0 // enforce price >= 0
        }
    },
    description: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    features: {
        type: DataTypes.JSON,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

await ProductsSchema.sync({ alter: true });

export default ProductsSchema;