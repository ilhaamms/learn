function travelDiscount(id, amount) {

    let dataTravel = id.split("-");
    let idTravel = dataTravel[0];
    let priceStudent = 20000;
    let priceCorporate = 50000;
    let totalPriceTicket = 0;
    let priceTicket = 0;
    let status;

    if (idTravel.slice(0, 3) === "STD") {
        priceTicket = amount * priceStudent;
        status = "STUDENT";

        if (amount > 20) {
            totalPriceTicket = priceTicket - (priceTicket * 0.20);
        } else {
            totalPriceTicket = priceTicket;
        }
    } else if (idTravel.slice(0, 4) === "CORP") {
        priceTicket = amount * priceCorporate;
        status = "CORPORATE";

        if (amount > 30) {
            totalPriceTicket = priceTicket - (priceTicket * 0.25);
        } else {
            totalPriceTicket = priceTicket;
        }
    } else {
        return `Maaf, voucher yang anda miliki tidak valid!`;
    }

    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPriceTicket}.`
}

console.log(travelDiscount("STD9845-846-1121", 21));
// console.log(travelDiscount("CORP8135-4612-912", 30));
// console.log(travelDiscount("STD7601-639-184", 36));
// console.log(travelDiscount("CORP5611-8456-999", 31));
// console.log(travelDiscount("8347-7-9124365", 99));
// console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
