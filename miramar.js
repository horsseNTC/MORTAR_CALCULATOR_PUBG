const canvas = document.getElementById("myCanvas");
let pointA = null;
let pointB = null;
let clicks = 0;

length = 0;
let lengthdisplay = 0;
document.getElementById("display").innerHTML= lengthdisplay + "m";

function displayPoint(x, y) {
  //display point at  (x,y)
  let ctx = canvas.getContext("2d");
  ctx.strokeStyle = "red";
  ctx.fillRect(x, y, 4, 4);
}

function drawLine(pointA, pointB) {
  if (pointA == null || pointB == null) return;
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(pointA[0], pointA[1]);
  ctx.lineTo(pointB[0], pointB[1]);
  ctx.stroke();
}

canvas.addEventListener("click", (e) => {
  clicks++;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  displayPoint(x, y);

  if (clicks % 2 === 1) {
    pointA = [x, y];
  } else {
    pointB = [x, y];
  }
  drawLine(pointA, pointB);

  function lineDistance(pointA, pointB) {
    return Math.hypot(pointB[0] - pointA[0], pointB[1] - pointA[1]);
  }

  length = lineDistance(pointA, pointB);
  lengthdisplay = lengthdisplay + length;

  document.getElementById("display").innerHTML= Math.trunc(lengthdisplay*10) + "m";
});

let button = document.getElementById("button");
button.addEventListener('click', event=>{
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pointA = null;
  pointB = null;
  lengthdisplay = 0;
  document.getElementById("display").innerHTML= lengthdisplay + "m";
})
