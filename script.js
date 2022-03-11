
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var para = document.querySelector("p");

function changeColor() {
   body.style.background =
  `linear-gradient(to right, ${color1.value},${color2.value})`;
    para.textContent = body.style.background + ";" ;
}


color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);