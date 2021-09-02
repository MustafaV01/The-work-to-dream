// function fruits(which) {
//     var whatfruits;
//     switch (which) {
//         case "apples":
//             whatfruits = "we have 3  apples";
//             break;
//         case "pears":
//             whatfruits = "we have 33 pears";
//             break;
//         case "guru":
//             whatfruits = "we have 12 guru";
//             break;
//         case "bananas":
//             whatfruits = "we have 33 bananas";
//             break;
//         default:
//             whatfruits = "please enter a valid  fruits";
//     }
//     return whatfruits;
// }


//#1 change this function into a ternary and assign it to variable called experiencePoints


function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle() {
    a = 1;
}

var experiencePoints = winBattle(a = 2) ? 10 : 1;

var a = 1;
a = 1 ? "true" : "folse";

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
// console.log("#2 return value when moveCommand(forward );")
// console.log(moveCommand("forward"))
// console.log("#3 return value when moveCommand(back);")
// console.log(moveCommand("back"))
// console.log("#4 return value when moveCommand(right);")
// console.log(moveCommand("right"))
// console.log("#5 return value when moveCommand(left);")
// console.log(moveCommand("left"))
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!



///////////// let+ const

const player = " bovvy";
let experience = 1000;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;

}

// let nu se acceseaza daca nu e in aceias functie
// const  nu se modifica DAR pot sa ii modifica proprietatile

const ob = {
    age: 10,
    name: "name",
    dead: false
}
// nu pot  modifica ob  ex:  ob =5;
// dar
// pot modifica proprietis  ob.dead=true;


////////////Destructuring 

const ob = {
    age: 10,
    name: "name",
    dead: false
}

const name = ob.name;
let age = ob.age;
let dead = ob.dead;

//traducere
let { age, dead } = ob;
const { name } = ob;


////////////////// Object properties   
// pentru a face proprietatile unui obiect mai dinamice
// cum facem mai dinamic?  cu [] in obiect 
const name = 'Dragos';
const obj = {
    [name]: "hihi",
    [4 * 4]: "facem un calcul"
}

///////////// Template string
const name = 'Alex';
let age = 20;
const car = 'Skoda'

const text = "Hei" + name + "wat ar you doing to your" + car + "in" + age + 1;
const textbeter = `Hei ${name} wat are you doing to your ${car} in ${age + 1}`
//folosim `` pentru a trasforma totul in Strig si sintaxa ${} pentru a lua proprietati
// si a o face dinamica

///////////////Defolt argument
//pentru a face argumente defolt vom folosi o functie

function defolte(name = '', age = 30, car = 'dacia') {
    return `Hei ${name} wat are you doing to your ${car} in ${age + 1}`
}



/////////////Symbol 
//se foloseste pentru a face o proprietate in tot codul 
//ex:
let syn2 = Symbol('acest parametru este unic');
let syn3 = Symbol('acest parametru este unic');

sym2 === sym3;
//va da false 


/////////////arrow functions
//doar cand am un singur return

function add(a, b) {
    return a + b
}

//traducere
const add = (a, b) => a + b;






////////////exercitiu
// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

let { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
    a: a,
    b: b,
    c: c
};

let okObj = { a, b, c }

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let message = `Hello  ${firstName} have I met you before? I think we met in ${city}  last summer no???`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
let symbolC = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


////////////advance function 

function first() {
    var greet = 'hi';
    function second() {
        alert(greet);
    }
    return second;
}
var newFunc = first();
newFunc();

//traslate

const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

//!!!!!!!!!!Closures
//functia copil are acces la scope parinte( const greet si const second sunt in acelas scope) ceia ce inseaman ca poate lua valori din acel scope
//dar parintele nu are acces la proprietaitle copilului


//!!!!!!!!!!!Currying

const multiply = (a, b) => a * b;
//aici ia fiecare parametru
const curriedMultiply = (a) => (b) => a * b;
//aici ia pe fiecare in parte. o functie in alta functie , functia b este in functia a.
//iar cand accesam functia a (curriedMultiply(3) ne va returna (b)=> a*b; ce este in functia a)
//pentru ce ne ajuta ?
//pot sa aplic un parametru sa o pun in doua functi
//de exemplu vreua sa fac o functie care la fiecare accesare parametru introdus sa se inmulteasca cu 2
const multiplyBy2 = curriedMultiply(2); //acel 2 este paramentru a
multiplyBy2(5); //acel 5 este parametru b din functia curriedMultiply  


////!!!!!!!!!!!! Compose

const compose = (f, g) => (a) => f(g(a));
const mins = (num) => num - 1;
const sum = (num) => num + 2;
compose(mins, sum)(5); // mins  5-1=4,  sum  4+2=6  rezultat 
//rezultat 6


////!!!! Avoid Side Effects, functional purity.

//1 Avoid Side effects , nu fa asa:
let a = 1;
function b() {
    a = 3;
}
//nu fa functionalitati sa schimbe exteriorul 




//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a 
//program’s execution. It must only depend on its input elements.



////Advance Array 

const array = [1, 3, 40, 50];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2)
})
console.log(double);

//map filter, reduce  

//1. map

const mapArray = array.map(num => num * 2)
console.log(mapArray);

//2. filter

const filterArray = array.filter(num => {
    return num > 5
})

const filterArray = array.filter(num => num > 5)

// 3. reduce 

const reduceArray = array.reduce((acc, num) => {
    return acc + num
}, 0)



//ex 
// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const simbolsNews = [];
const addSymbols = array.forEach(user => {
    let { username } = user;
    username = username + "!";
    simbolsNews.push(username);
})
console.log(simbolsNews);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArrayEx = array.map(user => {
    let { username } = user;
    return username + "?";
})
console.log(mapArrayEx)

//Filter the array to only include users who are on team: red
const filterArrayEx = array.filter(user => {
    return user.team === "red"
})
console.log(filterArrayEx)

//Find out the total score of all users using reduce
const reduceArrayEx = array.reduce((acc, user) => {
    return acc + user.score
}, 0)
console.log(reduceArrayEx)



// (1), what is the value of i? index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {

    return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const separare = (q) => (w) => {
    if (w >= q) {
        console.log("q mai amere ca w")
    } else ("q mai mic caw")
}


/////////Advance Object 

//1. reference type 

let object1 = { value: 10 };
let onject2 = object1;
let object3 = { value: 10 }
///object1/ object2 === object3 
//folse 

// 2. context
// windos= this
// "this" arata unde esti in ce univers esti 


// 3 instantion
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi  i am ${this.name}, I am ${this.type}`)
    }

}

class Wizard extends Player {
    constructor(name, type) {
        console.log(this);
        super(name, type)
    }
    play() {
        console.log(`WEEEEEEEEE I am ${this.type}`)
    }
}

// const wizard1 = new Wizard(`Shelly`, `Healer`)
// const wizard2 = new Wizard(`Shawn`, `Dark Magic`)


//Evaluate these:
//#1
[2] === [2];
///false
//{} === {}
//lase ;

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

//object1=4
//object2=4
//object3=4
//object4=5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method 
//that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    soundDefold() {
        console.log(`Mooo `)
    }
}

class cow extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    sound() {
        console.log(`Mooo ${this.name}`)
    }
}

const cow1 = new cow(`Vinica`, `Beaf`, `Braund`)