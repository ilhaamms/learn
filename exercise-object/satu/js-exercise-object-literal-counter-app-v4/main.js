function counterApp(arr) {
    if (arr === undefined) {
        return `Invalid input`;
    } else if (arr.length === 0) {
        return `Data not found`;
        // } else {

        //     let countData = 0;
        //     let dataArr = [];
        //     let dataObj = {};

        //     for (let element of arr) {
        //         let elementArr = dataArr.some(dataElement => {
        //             return element === dataElement;
        //         })

        //         if (elementArr) {
        //             continue;
        //         } else {
        //             dataArr.push(element);
        //         }
        //     }

        //     for (let element of dataArr) {

        //         countData = 0;

        //         for (value of arr) {
        //             if (element === value) {
        //                 countData++;
        //             }

        //             dataObj[element] = countData;
        //         }
        //     }
    }

    let result = {};

    for (let element of arr) {
        if (result[element] === undefined) {
            result[element] = 1;
        } else {
            result[element]++;
        }
    }

    // for (let i = 0; i < arr.length; i++) {
    //     if (result[arr[i]] === undefined) {
    //         result[arr[i]] = 1;
    //     } else {
    //         result[arr[i]]++;
    //     }
    // }

    return result;
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
// console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
// console.log(counterApp([]));
// console.log(counterApp());

module.exports = counterApp
