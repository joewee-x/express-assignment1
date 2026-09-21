const products = require("../productsDb");

const getProducts = (req, res) => {
    return res.status(200).json({
        status : "success",
        products
    })
};


const addProducts = (req, res) => {
    const {name, description, price} = req.body;

    const newProduct = {
        id : products.length + 1,
        name,
        description,
        price
    };

    products.push(newProduct);

    return res.status(201).json({
        status : "success",
        message : "Product added successfully",
        product : newProduct
    })
};


const updateProduct = (req, res) => {
    const {id} = req.params;
    const {name, description, price} = req.body;

    const product = products.find(product => product.id === Number(id));

    if(!product) {
        return res.status(404).json({
            status : "error",
            message : "Product not found"
        });
    };

    product.name = name;
    product.description = description;
    product.price = price;

    res.status(200).json({
        status : "success",
        message : "Product updated successfully",
        product
    });
};

const deleteProduct = (req, res) => {
    const {id} = req.params;

    const productIndex = products.findIndex(product => product.id === Number(id));

    if(!productIndex === -1){
        return res.status(404).json({
            status : "error",
            message : "Product not found"
        });
    };

    const deletedProduct = products.splice(productIndex, 1);

    return res.status(200).json({
        status : "success",
        message : "Product deleted successfully",
        product : deletedProduct[0]
    })
}

module.exports = {getProducts, addProducts, updateProduct, deleteProduct};