export default class LikeButton {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.button;
    this.initialize()
  }

  initialize() {
    this.button = this.createButton(); 
    this.addClickListner();
}


  getButtonTemplate() {
    const template = document.createElement("template");
    const view = `
            <button class="like-button">
                <span>&hearts;</span>
                <span class="like-button--spinner"></span>
                <span>Like</span>
            </button>`;
    template.innerHTML = view.trim();
    return template.content.firstElementChild; 
  }

  createButton() {
    const button = this.getButtonTemplate(); 
    this.container.appendChild(button);
    return button
  }

  addClickListner() {
    this.button.addEventListener('click', (event) => {
        console.log(this.button.children)
        this.button.children[0].style.display = "none";
        this.button.children[1].style.display = "block";
        setTimeout(()=> {
            this.button.classList.toggle("active")
            this.button.children[0].style.display = "block";
            this.button.children[1].style.display = "none";
        }, 5000)
    })
  }
}
