import dogs from "./data.js";
import Dog from "./Dog.js";


const dogNames = dogs.map((el) => el.name);

function getNewDog() {
  const nextDogData = extractObject();
  return nextDogData ? new Dog(nextDogData) : {};
}

function extractObject() {
  const nameToFind = dogNames.shift();
  const outputObject = dogs.find((object) => object.name === nameToFind);
  return outputObject;
}

function disableSection(section) {
  section.style.pointerEvents = "none";
}

function enableSection(section) {
  section.style.pointerEvents = "auto";
}

function handleAction(actionType, hasBeenFlag) {
  const lowerSection = document.getElementById("btn-section");
  if (lowerSection && lowerSection.style.pointerEvents !== "none" && dogNames.length >= 0) {
    disableSection(lowerSection);
    doggy[hasBeenFlag] = true;
    render();
    setTimeout(function () {
      doggy = getNewDog();
      render();
      enableSection(lowerSection);
    }, 2500);
  }
}

function like() {
  handleAction("like", "hasBeenLiked");
}

function dislike() {
  handleAction("dislike", "hasBeenSwiped");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("like").addEventListener("click", like);
  document.getElementById("dislike").addEventListener("click", dislike);
});

function render() {
  document.getElementById("main-img-holder").innerHTML = doggy.renderDogHtml();
}

let doggy = getNewDog();
render();
