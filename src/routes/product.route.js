const express = require("express");
const router = express.Router();

const {getProducts, addProducts, updateProduct, deleteProduct} = require("../controllers/productController");
const authenticate = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.get("/products", authenticate, getProducts);
router.post("/products", authenticate, authorization, addProducts);
router.put("/products/:id", authenticate, authorization, updateProduct);
router.delete("/products/:id", authenticate, authorization, deleteProduct)

module.exports = router;