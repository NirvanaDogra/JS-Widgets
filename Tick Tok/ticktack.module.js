export default class TickTack {
  constructor(containerSelector) {
    console.log(containerSelector);
    this.container = document.querySelector(containerSelector);
    this.board = null;
    this.initalState = this.getEmptyState();
    this.currentPlayer = "X";
    this.initalize();
  }

  initalize() {
    this.board = this.createTickTackBoard();
    this.container.appendChild(this.board);
    this.addClickListner();
  }

  getEmptyState() {
    return [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
  }

  createTickTackBoard() {
    const board = document.createElement("div");
    board.classList.add("tick-tack--board");
    for (let i = 0; i < 9; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tick-tack--tile");
      tile.setAttribute("data-index", i);
      board.append(tile);
    }

    return board;
  }

  togglePlayer() {
    if (this.currentPlayer == "O") {
      this.currentPlayer = "X";
    } else {
      this.currentPlayer = "O";
    }
  }

  lookForWinner() {
    const state = this.initalState;
    console.log(state);
    for (let i = 0; i < 3; i++) {
      if (
        state[i][0] !== -1 &&
        state[i][0] === state[i][1] &&
        state[i][1] === state[i][2]
      ) {
        alert(`Winner on row ${i + 1}`);
        this.state = this.getEmptyState()
        return;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        state[0][i] !== -1 &&
        state[0][i] === state[1][i] &&
        state[1][i] === state[2][i]
      ) {
        alert(`Winner on column ${i + 1}`);
        this.state = this.getEmptyState()
        return;
      }
    }

    if (
      state[0][0] !== -1 &&
      state[0][0] === state[1][1] &&
      state[1][1] === state[2][2]
    ) {
      alert("Winner on main diagonal");
      this.state = this.getEmptyState()
      return;
    }

    if (
      state[0][2] !== -1 &&
      state[0][2] === state[1][1] &&
      state[1][1] === state[2][0]
    ) {
      alert("Winner on anti-diagonal");
      this.state = this.getEmptyState()
      return;
    }
  }

  addClickListner() {
    this.board.addEventListener("click", (event) => {
      console.log("click ");
      const target = event.target.closest(".tick-tack--tile");
      if (!target) return;
      const index = parseInt(target.dataset.index);
      const col = index % 3;
      const row = Math.floor(index / 3);
      this.initalState[row][col] = this.currentPlayer;
      target.innerText = this.currentPlayer;
      this.lookForWinner();
      this.togglePlayer();
    });
  }
}
