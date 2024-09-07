function travelSeat(passengers, seatColumn) {

    let fixSeatPassenger = [];
    let seatPassenger = [];

    if (passengers.length === 0) {
        return `Oops! tickets not sold!`;
    } else if (seatColumn <= 0) {
        return `Invalid number`;
    } else {

        passengers.sort();

        for (let i = 0; i < passengers.length; i++) {

            let data = seatPassenger.length

            // if (i !== 0 && data === seatColumn) {
            //     break;
            // }

            if (seatPassenger.length === seatColumn) {
                fixSeatPassenger.push(seatPassenger);
                seatPassenger = new Array();

                if (seatColumn === 2) {
                    if (fixSeatPassenger.length === seatColumn) {
                        break;
                    }
                } else {
                    if (fixSeatPassenger.length === seatColumn - 1) {
                        break;
                    }
                }
            }


            for (let j = data; j < seatColumn || j < data + seatColumn; j++) {
                if (passengers[j] === undefined) {
                    passengers[j] = 'Seat available';
                }

                seatPassenger.push(passengers[j]);
            }
        }
    }
    let tester = fixSeatPassenger;
    return fixSeatPassenger;

}

// console.log(travelSeat(["Dimitri", "Alvin", "Arrizal", "Indra"], 2));
// console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
// console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
// console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));

module.exports = travelSeat