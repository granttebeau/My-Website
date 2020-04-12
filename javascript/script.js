
// gets the previous page position
var prevPosition = window.pageYOffset;

// updates the position fo teh topRect div
window.onscroll = function() {
var curPosition = window.pageYOffset;
  if (prevPosition > curPosition || curPosition <= 0) {
    document.getElementById("topRect").style.top = "0";
  } else {
    document.getElementById("topRect").style.top = "-500px";
  }
  prevPosition = curPosition;
}
