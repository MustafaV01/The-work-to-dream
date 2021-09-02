//--Data
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
//--Data

//--Login


var usernamePrompt
var passwordPrompt

function login() {
    usernamePrompt = prompt("Please enter the username ? ex: ingrid");
    passwordPrompt = prompt("Please enter the password ? ex: 1234")
}

function newsFeedShow(red) {
    console.log(red);
}

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true
        }
    } return false;
}

function signIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsFeed.forEach(newsFeedShow))
        alert("success");
        showUsername()
    } else {
        console.log("user or password is incorect")
        alert("User or password is incorect")
    }
}



var loginButton = document.getElementById("login");
loginButton.addEventListener("click", function () {
    login();
    signIn(usernamePrompt, passwordPrompt)
});

/// show username
var buttonShow = document.getElementById("buttonShow");
var usernameShow = document.getElementById("usernameShow")

function showUsername() {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(" Hi " + usernamePrompt));
    usernameShow.appendChild(p);
}
/// show username

//--Login

//--Shopping list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + "  "));
    ul.appendChild(li);

    li.addEventListener("click", function () {
        // creates a boolean that toggles the done class on li:
        // if the list item is clicked this toggles the done class
        var finished = this.classList.toggle("done");
        // creates a remove button for the finished item:
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        // if the list item is clicked (li add event listener ) then 
        // finished is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classList = "deleteButton btn btn-outline-danger vertical";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function () {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    })

    // revert input value back to nothing
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterPress)

//--Shopping list

//generator coolor

var css = document.getElementById("p3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".background1");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);