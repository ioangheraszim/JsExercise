const btn = document.getElementById("btn-color");
const body = document.getElementById("body");

btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
