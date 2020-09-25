init();

function init() {
  setInterval(function () {
    for (var i = 0; i < document.getElementsByClassName("dots").length; i++) {
      document.getElementsByClassName("clickable")[i].classList = "clickable";
      if (
        document.getElementsByClassName("dots")[i].classList.contains("active")
      ) {
        document.getElementsByClassName("clickable")[i].classList =
          "clickable active";
      }
    }
  }, 50);
}

function onImageClick(e) {
  for (
    var i = 0;
    i < document.getElementsByClassName("clickable").length;
    i++
  ) {
    document.getElementsByClassName("clickable")[i].classList = "clickable";
  }
  e.currentTarget.classList.add("active");
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
