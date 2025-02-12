export default class RatingWidget {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.stars = [];
    this.initialize();
  }

  initialize() {
    this.createStars();
    this.addEventListeners();
  }

  createStars() {
    // Create 5 star elements
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.dataset.rating = i;
      star.innerHTML = "&star;";
      star.style.fontSize = "48px";
      this.container.appendChild(star);
      this.stars.push(star);
    }

    // Set container styles
    this.container.style.display = "flex";
    this.container.style.flexDirection = "row";
  }

  addEventListeners() {
    this.container.addEventListener("click", (event) =>
      this.handleClick(event)
    );
  }

  handleClick(event) {
    const clickedStar = event.target.closest("span");
    if (!clickedStar) return;

    const rating = parseInt(clickedStar.dataset.rating);
    this.updateStars(rating);
  }

  updateStars(selectedRating) {
    this.stars.forEach((star, index) => {
      const starValue = index + 1;
      if (starValue <= selectedRating) {
        star.innerHTML = "&starf;";
        star.style.color = "red";
      } else {
        star.innerHTML = "&star;";
        star.style.color = "";
      }
    });
  }
}