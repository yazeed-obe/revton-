window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

 {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  });