$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});


var short = document.getElementById("short");
var long = document.getElementById("long");

var shortText = document.getElementById("short-text");
var longText = document.getElementById("long-text");

var textContainer = document.getElementById("text-container");

short.addEventListener("click", () => {
  short.classList.remove("unclicked");
  long.classList.add("unclicked");
  shortText.classList.remove("hidden");
  longText.classList.add("hidden");
  textContainer.classList.add("top-margin");
})

long.addEventListener("click", () => {
  long.classList.remove("unclicked");
  short.classList.add("unclicked");
  longText.classList.remove("hidden");
  shortText.classList.add("hidden");
  textContainer.classList.remove("top-margin");
})