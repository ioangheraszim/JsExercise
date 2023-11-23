// variables

const btn = document.getElementById("the-btn");
const para = document.getElementById("paragraph");
const filterInput = document.getElementById("filterInput");
const itemList = Array.from(
  document.getElementById("itemList").getElementsByTagName("li")
);

// Toggles visibility of the element
btn.addEventListener("click", () => {
  para.classList.toggle("visible");
});

// filters input value
filterInput.addEventListener("input", () => {
  const keyword = filterInput.value.toLowerCase();

  itemList.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? "list-item" : "none";
  });
});

const carouselItems = document.querySelectorAll(".carousel-item");
let carouselIndex = 0;

const renderSlides = (index) => {
  // Loops through all the carousel items and hides them
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Shows the carousel item based on the index
  carouselItems[index].style.display = "block";
};

const nextSlide = () => {
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  renderSlides(carouselIndex);
};

const previousSlide = () => {
  carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
  renderSlides(carouselIndex);
};



const carouselTime = () => {
    setTimeout(() => {
        nextSlide();
        carouselTime();
    }, 1500)
}

renderSlides(carouselIndex);
carouselTime();

// Event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);


const flattenArray = (arr) => {
  return arr.flat(Infinity)
} 

const theArray = [1, [2, 3, [4, 5]], 6]

console.log(flattenArray(theArray))
