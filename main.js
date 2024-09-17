

themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", () => {
  if (themeBtn.classList.contains('white')) {
    document.body.classList.add("dark-theme")
    themeBtn.classList.remove("white");
  } else {
    document.body.classList.remove("dark-theme")
    themeBtn.classList.add("white");

  }
})







