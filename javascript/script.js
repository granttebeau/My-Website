
// gets the previous page position
var prevPosition = window.pageYOffset;

// updates the position fo teh topRect div
window.onscroll = function() {
var curPosition = window.pageYOffset;
  if (prevPosition > curPosition || prevPosition <= 0) {
    document.getElementById("topRect").style.top = "0";
  } else {
    document.getElementById("topRect").style.top = "-75px";
  }
  prevPosition = curPosition;
}
