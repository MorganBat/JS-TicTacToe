let board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
let currentPlayer = "X"

const squares = Array.from(document.querySelectorAll('td'));

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.innerHTML === '') {
            square.innerHTML = currentPlayer
            board[parseInt(square.id)] = currentPlayer
            if (currentPlayer === "X") {
                currentPlayer = "O"
            }
            else if (currentPlayer === "O") {
                currentPlayer = "X"
            }
            console.log(square.id)
        }
    })
})

