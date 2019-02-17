function getDisplay() {
    var x = document.getElementById("discover_div");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    var x = document.getElementById("post_div");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    var x = document.getElementById("home_div");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
}

function getPost() {
    var x = document.getElementById("post_div");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    var x = document.getElementById("discover_div");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    var x = document.getElementById("home_div");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
}

function getHome() {
  var x = document.getElementById("home_div");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  var x = document.getElementById("discover_div");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  var x = document.getElementById("post_div");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

document.getElementById("discover").onclick = function() {getDisplay()};
document.getElementById("post").onclick = function() {getPost()};
document.getElementById("home").onclick = function() {getHome()};
