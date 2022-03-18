var canvas = document.querySelector("canvas");
var draw = canvas.getContext("2d");

function draw0() {
  draw.beginPath();
  draw.moveTo(0, 400);
  draw.lineTo(100, 320);
  draw.lineTo(200, 400);
  draw.fill();
}

function draw1() {
  draw.fillRect(103, 340, -6, -320);
  draw.fillRect(103, 20, 203, 6);
  draw.fillRect(300, 26, 6, 50);
}

function draw2() {
  draw.lineWidth = 6;
  draw.beginPath();
  draw.arc(303, 123, 50, 0, Math.PI * 2, true);
  draw.stroke();
}

function draw3() {
  draw.fillRect(300, 173, 6, 120);
}

function draw4() {
  draw.lineWidth = 6;
  draw.beginPath();
  draw.moveTo(303, 290);
  draw.lineTo(353, 340);
  draw.stroke();
}

function draw5() {
  draw.lineWidth = 6;
  draw.beginPath();
  draw.moveTo(303, 290);
  draw.lineTo(253, 340);
  draw.stroke();
}

function draw6() {
  draw.lineWidth = 6;
  draw.beginPath();
  draw.moveTo(303, 220);
  draw.lineTo(250, 190);
  draw.stroke();
}

function draw7() {
  draw.lineWidth = 6;
  draw.beginPath();
  draw.moveTo(303, 220);
  draw.lineTo(353, 190);
  draw.stroke();
}

function draw8() {
  draw.lineWidth = 6;
  draw.strokeStyle = "darkred";
  draw.beginPath();
  draw.moveTo(220, 190);
  draw.lineTo(380, 160);
  draw.stroke();
}

var drawings = [draw0, draw1, draw2, draw3, draw4, draw5, draw6, draw7, draw8];
