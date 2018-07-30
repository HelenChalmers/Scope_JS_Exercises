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


let conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    // I moved this console.log inside the function as conjoinedWord can only be access from within the function.  
    console.log(conjoinedWord);

    // I then defined what the function is returning.
    return conjoinedWord;
}

// I stored the function's value when 2 words are passed through the function to a variable that can be accessed outside of the function.  
let newWord = conjunction("Master", "Card");

// accessing the word created by the function outside of the function.  
console.log(newWord);





//Mod Squad
// {
//     const ModSquad = {
//         members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],

        
//         series: {
//             start: "1968",
//             end: "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`
//     console.log(HTMLRepresentation);

//     ModSquad.members.forEach(person => {
//         //console.log(person);
//         HTMLRepresentation += `<div>${ModSquad.members}</div>`;
//         //console.log(HTMLRepresentation);
        
//     }) 

    
//    document.querySelector(".show-info").innerHTML = HTMLRepresentation;
        
// }


// ------Practice from one of the scope videos given --
// QUESTION - this function was given in video #3 but does not actually work - why is that?

const createPrinter = () => {
    const name = "King";
    // return name; 

    const printName = () => {
        console.log(name); 
    }
    
   return printName;
}
const myPrinter = createPrinter();
console.log(myPrinter);







// Mod Squad --------------------------------------

//This variable was replaced outside of the curly-brackets, making it a global scope, so that it could be accessed on the global level.
let HTMLRepresentation = `<h1>The Mod Squad</h1>`
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        }
    }
    console.log(ModSquad);
    

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`;
        
        //I consol logged the new value of HTMLRepresentationt to make sure it held the value we were looking for 
        console.log(HTMLRepresentation);
        
    })
    //I then console logged the same variable to make sure it held the expected value.
    console.log(HTMLRepresentation);
       
}
//printed the variable in the correct section in HTML and ultimately to the page.
document.querySelector(".show-info").innerHTML = HTMLRepresentation;





// -------SIMON SAYS ----------------------------------
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.



const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${k} invalid locations`)


//-----------------------------------------------------
        //    TreeHouse Practice ------



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

