let board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
let currentPlayer = "X"

const squares = document.querySelectorAll("td")

squares.forEach(square => {
    square.addEventListener("click", () => {
        console.log(square)
    })
})
