const cells = document.getElementsByClassName("cell");

const array_color_white = {
  1: "../chessmate/img/white/w",
  2: "../chessmate/img/white/wP.png",
  7: "../chessmate/img/black/bP.png",
  8: "../chessmate/img/black/b",
};

const array_color_black = {
  8: "../chessmate/img/white/w",
  7: "../chessmate/img/white/wP.png",
  2: "../chessmate/img/black/bP.png",
  1: "../chessmate/img/black/b",
};

const change_array = [array_color_white, array_color_black];

const array = [
  "R.png",
  "N.png",
  "B.png",
  "K.png",
  "Q.png",
  "B.png",
  "N.png",
  "R.png",
];

for (let i = 0; i < cells.length; i++) {
  const id_number = Number(cells[i].id.split("cell")[1]);
  const parent_id_number = Number(cells[i].parentElement.id[4]);

  if (
    (id_number % 2 === 1 && parent_id_number % 2 !== 0) ||
    (id_number % 2 === 0 && parent_id_number % 2 === 0)
  ) {
    cells[i].style.background = "white";
  } else {
    cells[i].style.background = "grey";
  }
}

change(array_color_white);

function change(array_сolor) {
  for (let i = 0; i < cells.length; i++) {
    const id_number = Number(cells[i].id.split("cell")[1]);
    const parent_id_number = Number(cells[i].parentElement.id[4]);

    if (
      parent_id_number === 1 ||
      parent_id_number === 8 ||
      parent_id_number === 2 ||
      parent_id_number === 7
    ) {
      const image = document.createElement("img");
      if (parent_id_number === 1 || parent_id_number === 8) {
        image.src = array_сolor[parent_id_number] + array[(id_number - 1) % 8];
      } else {
        image.src = array_сolor[parent_id_number];
      }
      image.className = "image";
      cells[i].removeChild(cells[i].firstChild);
      cells[i].append(image);
    }
  }
}

const change_btn = document.getElementById("change");
const restart_btn = document.getElementById("restart");

odd_even = 0;

change_btn.addEventListener("click", () => {
  odd_even = (odd_even + 1) % 2;
  change(change_array[odd_even]);
});

restart_btn.addEventListener("click", () => {
  change(change_array[odd_even]);
});
