function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {

    let fakultas;
    let progdi;
    let yearStudent;
    let numberStudent;

    if (studentId.slice(0, 4) === "FTIS") {
        fakultas = kodeFakultas(studentId.slice(0, 4));
        yearStudent = studentId.slice(4, 8);
        progdi = kodeProgramStudi(Number(studentId.slice(8, 10)));
        numberStudent = studentId.slice(10);
    } else if (studentId.slice(0, 2) === "FE" || studentId.slice(0, 2) === "FT") {
        fakultas = kodeFakultas(studentId.slice(0, 2));
        yearStudent = studentId.slice(2, 6);
        progdi = kodeProgramStudi(Number(studentId.slice(6, 8)));
        numberStudent = studentId.slice(8);
    } else {
        fakultas = kodeFakultas(studentId.slice(0, 5));
        yearStudent = studentId.slice(5, 9);
        progdi = kodeProgramStudi(Number(studentId.slice(9, 11)));
        numberStudent = studentId.slice(11);
    }

    // FTIS2013510001
    // "FISIP2010310164"
    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${progdi} pada ${fakultas} sejak tahun ${yearStudent}.`
}

let kodeFakultas = (kodeFakultas) => {
    if (kodeFakultas === "FE") {
        return `Fakultas Ekonomi`;
    } else if (kodeFakultas === "FISIP") {
        return `Fakultas Ilmu Sosial dan Politik`;
    } else if (kodeFakultas === "FT") {
        return `Fakultas Teknik`;
    } else if (kodeFakultas === "FTIS") {
        return `Fakultas Teknologi Informasi dan Sains`;
    }
}

let kodeProgramStudi = (kodeProgdi) => {
    if (kodeProgdi === 21) {
        return `Ekonomi`;
    } else if (kodeProgdi === 22) {
        return `Manajemen`;
    } else if (kodeProgdi === 23) {
        return `Akuntansi`;
    } else if (kodeProgdi === 31) {
        return `Administrasi Publik`;
    } else if (kodeProgdi === 32) {
        return `Administrasi Bisnis`;
    } else if (kodeProgdi === 33) {
        return `Hubungan Internasional`;
    } else if (kodeProgdi === 41) {
        return `Teknik Sipil`;
    } else if (kodeProgdi === 42) {
        return `Arsitektur`;
    } else if (kodeProgdi === 51) {
        return `Matematika`;
    } else if (kodeProgdi === 52) {
        return `Fisika`;
    } else if (kodeProgdi === 53) {
        return `Informatika`;
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}


module.exports = studentStatus;
