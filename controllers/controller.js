import dataLayer from "./dataLayer.js";

const status200 = 200;

const home = async (req, res) => {
    try {
        // fetch all products from database
        const productList = await dataLayer.getAllProducts();
        // extract unique categories from product list
        const categories = [];
        for (const product of productList) {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
        }
        res.status(status200).render("home", { categories });
    } catch (err) {
        console.log("Failed to fetch products:", err);
    }
};

const allProducts = async (req, res) => {
    // fetch all products from database
    const productList = await dataLayer.getAllProducts();
    res.status(status200).render("all-products", { productList });
};

const categoryProducts = async (req, res) => {
    // get category from route params
    const category = req.params.category;
    try {
        // fetch all products from database
        const productList = await dataLayer.getAllProducts();
        // iterate products array and return all matching elements
        const filtered = productList.filter(product => product.category === category);
        // if category not found/ doesnt exist = render a message
        if (filtered.length === 0) {
            return res.status(status200).render("category-products", { message: `No products found in the '${category}' category` });
        }
        res.status(status200).render("category-products", { category, productList: filtered });
    } catch (err) {
        console.log("Failed to fetch category products:", err);
    }
    
};

const productDetail = async (req, res) => {
    const productId = parseInt(req.params.id);
    try {
        // fetch the product by ID from the database
        const product = await dataLayer.getProductById(productId);
        if (!product) return res.status(404).send("Product not found");
        res.status(status200).render("product-detail", { product });
    } catch (err) {
        console.log("Failed to fetch product details", err);
    }
};

const showAddProductForm = (req, res) => {
    res.status(status200).render("add-product");
};

const addProduct = async (req, res) => {
    // get product data from the form
    const productData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        features: req.body.features.split(","),
        image: req.body.image
    };

    try {
        // create a new entry in the database
        await dataLayer.createProduct(productData);
        res.redirect("/products/all"); // redirect to all products page
    } catch (err) {
        console.log("Failed to add product", err);
    }
}

export default {
    home,
    allProducts,
    categoryProducts,
    productDetail,
    addProduct,
    showAddProductForm
};