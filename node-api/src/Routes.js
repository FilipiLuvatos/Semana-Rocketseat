const express = require('express');


const ProductController = require("./Controller/ProductController");

Routes.get('/products', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps white React',
        url: 'www.google.com.br'
    })
    res.send("Filipi de Luca Valim dos Santos ");

})

module.exports = Routes;