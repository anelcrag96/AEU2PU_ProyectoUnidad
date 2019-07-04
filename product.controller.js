const brandController = require("./brand.controller");

async function createProduct(product, brand, Product, Brand) {
    var brand = {
        brand: brand
    };

    var brandCreated = await brandController.createBrand(brand, Brand);
    product["brand"] = brandCreated._id;

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Producto registrado con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al registrar el producto");
            return error;
        });
    return productCreated;
}

async function findProduct(Product) {
    var productFinded = await Product.find()
        .then((data) => {
            console.log("Productos consultados con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar los productos");
            return error;
        });
    return productFinded;
}

async function findProductById(_id, Product) {
    var productByIdFinded = await Product.findById(_id)
        .populate("brand")
        .then((data) => {
            console.log("Producto consultado por ID con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar el producto");
            return error;
        });
    return productByIdFinded;
}

async function updateProduct(_id, code, Product) {
    var productUpdated = await Product.findOneAndUpdate({ _id }, { $set: { code } }, function (error, consult) {
        if (error) {
            console.log("Error al actualizar el producto");
            return error;
        }//if
        console.log("Producto actualizado con éxito");
        return consult;
    });
    return productUpdated;
}

async function deleteProduct(_id, Product) {
    var productDeleted = await Product.findOneAndDelete({ _id }, function (error, consult) {
        if (error) {
            console.log("Error al eliminar el producto");
            return error;
        }//if
        console.log("Producto eliminado con éxito");
        return consult;
    });
    return productDeleted;
}

module.exports.createProduct = createProduct;
module.exports.findProduct = findProduct;
module.exports.findProductById = findProductById;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;