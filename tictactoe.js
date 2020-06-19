let board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
let currentPlayer = "X"

const squares = Array.from(document.querySelectorAll('td'));

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.innerHTML === '') {
            square.innerHTML = currentPlayer
            board[parseInt(square.id)] = currentPlayer
            isGameWon(board)
            if (currentPlayer === "X") {
                currentPlayer = "O"
            }
            else if (currentPlayer === "O") {
                currentPlayer = "X"
            }
            let title = document.querySelector("#currentPlayer")
            console.log(currentPlayer)
            title.innerText = JSON.stringify(currentPlayer)
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
        [0,4,8],
        [2,4,6]
        ]

    winningLines.forEach(winningLine => {
        if (boardState[winningLine[0]] === boardState[winningLine[1]] && boardState[winningLine[1]] === boardState[winningLine[2]] && boardState[winningLine[0]] != undefined){
            console.log(`${boardState[winningLine[0]]} has won!`)
            let winnerNotify = document.querySelector('#winnerID')
            winnerNotify.innerText = `${JSON.stringify(currentPlayer)} has won!`
        }
    })

}