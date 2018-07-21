//JS_Scope

//C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
//let y = 1

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    //break;

    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)

}

//Conjunction Function (this one works)


const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    console.log(conjoinedWord);
}

conjunction("Master", "Card");


//Mod Squad
{
    const ModSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],

        
        series: {
            start: "1968",
            end: "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`
    console.log(HTMLRepresentation);

    ModSquad.members.forEach(person => {
        //console.log(person);
        HTMLRepresentation += `<div>${ModSquad.members}</div>`;
        //console.log(HTMLRepresentation);
        
    }) 

    
   // document.querySelector(".show-info").innerHTML = HTMLRepresentation;
        
}


//TreeHouse Exercises practicing For Each loops
// const fruits = ['apple', 'pear', 'cherry']
// let capitalizedFruits = [];

// fruits.forEach(fruit => {
//     let capitalizedFruit = fruit.toLocaleUpperCase();
//     capitalizedFruits.push(capitalizedFruit);

// });
// console.log(capitalizedFruits);

// const prices = [6.75, 3.10, 4.00, 8.12];
// let total = 0;
//     // Total: 21.97

// prices.forEach(number => {
//     total += prices;
// })

// console.log(total); 

// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//   let sNames = [];

//     // Result: ['Selma', 'Sam', 'Sharon'];

// names.forEach(name => {
//     if (name.charAt(0) === 'S') {
//          sNames.push(name);
//     }
// });
// console.log(sNames);

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let dayAbbreviations = [];


// days.forEach(day => {
    
//     let dayAbs = day.charAt(0) + day.charAt(1);
//   console.log(dayAbs);
//     dayAbbreviations.push(dayAbs);
//     console.log(dayAbbreviations);
// });

//Simon Says

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalLocalCounter = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[1] > 2) {
        let invalidLocation = true;
        
        if (invalidLocation === true) {
            console.log("This location is invalid")
            invalLocalCounter += 1;
            console.log(invalLocalCounter);
        }

    }

    
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalLocalCounter} invalid locations`)

//Advanced Challenge: Lambda Llama

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix;
    }

    return namer

    
}
    nameMaker = llamaNamer()
    console.log(nameMaker())
