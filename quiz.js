const ce = tag => document.createElement(tag)

function add(num1, num2) {
    return num1 + num2;
}

// const add = (num1, num2) => num1 + num2;

const arrNames = ["myName", "yourName", "someOneLese"];

const giveMeName = (name) => {
    console.log(name);
}

arrNames.forEach(giveMeName)


// giveMeName;
// giveMeName();

function x() { return 4 }

console.log(x())
console.log(x)      //      Function x

function dougForEach(array, hello) {
    for (i = 0; i < array.length; i++) {
        hello(array[i], i)
    }
}

function bye() {
    console.log("bye")
}

function hi() {
    console.log("hi")
}

hi()
bye()
console.log('something else')

/*
    event1
      |
      v
    event2

    two syntaxes for dealing with promises
        old: method chaining, .then().then()....
        new: async await
*/

class Animal {
    constructor(info = {}) {
        this.order = info.order
        this.phylum = info.phylum
        this.species = info.species
    }

    sound() {
        switch (this.species) {
            case "cat":
                console.log('meow')
                break
            case "dog":
                console.log('au')
                break
            default:
                console.log('???')
                break
        }
    }

    showInfo() {

    }
}

let cat = new Animal('cat')
let dog = new Animal('dog')

cat.sound()
dog.sound()

dog.showInfo()

// const getImg = async () => {}
async function getImg() {
    let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    let data = await response.json()
    console.log(data)
}

let weatherData = {}

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    // .then(res => res.json())
    // .then(data => {weatherData = data});
    .then(function (res) { return res.json() })
    .then(data => { weatherData = data });

// getImg()

//bind.bind