import dogs from "./data.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  renderDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    let badgeHtml = hasBeenLiked
      ? `<div class="overlayd">
    <img src="./images/badge-like.png" alt="Overlay Image">
  </div>`
      : hasBeenSwiped
      ? `<div class="overlayd">
  <img src="./images/badge-nope.png" alt="Overlay Image">
</div>`
      : "";

    return `
    ${badgeHtml}
            <img src=${avatar}>
            <div class="overlay" id="overlay">
                <h2 class="overlay-header">${name}, ${age}</h2>
                <p class="overlay-paragraph">${bio}</p>
            </div>`;
  }
  
}
export default Dog;
