async function createBrand(brand, Brand) {
    var brandCreated = await Brand.create(brand)
        .then((data) => {
            console.log("Marca registrada con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al registrar la marca");
            return error;
        });
    return brandCreated;
}

async function findBrand(Brand) {
    var brandFinded = await Brand.find()
        .then((data) => {
            console.log("Marcas consultadas con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar las marcas");
            return error;
        });
    return brandFinded;
}

async function findBrandById(_id, Brand) {
    var brandByIdFinded = await Brand.findById(_id)
        .then((data) => {
            console.log("Marca consultada por ID con éxito");
            return data;
        })
        .catch((error) => {
            console.log("Error al consultar la marca");
            return error;
        });
    return brandByIdFinded;
}

async function updateBrand(_id, brand, Brand) {
    var brandUpdated = await Brand.findOneAndUpdate({ _id }, { $set: { brand } }, function (error, consult) {
        if (error) {
            console.log("Error al actualizar la marca");
            return error;
        }//if
        console.log("Marca actualizada con éxito");
        return consult;
    });
    return brandUpdated;
}

async function deleteBrand(_id, Brand) {
    var brandDeleted = await Brand.findOneAndDelete({ _id }, function (error, consult) {
        if (error) {
            console.log("Error al eliminar la marca");
            return error;
        }//if
        console.log("Marca eliminada con éxito");
        return consult;
    });
    return brandDeleted;
}

module.exports.createBrand = createBrand;
module.exports.findBrand = findBrand;
module.exports.findBrandById = findBrandById;
module.exports.updateBrand = updateBrand;
module.exports.deleteBrand = deleteBrand;