
let btn = document.getElementById("btn")
let para = document.getElementById("change")

btn.addEventListener("click", () => {
    para.textContent = "The Text Has Changed";
    para.style.color = "red";
})