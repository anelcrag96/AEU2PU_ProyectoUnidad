var mongoose = require("mongoose");
const brandController = require("./brand.controller");
const productController = require("./product.controller");
const clientController = require("./client.controller");
const saleController = require("./sale.controller");
var brandSchema = require("./brand.model");
var productSchema = require("./product.model");
var clientSchema = require("./client.model");
var saleSchema = require("./sale.model");

mongoose.connect('mongodb://localhost:27017/ProyectoU2', { useNewUrlParser: true });
var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');
var Client = mongoose.model('Client', clientSchema, 'clients');
var Sale = mongoose.model('Sale', saleSchema, 'sales');

//-----------------------------------MARCA Y PRODUCTO-----------------------------------
//CREACIÓN DE UN PRODUCTO Y SU MARCA CORRESPONDIENTE
async function createBrandAndProduct() {
    var product = {
        code: "Tortillas",
        pricebuy: 17,
        saleprice: 22,
        quantity: 20,
        min: 5,
        max: 40
    }
    const brand = "La Corita";

    var productCreated = await productController.createProduct(product, brand, Product, Brand);
    console.log("Producto creado con éxito");
    console.log(productCreated);
}

//CONSULTAR TODOS LOS PRODUCTOS
async function findProduct() {
    var productFinded = await productController.findProduct(Product);
    console.log("Consulta realizada con éxito");
    console.log(productFinded);
}

//CONSULTAR UN PRODUCTO POR ID
async function findProductById(_id) {
    var productByIdFinded = await productController.findProductById(_id, Product);
    console.log("Consulta realizada con éxito");
    console.log(productByIdFinded);
}

//ACTUALIZAR UN PRODUCTO
async function updateProduct(_id, code) {
    var productUpdated = await productController.updateProduct(_id, code, Product);
    console.log("Producto actualizado con éxito");
    console.log(productUpdated);
}

//ELIMINAR UN PRODUCTO
async function deleteProduct(_id) {
    var productDeleted = await productController.deleteProduct(_id, Product);
    console.log("Producto eliminado con éxito");
    console.log(productDeleted);
}

//CREAR UNA NUEVA MARCA
async function createBrand() {
    var brand = {
        brand: "Acer"
    }

    var brandCreated = await brandController.createBrand(brand, Brand);
    console.log("Marca registrada con éxito");
    console.log(brandCreated);
}

//CONSULTAR TODAS LAS MARCAS
async function findBrand() {
    var brandFinded = await brandController.findBrand(Brand);
    console.log("Marcas consultadas con éxito");
    console.log(brandFinded);
}

//CONSULTAR UNA MARCA POR ID
async function findBrandById(_id) {
    var brandByIdFinded = await brandController.findBrandById(_id, Brand);
    console.log("Marca consultada por ID con éxito");
    console.log(brandByIdFinded);
}

//ACTUALIZAR UNA MARCA
async function updateBrand(_id, brand) {
    var brandUpdated = await brandController.updateBrand(_id, brand, Brand);
    console.log("Marca actualizada con éxito");
    console.log(brandUpdated);
}

//ELIMINAR UNA MARCA
async function deleteBrand(_id) {
    var brandDeleted = await brandController.deleteBrand(_id, Brand);
    console.log("Marca eliminada con éxito");
    console.log(brandDeleted);
}

//createBrandAndProduct();
//findProduct();
//findProductById('5d1d3468b9ad4108101dab3b');
//updateProduct('5d1d47140a4726256048e229','LAPTOP-UK184A88')
//deleteProduct('5d1d47140a4726256048e229')
//createBrand();
//findBrand();
//findBrandById('5d1d3466b9ad4108101dab3a');
//updateBrand('5d1d3466b9ad4108101dab3a', 'Lupita')
//deleteBrand('5d1d3466b9ad4108101dab3a')

//-----------------------------------CLIENTE-----------------------------------
//CREAR UN NUEVO CLIENTE
async function createClient() {
    var client = {
        rfc: "CUAA961101R86",
        name: "Ángel Eliezer Cruz Aguilar",
        domicile: "Prisciliano Romero #174A",
        phone: 3112476998,
        email: "anelcruzag@ittepic.edu.mx"
    }

    var clientCreated = await clientController.createBrand(client, Client);
    console.log("Cliente registrado con éxito");
    console.log(clientCreated);
}

//CONSULTAR TODOS LOS CLIENTES
async function findBrand() {
    var brandFinded = await brandController.findBrand(Brand);
    console.log("Marcas consultadas con éxito");
    console.log(brandFinded);
}

//CONSULTAR UN CLIENTE POR ID
async function findBrandById(_id) {
    var brandByIdFinded = await brandController.findBrandById(_id, Brand);
    console.log("Marca consultada por ID con éxito");
    console.log(brandByIdFinded);
}

//ACTUALIZAR UN CLIENTE
async function updateBrand(_id, brand) {
    var brandUpdated = await brandController.updateBrand(_id, brand, Brand);
    console.log("Marca actualizada con éxito");
    console.log(brandUpdated);
}

//ELIMINAR UN CLIENTE
async function deleteBrand(_id) {
    var brandDeleted = await brandController.deleteBrand(_id, Brand);
    console.log("Marca eliminada con éxito");
    console.log(brandDeleted);
}

//-----------------------------------VENTA-----------------------------------