//  CONSEGNA:
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    {
        name: "super serious racing bike",
        weight: 10
    }, {
        name: "basically a plastic trycicle :c",
        weight: 3
    }, {
        name: "i should have been a bmx",
        weight: 12
    }, {
        name: "unicycle power flows within me",
        weight: 5
    }, {
        name: "a victorian era bike was faster than me T.T",
        weight: 20
    }
]

console.log(bikes);



let smallest = findSmallest(bikes)

function findSmallest(arr) {
    let upperLimit = Infinity

    for (let i = 0; i < arr.length; i++) {
        const thisBike = arr[i];
        console.log(thisBike.weight);

        if (thisBike.weight < upperLimit) {
            upperLimit = thisBike.weight
            console.log(upperLimit);
            console.log();
        }

        /* if (thisBike.weight === upperLimit) {
            console.log(thisBike);
            return thisBike
        } */

    }

    console.log(upperLimit);

    for (let i = 0; i < arr.length; i++) {
        const disBike = arr[i];
        if (disBike.weight === upperLimit) {
            return disBike
        }
    }
}

console.log("smallest is: ", smallest);





