import express from 'express';
import router from './routes/productsRouter.js';
import sequelize from './db/db.js'; // test connection after finishing writing db.js by just importing
import ProductsSchema from './models/ProductsSchema.js'; // force: true resets table every time server starts

const app = express();
const PORT = 3000;

// middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server static files
app.use(express.static('./public'));

// set pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

// mount router
app.use("/", router);

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});