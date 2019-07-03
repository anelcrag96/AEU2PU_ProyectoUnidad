function createClient(client) {
    create(client)
        .then((data) => {
            console.log("Registrado con éxito");
            console.log(data);
            process.exit(0);
        })
        .catch((error) => {
            console.log("Error");
            process.exit(0);
        });
}

function findClient(name) {
    findClient(name)
        .then((data) => {
            console.log("Consulta realizada con éxito");
            console.log(data);
            process.exit(0);
        })
        .catch((error) => {
            console.log("Error");
            process.exit(0);
        });
}

async function findByName(nameToFind, Client) {

    var params = {
        name: nameToFind
    }

    var clientFind = await Client.find(params)
        //.populate("brand")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return clientFind;
}

module.exports.findByName=findByName;

function findIdClient(id) {
    findById(id)
        .then((data) => {
            console.log("Consulta por ID realizada con éxito");
            console.log(data);
            process.exit(0);
        })
        .catch((error) => {
            console.log("Error");
            process.exit(0);
        });
}

function updateClient(id, phone) {
    findOneAndUpdate({ _id: id }, { $set: { phone: phone } }, function (error, consult) {
        if (error) {
            console.log("Error");
            process.exit(1);
        }//if
        console.log("Actualización realizada con éxito");
        console.log(consult);
        process.exit(0);
    });
}

function deleteClient(id) {
    findOneAndDelete({ _id: id }, function (error, consult) {
        if (error) {
            console.log("Error");
            process.exit(1);
        }//if
        console.log("Eliminación realizada con éxito");
        console.log(consult);
        process.exit(0);
    });
}

module.exports.createClient = createClient;
module.exports.findClient = findClient;
module.exports.findIdClient = findIdClient;
module.exports.updateClient = updateClient;
module.exports.deleteClient = deleteClient;