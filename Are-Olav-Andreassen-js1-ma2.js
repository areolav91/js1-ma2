//Question 1
const myFunctionExpression = function () {
    console.log("Are");
}
myFunctionExpression()

//Question 2
const clickButton = document.querySelector(".btn")
function callAfterButtonClick() {
    console.log("I was clicked");
};

clickButton.addEventListener("click",callAfterButtonClick);

//Question 3
const pressedKey = document.querySelector(".input");
function afterPressed() {
  console.dir(event);
}

pressedKey.addEventListener("keydown", afterPressed);

//Question 4
const hoverButton = document.querySelector("button");

function hoverCall() {
hoverButton.classList.add("hover");
}
hoverButton.addEventListener("mouseover", hoverCall);

//Question 5
const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", classRemove);

function classRemove() {
  hoverOut.classList.remove("hover");
};
//Question 6
const animals = document.querySelectorAll("li");

for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("mouseover", animalType)

  function animalType() {
    console.dir(animals[i].dataset.animal);
  }
}
//Question 7
const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

function handleEachName(sheep) {
  console.log(sheep);
}

sheep.forEach(handleEachName);
//Question 9
function logTime() {
  console.log("hello");
  if(counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}

let counter = 0;
const intervalId = setInterval(logTime, 500);
//Question 10
const afterTwoSeconds = document.querySelector(".container");

function twoSeconds() {
  afterTwoSeconds.innerHTML = "Does this work?";
}

setTimeout(twoSeconds, 2000);
