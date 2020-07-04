// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("showFormLabel").style.transform = "scale(.75)";
    document.getElementById("showFormLabel").style.transition = "transform .3s ease-out";
  } else {
    document.getElementById("showFormLabel").style.transform = "scale(1)";
    document.getElementById("showFormLabel").style.transition = "transform .3s ease-out";
  }
}


