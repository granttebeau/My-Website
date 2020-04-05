var prevPosition = window.pageYOffset;
window.onscroll = function() {
var curPosition = window.pageYOffset;
  if (prevPosition > curPosition) {
    document.getElementById("topRect").style.top = "0";
  } else {
    document.getElementById("topRect").style.top = "-75px";
  }
  prevPosition = curPosition;
}
