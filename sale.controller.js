const clientController = require('./client.controller');
const productController = require('./product.controller');

async function createSale(sale, product, client, Sale, Product, Client ){
    var client = {
        client: client
    };
    var product = {
        product: product
    };

    
    var clientController = await clientController.createClient(client, Client);
    sale["client"] = clientCreated._id;

    var productController = await productController.createProduct(product, Product);
    sale["product"] = productCreate._id;

    var saleCreated = await Sale.create(sale)
        .then((data)=> {
            console.log("Confirmed Sale!");
            return data;
        })
        .catch((error) => {
            console.log("Operation error (SALE)");
            return error;
        });
    return saleCreated;

}

async function findSale(Sale){
    var saleFinded = await  Sale.find()
    .then((data) => {
        console.log("Sale found successfully");
        return data;
    })
    .catch((error) => {
        console.log("Sale not found");
        return error;
    });

return saleFinded;
}

async function findSaleById(_id, Client) {
    var SaleByIdFinded = await Client.findById(_id)
        .populate("brand")//////////////
        .then((data) => {
            console.log("Specific sale found");
            return data;
        })
        .catch((error) => {
            console.log("specific sale not found");
            return error;
        });
    return SaleByIdFinded;
}