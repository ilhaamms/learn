function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {

    let prodi;
    switch (programId) {
        case "ACC":
            prodi = `Akuntansi`;
            break;
        case "HIN":
            prodi = `Hubungan Internasional`;
            break;
        case "IAB":
            prodi = `Ilmu Administrasi Bisnis`;
            break;
        case "IAP":
            prodi = `Ilmu Administrasi Publik`;
            break;
        case "MJN":
            prodi = `Manajemen`;
            break;
        case "TKM":
            prodi = `Teknik Kimia`;
            break;
    }

    if (gpa > 4 || gpa < 0) {
        return `Invalid gpa number`
    }

    let totalSks;
    if (gpa > 2.99) {
        totalSks = 24;
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`
    } else if (gpa >= 2.5 && gpa <= 2.99) {
        totalSks = 21;
    } else if (gpa >= 2 && gpa <= 2.49) {
        totalSks = 18;
    } else if (gpa >= 1.5 && gpa <= 1.99) {
        totalSks = 15
    } else if (gpa >= 0 && gpa <= 1.49) {
        totalSks = 12;
    }

    let message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${prodi} dan hanya dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`

    return message;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
