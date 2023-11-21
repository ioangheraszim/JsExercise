# Frontend Javascript Exercises

This is a collection of javascript exercises to keep my skills up to date from basic to advance.

### 1. Create a simple webpage layout with a header, sidebar, main content area, and a footer. Apply basic styling using CSS.

### 2. Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers.

Answer:

```js
const theArray = [1, 2, 3, 4, 5, 6];

function evenNumbers(myArray) {
  return myArray.filter((numbers) => {
    return numbers % 2 === 0;
  });
}

const result = evenNumbers(theArray);

console.log(result); // result: 2, 4, 6
```

### 3. Using JavaScript, create a button that, when clicked, changes the text of a paragraph on the webpage.

Answer:

```html
<button class="the-btn" id="btn">Change the text</button>
<p id="change">The change is visible here</p>
```

```js
let btn = document.getElementById("btn");
let para = document.getElementById("change");

btn.addEventListener("click", () => {
  para.textContent = "The Text Has Changed";
  para.style.color = "red";
});
```

### 4. Given an HTML structure with a list of items, write a function to filter and display only the items that contain a specific keyword entered in an input field.

Answer:

```html
<div class="answer">
  <input type="text" id="filterInput" placeholder="Enter keyword" />
  <ul id="itemList">
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
    <li>Grapes</li>
    <li>Strawberry</li>
    <li>Mango</li>
  </ul>
</div>
```

```js
const btn = document.getElementById("the-btn");
const para = document.getElementById("paragraph");
const filterInput = document.getElementById("filterInput");

const itemList = Array.from(
  document.getElementById("itemList").getElementsByTagName("li")
);

// filters input value
filterInput.addEventListener("input", () => {
  const keyword = filterInput.value.toLowerCase();

  itemList.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? "list-item" : "none";
  });
});
```

### 5. Create a simple image carousel that loads images asynchronously. The images should transition every 3 seconds, and there should be next and previous buttons to navigate.

```html
<div id="container-carousel" class="carousel-container">
    <div class="carousel-item">
        <img src="https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg">
    </div>
    <div class="carousel-item">
        <img src="https://images2.thanhnien.vn/uploaded/dotuan/2021_04_02/2_YJRT.jpg">
    </div>
    <div class="carousel-item">
        <img src="https://gachax.com/anime/wp-content/uploads/sites/29/2023/06/cute-anime-girl-pfp-profile-pictures-chibi.png">
    </div>
    </div>
    <button class="the-btn" id="prevBtn">Previous</button>
    <button  class="the-btn" id="nextBtn">Next</button>
</div>
```

```CSS
.carousel-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin-top: 1.5rem;
}

.carousel-item {
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

```js
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
  carouselIndex =
    (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
  renderSlides(carouselIndex);
};

const carouselTime = () => {
  setTimeout(() => {
    nextSlide();
    carouselTime();
  }, 1500);
};

renderSlides(carouselIndex);
carouselTime();

// Event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);
```
