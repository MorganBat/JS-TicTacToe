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

function isGameWon(boardState) {
    const winningLines = [
        // Rows
        [0,1,2],
        [3,4,5],
        [6,7,8],
        // Columns
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
        ];

    if (boardState[winningLines[0]] === boardState[winningLines[1]] && boardState[winningLines[1]] === boardState[winningLines[2]]){
        console.log(`${currentPlayer} has won!`)
    }
}