// TODO: answer here
// let checkDatatype = param => {
//     return typeof param;
// }

function checkDatatype(param) {
    // Cek jika parameter adalah array
    if (Array.isArray(param)) {
        return 'array';
    }

    // Cek jika parameter adalah null
    if (param === null) {
        return 'null';
    }

    // Kembalikan tipe data lainnya dengan typeof
    return typeof param;
}

// Export fungsi checkDatatype
module.exports = checkDatatype;