var mongoose = require("mongoose");
const brandController = require("./brand.controller");
const productController = require("./product.controller");
const clientController=require("./client.controller");
const saleController=require("./sale.controller");
var brandSchema = require("./brand.model");
var productSchema = require("./product.model");
var clientSchema=require("./client.model");
var saleSchema=require("./sale.model");

mongoose.connect('mongodb://localhost:27017/ProyectoU2', { useNewUrlParser: true });
var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');

async function createBrandAndProduct() {
    var product = {
        codigo: "Tortillas",
        pcompra: 17,
        pventa: 22,
        cantidad: 20,
        minima: 5,
        maxima: 40
    }
    const brand = "La Corita";

    var productCreated = await productController.createProduct(product, brand, Product, Brand);
    console.log("Producto creado con éxito");
    console.log(productCreated);
}

async function findProduct() {
    var productFinded = await productController.findProduct(Product);
    console.log("Consulta realizada con éxito");
    console.log(productFinded);
}

async function findProductById(_id){
    var productByIdFinded=await productController.findProductById(_id,Product);
    console.log("Consulta realizada con éxito");
    console.log(productByIdFinded);
}

//createBrandAndProduct();
//findProduct();
findProductById('5d1d3468b9ad4108101dab3b');