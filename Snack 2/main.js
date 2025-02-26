//  CONSEGNA:
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: "Milan",
        score: 0,
        foulsReceived: 0
    }, {
        name: "Bayern Monaco",
        score: 0,
        foulsReceived: 0
    }, {
        name: "Barcelona",
        score: 0,
        foulsReceived: 0
    }, {
        name: "Genoa",
        score: 0,
        foulsReceived: 0
    }, {
        name: "Roma",
        score: 0,
        foulsReceived: 0
    }, {
        name: "Lazio",
        score: 0,
        foulsReceived: 0
    }
]


//add some numbers through the Math.random
for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];
    thisTeam.score = Math.floor(Math.random() * 60) + 1
    thisTeam.foulsReceived = Math.floor(Math.random() * 10) + 1
}
console.log("og team is:", teams);

//create new array
const newTeamsArray = []

//make this array have the same objects as the original

for (let i = 0; i < teams.length; i++) {
    const ThisTeam = teams[i];
    newTeamsArray.push(ThisTeam)
}
console.log("new team array is:", newTeamsArray);

//remove the score key
for (let i = 0; i < newTeamsArray.length; i++) {
    const thisTeam = newTeamsArray[i];
    delete thisTeam.score
}

console.log(newTeamsArray);


