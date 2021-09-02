function seyHello(alert1, console1) {
    alert(alert1);
    console.log(console1);
}

function exe4() {
    var age = prompt("age:")

    if (Number(age) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off")
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!")
    } else {
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }
}

function multiply(a, b) {
    return a * b;
}

//exercis5

// var age = prompt("What is your age?");
// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// function checkDriverAge() {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// var checkDriverAge2 = function () {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// function checkDriverAge12(age) {
//     if (Number(age) < 18) {
//         return "Sorry, you are too yound to drive this car. Powering off";
//     } else if (Number(age) > 18) {
//         return "Powering On. Enjoy the ride!";
//     } else if (Number(age) === 18) {
//         return "Congratulations on your first year of driving. Enjoy the ride!";
//     }
// }
// console.log(checkDriverAge12(92));

var list = ["cat", "bear", "bird"];

//exercise 6
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// 4. Remove "Apples" from the array.
array.shift();
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
//console.log(array);

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
//console.log(array2[1][1][0])

//EXERCISE 7


var database = [
    {
        username: "dragos",
        password: "123"
    },
    {
        username: "ingrid",
        password: "1234"
    },
    {
        username: "darius",
        password: "12345"
    },

];
var newsFeed = [
    {
        username: "Dan",
        timeline: "first timeline"
    },
    {
        username: "Ana",
        timeline: "1timeline"
    },
    {
        username: "Ram",
        timeline: "timeline3"
    }
]
////////////////

var usernamePrompt = prompt("username ?")
var passwordPrompt = prompt("password ?")

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Incorect password ori username")
    }
}

signIn(usernamePrompt, passwordPrompt)

// var todo = [
//     "crean room",
//     "brush teerh",
//     "exercise",
//     "study"
// ];

var todoInportant = [
    "crean room!",
    "brush teerh!",
    "exercise!",
    "exercise4!",
    "exercise!",
    "study!"
];

// for (var i = 0; i < todo.length; i++) {
//     todo[i] = todo[i] + " done";
// }

// function logTotos(ret, i) {
//     console.log(ret, i);
// }

// // todo.forEach(logTotos);
// todoInportant.forEach(logTotos);


// var countOne = 0;
// while (countOne < 10) {
//     console.log(countOne);
//     countOne++;
// }

// var countTwo=10;
// do{
//     console.log(countTwo);
//     countTwo--;
// }while (countTwo>0)