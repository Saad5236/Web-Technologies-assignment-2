// NAVBAR COLLAPSING AND EXPANDING FUNCTIONING

let navbar = document.querySelector("header nav");
let mobileNavBtn = document.querySelector(".mobile-nav-btn");

if (window.innerWidth <= 860) {
  navbar.classList.add("hide");
}

mobileNavBtn.addEventListener("click", () => {
  navbar.classList.toggle("hide");
});

// ______EDUCATION_______

let educationTabs = document.querySelectorAll(".education-tabs ul li");
let educationTabsContent = document.querySelectorAll(
  ".education-tabs-content ul .tab-content"
);

for (let i = 0; i < educationTabs.length; i++) {
  educationTabs[i].addEventListener("click", () => {
    console.log("hey", i);
    educationTabsContent.forEach((content, k) => {
      console.log("yar:" + i + "," + k);
      if (k !== i) content.classList.remove("display-block");
    });
    educationTabsContent[i].classList.add("display-block");

    educationTabs.forEach((content, j) => {
      if (j !== i) content.classList.remove("education-tab-active");
    });
    educationTabs[i].classList.add("education-tab-active");
  });
}
