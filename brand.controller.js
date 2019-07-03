async function createBrand(brand, Brand) {
    var brandCreated=await Brand.create(brand)
        .then((data) => {
            console.log("Registrado con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return brandCreated;
}

async function findBrand(Brand) {
    var brandFinded=await Brand.find()
        .then((data) => {
            console.log("Consulta realizada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return brandFinded;
}

async function findBrandById(id, Brand) {
    var brandByIdFinded = await Brand.findById(_id)
        .then((data) => {
            console.log("Consulta por ID realizada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return brandByIdFinded;
}

/*async function updateBrand(id, Brand) {
    var brandUpdated=await Brand.findOneAndUpdate({ _id: id }, { $set: { nombre: nombre } }, function (error, consulta) {
        if (error) {
            console.log("Error");
            process.exit(1);
        }//if
        console.log("Actualización realizada con éxito");
        console.log(consulta);
        process.exit(0);
    });
}

function eliminarMarca(id) {
    Marca.findOneAndDelete({ _id: id }, function (error, consulta) {
        if (error) {
            console.log("Error");
            process.exit(1);
        }//if
        console.log("Eliminación realizada con éxito");
        console.log(consulta);
        process.exit(0);
    });
}*/

module.exports.createBrand = createBrand;
module.exports.findBrand = findBrand;
module.exports.findBrandById = findBrandById;