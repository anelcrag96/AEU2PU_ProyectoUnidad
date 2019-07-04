const clientController = require("./client.controller");
const productController = require("./product.controller");

async function createSale(sale, {rfc,name,domicile,phone,email}, Sale, Client) {
    var client = {
        rfc: rfc,
        name: name,
        domicile: domicile,
        phone: phone,
        email: email
    };

    //var product = {
    //    code: code,
    //}

    var clientCreated = await clientController.createClient(client, Client);
    client["_id"] = clientCreated._id;

    //var productCreated = await productController.createProduct(product, Product);
    //product["code"] = productCreated._id;

    var saleCreated = await Sale.create(sale)
        .then((data) => {
            console.log("Venta registrada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al registrar la venta");
            return error;
        });
    return saleCreated;
}

async function findSale(Sale) {
    var saleFinded = await Sale.find()
        .populate("client")
        .then((data) => {
            console.log("Ventas consultadas con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar las ventas");
            return error;
        });
    return saleFinded;
}

async function findSaleById(_id, Sale) {
    var saleByIdFinded = await Sale.findById(_id)
        .populate("client")
        .then((data) => {
            console.log("Venta consultada por ID con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar la venta");
            return error;
        });
    return saleByIdFinded;
}

module.exports.createSale = createSale;
module.exports.findSale = findSale;
module.exports.findSaleById = findSaleById;