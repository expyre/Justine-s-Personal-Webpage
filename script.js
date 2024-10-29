const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const textItems = document.querySelectorAll('.text-item');

let currentIndex = 0;

function rotateText() {
  textItems[currentIndex].classList.remove('show');
  textItems[currentIndex].classList.add('hide');

  currentIndex = (currentIndex + 1) % textItems.length;

  textItems[currentIndex].classList.remove('hide');
  textItems[currentIndex].classList.add('show');

  setTimeout(rotateText, 1500);
}

rotateText();

