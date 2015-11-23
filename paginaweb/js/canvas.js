window.onload=function(){var canvas = document.getElementById("icontacto");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(60,60,50,0,Math.PI*2,false);
ctx.fill();
ctx.closePath();
}