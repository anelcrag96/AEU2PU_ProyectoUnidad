const clientController = require("./client.controller");
const productController = require("./product.controller");

async function createSale(sale, client, product, Sale, Client, Product) {
    
    var clientCreated = await clientController.createClient(client, Client);
    sale["client"] = clientCreated._id;

    var productCreated = await productController.createProduct(product, Product);
    sale["product"] = { "_id": productCreated._id}

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

async function createSale(sale, Sale){
    var saleCreated = await Sale.create(sale)
    .then((data)=> {
        console.log("Venta registrada con exito");
        return data;
    })
    .catch((error) => {
        console.log("Error al registrar venta");
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
        .populate("product")
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

module.exports.createSales = createSales;
module.exports.createSale = createSale;
module.exports.findSale = findSale;
module.exports.findSaleById = findSaleById;