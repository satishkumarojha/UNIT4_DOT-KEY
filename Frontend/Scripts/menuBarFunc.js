function changeVisiblity() {
  var x = document.getElementById("newDrawer");
  let clickMenu = document.getElementById("click-func-menu");

  if (x.style.display === "none") {
    x.style.display = "block";
    clickMenu.className = "fa-solid fa-xmark";
    clickMenu.classList.remove("fa-bars-staggered");
  } else {
    x.style.display = "none";
    clickMenu.className = "fa-solid fa-bars-staggered";
    clickMenu.classList.remove("fa-xmark");
  }
}

function gotoLogIn() {
  window.location.href = "login.html";
}
