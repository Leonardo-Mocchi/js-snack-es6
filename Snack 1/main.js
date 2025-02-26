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
        name: "victorian era bike was faster than me T.T",
        weight: 20
    }
]

console.log(bikes);



const smallest = []
findSmallest(bikes)

function findSmallest(arr) {
    let upperLimit = 100

    for (let i = 0; i < arr.length; i++) {
        const thisBike = arr[i];
        console.log(thisBike.weight);

        if (thisBike.weight < upperLimit) {
            upperLimit === thisBike.weight
            console.log(upperLimit);
            console.log();
        }
    }

    console.log(upperLimit);

    for (let i = 0; i < arr.length; i++) {
        const disBike = arr[i];
        if (disBike.weight === upperLimit) {
            smallest.push(disBike)
        }
    }
}

console.log(smallest);





