let board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let square = document.querySelectorAll("td")

square.addEventListener("click", clickSquare())

function clickSquare() {
    console.log("square clicked")
}