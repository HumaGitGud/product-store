import ProductsSchema from "../models/ProductsSchema.js";

// Perform database interactions using CRUD functions

// Create product
async function createProduct(productData) {
    try {
        const product = await ProductsSchema.create(productData);
        return product;
    } catch (err) {
        console.log("Failed to create product: ", err);
    }
}

// Read all products
async function getAllProducts() {
    try {
        const product = await ProductsSchema.findAll();
        return product;
    } catch (err) {
        console.log("Failed to fetch/read products: ", err);
    }
}

// Read product by id
async function getProductById(id) {
    try {
        const product = await ProductsSchema.findByPk(id);
        return product;
    } catch (err) {
        console.log("Failed to fetch/read product by ID: ", err);
    }
}

// Update product
async function updateProduct(id, updatedData) {
    try {
        const product = await ProductsSchema.update(updatedData, {
            where: { id: id }
        });
        return product;
    } catch (err) {
        console.log("Failed to update product: ", err);
    }
}

// Delete product
async function deleteProduct(id) {
    try {
        const product = await ProductsSchema.destroy({
            where: { id: id }
        });
        return product;
    } catch (err) {
        console.log("Failed to delete product: ", err);
    }
}

export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}