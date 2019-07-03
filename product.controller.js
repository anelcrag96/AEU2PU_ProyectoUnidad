const brandController = require("./brand.controller");

async function createProduct(product, brand, Product, Brand) {
    var brand = {
        brand: brand
    };

    var brandCreated = await brandController.createBrand(brand, Brand);
    product["brand"] = brandCreated._id;

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Registrado con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return productCreated;
}

async function findProduct(Product) {
    var productFinded=await Product.find()
        .then((data) => {
            console.log("Consulta realizada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return productFinded;
}

async function findProductById(_id, Product) {
    var productByIdFinded = await Product.findById(_id)
        .populate("brand")
        .then((data) => {
            console.log("Consulta por ID realizada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return productByIdFinded;
}


module.exports.createProduct = createProduct;
module.exports.findProduct=findProduct;
module.exports.findProductById=findProductById;