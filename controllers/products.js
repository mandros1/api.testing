const Product = require("../models/product");
let productObject;

exports.getAddProductPage = (req, res, next) =>{
    res.render('admin/add-product', {
        pageTitle: "Add Product",
        submitText: "Add Product",
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.addProducts = (req, res, next) => {
    productObject = new Product(req.body.title);
    productObject.save();
    res.redirect('/');
};


exports.getProducts = (req, res, next) =>{
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};
