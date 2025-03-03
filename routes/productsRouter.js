import express from 'express';
import controller from './../controllers/controller.js';

const router = express.Router();
const { home, allProducts, categoryProducts, productDetail, addProduct, showAddProductForm } = controller;

router.get("/", home);
router.get("/products/all", allProducts);
router.get("/products/:category", categoryProducts);
router.get("/products/product/:id", productDetail);

// GET Request: When a user navigates to the route, the server will render the form for adding a new product
router.get("/products/form/add", showAddProductForm);
// POST Request: When a user submits the form, the route handler will respond to the request by extracting 
// the form values from the request body and inserting them into the database
router.post("/products/form/add", addProduct);

export default router;