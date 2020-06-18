let board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
let currentPlayer = "X"

const squares = Array.from(document.querySelectorAll('td'));

console.log(squares)

console.log(squares[2])

squares.forEach(square => {
    square.addEventListener("click", () => {
        square.innerHTML = currentPlayer
        if (currentPlayer === "X") {
            currentPlayer = "O"
        }
        else if (currentPlayer === "O") {
            currentPlayer = "X"
        }
    })
})
