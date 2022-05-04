// Your code here
//1ST CODE
function moveDodgerLeft(){
    const dodger = document.getElementById('dodger');

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

//2ND CODE
function moveDodgerRight(){
    const dodger = document.getElementById('dodger');

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
