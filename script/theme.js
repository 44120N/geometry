let iconState = "light-F";
localStorage.setItem("light?", true);
let isLight = localstorage.getItem("light?");

function hoverToggle() {
  if (iconState == "light-F") {
    iconState = "light-L";
    document.getElementById("theme-icon").classList.add("ri-sun-line");
    document.getElementById("theme-icon").classList.remove("ri-sun-fill");
  } else if (iconState == "light-L") {
    iconState = "light-F";
    document.getElementById("theme-icon").classList.add("ri-sun-fill");
    document.getElementById("theme-icon").classList.remove("ri-sun-line");
  }
}

function toggleTheme() {
  if (isLight == true) {
    // toggle to dark
    localStorage.setItem("light?", false);
  } else {
    //toggle to light
    localStorage.setItem("light?", true);
  }
}
