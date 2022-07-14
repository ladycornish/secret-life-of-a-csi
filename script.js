const menu = document.querySelector(".nav-list");
const menuWrapper = document.querySelector("nav-wrapper");
const hamburger = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  closeBtn.style.transform = "translateY(0)";
  menu.style.transform = "translateX(0)";
  menuWrapper.style.transform = "translateX(0)";
};

const hideMenu = () => {
  closeBtn.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateX(200%)";
  menuWrapper.style.transform = "translateX(-200%)";
};

hamburger.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

const passwd = () => {
  const password = prompt("Enter The password to download the file: ");

  if (password.toLowerCase() == "booksample") {
    window.open("test-sample.pdf");
  } else {
    alert("Incorrent Password!! Please try Again!");
  }
};
