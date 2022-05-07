function checkPainting(box) {
  if (box.classList.contains("color"))
    return true;
  else
    return false;
}

function paintBackground(box) {
  if (checkPainting(box))
    box.classList.remove("color");
  else 
    box.classList.add("color");
}

function clickBtn() {
  paintBackground(boxArray[order]);
  order = (order + 1) % 3;
}


let order = 0;

const boxArray = document.getElementsByClassName("box");

const btn = document.querySelector("button");
btn.addEventListener("click", clickBtn);
