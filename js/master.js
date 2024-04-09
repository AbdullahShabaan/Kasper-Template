let toggleMenu = document.querySelector(".toggle-menu");
let headerLinks = document.querySelector("header ul");
toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("clicked");
});

window.addEventListener("click", function (e) {
  if (e.target !== toggleMenu && e.target.parentElement !== headerLinks) {
    toggleMenu.classList.remove("clicked");
  }
});

let landing = document.querySelector(".landing");
let backgroundImages = ["landing.jpg", "landing2.jpg", "landing3.jpg"];
let dot = document.querySelectorAll(".dot span");

let backgroundCount = 0;
let background = setInterval(() => {
  if (backgroundCount >= backgroundImages.length) {
    backgroundCount = 0;
  }
  dot.forEach((e) => {
    e.classList.remove("active");
  });
  dot[backgroundCount].classList.add("active");
  landing.style.backgroundImage =
    "url(images/" + backgroundImages[backgroundCount] + ")";
  backgroundCount++;
}, 5000);

let changeBackground = document.querySelector(
  ".fa-angle-right.change-background"
);
changeBackground.addEventListener("click", function () {
  clearInterval(background);
  backgroundCount++;
  if (backgroundCount >= backgroundImages.length) {
    backgroundCount = 0;
  }
  dot.forEach((e) => {
    e.classList.remove("active");
  });
  dot[backgroundCount].classList.add("active");
  landing.style.backgroundImage =
    "url(images/" + backgroundImages[backgroundCount] + ")";
});

let changeBackgroundReverse = document.querySelector(
  ".fa-angle-left.change-background"
);

changeBackgroundReverse.addEventListener("click", function () {
  clearInterval(background);
  backgroundCount--;
  if (backgroundCount < 0) {
    backgroundCount = backgroundImages.length - 1;
  }
  dot.forEach((e) => {
    e.classList.remove("active");
  });
  dot[backgroundCount].classList.add("active");
  landing.style.backgroundImage =
    "url(images/" + backgroundImages[backgroundCount] + ")";
});

let header = document.querySelector("header");

let currentScroll = window.scrollY;
window.addEventListener("scroll", function () {
  if (window.scrollY < currentScroll) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }
  if (this.scrollY > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  currentScroll = window.scrollY;
});

let search = document.querySelector(".fa-search");
let inputSearch = document.querySelector("header .form form input");

search.addEventListener("click", function () {
  inputSearch.classList.toggle("active");
});

// create popup img
let gallery = document.querySelectorAll(".gallery-content .photo img");
gallery.forEach((img) => {
  img.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    document.body.appendChild(popupBox);

    let image = document.createElement("img");
    image.src = img.src;
    image.className = "popup-image";

    let imageText = document.createElement("h2");
    imageText.className = "popup-title";
    let text = document.createTextNode(
      img.nextElementSibling.children[0].innerHTML
    );
    imageText.appendChild(text);

    popupBox.appendChild(imageText);
    popupBox.appendChild(image);

    let buttonX = document.createElement("div");
    let buttonExit = document.createTextNode("X");
    buttonX.appendChild(buttonExit);
    buttonX.className = "button-x";
    popupBox.appendChild(buttonX);

    buttonX.addEventListener("click", function () {
      overlay.remove();
      popupBox.remove();
    });

    window.addEventListener("click", function (e) {
      if (e.target == overlay) {
        overlay.remove();
        popupBox.remove();
      }
    });
  });
});

// filter items

let buttons = document.querySelectorAll(".filter-buttons ul li");
let cards = document.querySelectorAll(".gallery-content .photo");

let filterCards = (e) => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");
  cards.forEach((card) => {
    card.classList.add("hidden");

    if (
      e.target.dataset.name == card.dataset.name ||
      e.target.dataset.name == "all"
    ) {
      card.classList.remove("hidden");
    }
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", filterCards);
});

// stat number
let numbers = document.querySelectorAll(".stats-content .number");
numbers.forEach((num) => {
  let startNumber = 0;
  let endNumber = parseInt(num.getAttribute("data-value"));

  let counter = setInterval(() => {
    startNumber += 1;
    num.textContent = startNumber;
    if (startNumber >= endNumber) {
      clearInterval(counter);
    }
  }, 1);
});

// Our Skill Section
let skills = document.querySelector(".skills");
let skill = document.querySelectorAll(".our-skills .box span");

window.addEventListener("scroll", function () {
  let skillPosition = skills.offsetTop;
  if (this.scrollY >= skillPosition - 300) {
    console.log(skillPosition);
    skill.forEach((e) => {
      let percent = e.getAttribute("data-value");
      e.style.width = percent;
    });
  }
  if (this.scrollY < skillPosition - 300) {
    skill.forEach((e) => {
      e.style.width = "0";
    });
  }
});

let bullets = document.querySelectorAll(".bullets .bull");
let box = document.querySelectorAll(".testimonials .row");
console.log(box);

bullets.forEach((e) => {
  e.addEventListener("click", function (e) {
    bullets.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");

    box.forEach((e) => {
      e.classList.remove("active");
    });
    console.log();
    box[e.target.getAttribute("data-value")].classList.add("active");
  });
});
