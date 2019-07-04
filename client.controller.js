async function createClient(client, Client) {
    var clientCreated = await Client.create(client)
        .then((data) => {
            console.log("Cliente registrado con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al registrar al cliente");
            return error;
        });
    return clientCreated;
}

async function findClient(Client) {
    var clientFinded = await Client.find()
        .then((data) => {
            console.log("Clientes consultados con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar los clientes");
            return error;
        });
    return clientFinded;
}

async function findClientById(_id, Client) {
    var clientByIdFinded = await Client.findById(_id)
        .then((data) => {
            console.log("Cliente consultado por ID con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar al cliente");
            return error;
        });
    return clientByIdFinded;
}

async function updateClient(_id, domicile, Client) {
    var clientUpdated = await Client.findOneAndUpdate({ _id }, { $set: { domicile } }, function (error, consult) {
        if (error) {
            console.log("Error al actualizar al cliente");
            return error;
        }//if
        console.log("Cliente actualizado con éxito");
        return consult;
    });
    return clientUpdated;
}

async function deleteClient(_id, Client) {
    var clientDeleted = await Client.findOneAndDelete({ _id }, function (error, consult) {
        if (error) {
            console.log("Error al eliminar al cliente");
            return error;
        }//if
        console.log("Cliente eliminado con éxito");
        return consult;
    });
    return clientDeleted;
}

module.exports.createClient = createClient;
module.exports.findClient = findClient;
module.exports.findClientById = findClientById;
module.exports.updateClient = updateClient;
module.exports.deleteClient = deleteClient;