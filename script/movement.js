let boardCell = document.getElementsByClassName("board-cell");

function createListener() {
    for (let count = 0 ; count < boardCell.length; ++count) {
        if (boardCell[count].innerHTML !== "") {
            boardCell[count].addEventListener("click", replace);
        }
        else {
            boardCell[count].removeEventListener('click', replace);
        };
        boardCell[count].id = count;
    }
}

createListener();

function replace(event) {
    let index = event.target.id;
    let count = parseInt(index);
    let newCount = count + 16;
    if (newCount >= 48) {
        boardCell[count - 16].innerHTML = boardCell[count].innerHTML;
        boardCell[count].innerHTML = "";
    }
    else {
        holder = boardCell[count + 16].innerHTML;
        boardCell[count + 16].innerHTML = boardCell[count].innerHTML;
        boardCell[count].innerHTML = holder;
    }
    createListener();
}