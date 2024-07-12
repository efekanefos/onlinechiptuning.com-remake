const mobileButton = document.querySelector(".mobileButton");
const navbarLinkList = document.querySelector(".navbarLinkList");
const navbarLinkListItem = document.querySelectorAll(".navbarLinkListItem");
const servicesButton = document.querySelector("#servicesButton");
const servicesList = document.querySelector("#servicesList");
const carListButton = document.querySelector("#carListButton");
const carList = document.querySelector("#carList");

function myFunction(x) {
  if (x.matches) {
    servicesList.style.display = "none";
    carList.style.display = "none";
  } else {
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

mobileButton.addEventListener("click", () => {
  if (navbarLinkList.classList.contains("open")) {
    navbarLinkList.classList.remove("open");
  } else {
    navbarLinkList.classList.add("open");
  }
  navbarLinkListItem.forEach((item) => {
    if (item.classList.contains("open")) {
      item.classList.remove("open");
    } else {
      item.classList.add("open");
    }
  });
});

servicesButton.addEventListener("click", () => {
  if (servicesList.style.display == "none") {
    servicesList.style.display = "block";
  } else {
    servicesList.style.display = "none";
  }
});

carListButton.addEventListener("click", () => {
  if (carList.style.display == "none") {
    carList.style.display = "block";
  } else {
    carList.style.display = "none";
  }
});
