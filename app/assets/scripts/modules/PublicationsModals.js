// ----- Get the LOGOS MODAL 1 ----- //
var publicationsModal01 = document.getElementById("publicationsModal01");
var publicationsModal02 = document.getElementById("publicationsModal02");
var publicationsModal03 = document.getElementById("publicationsModal03");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var publicationsWorksImg01 = document.getElementById("publicationsWorksImg01");
var publicationsWorksImg02 = document.getElementById("publicationsWorksImg02");
var publicationsWorksImg03 = document.getElementById("publicationsWorksImg03");
var publicationsImg01 = document.getElementById("publicationsImg01");
var publicationsImg02 = document.getElementById("publicationsImg02");
var publicationsImg03 = document.getElementById("publicationsImg03");
// var captionText = document.getElementById("caption");
publicationsWorksImg01.onclick = function(){
    publicationsModal01.style.display = "block";
    publicationsImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
publicationsWorksImg02.onclick = function(){
    publicationsModal02.style.display = "block";
    publicationsImg02.src = this.src;
}
publicationsWorksImg03.onclick = function(){
    publicationsModal03.style.display = "block";
    publicationsImg03.src = this.src;
}
// Get the <span> element that closes the modal
var publicationsModalClose01 = document.getElementsByClassName("publicationsModalClose01")[0];
var publicationsModalClose02 = document.getElementsByClassName("publicationsModalClose02")[0];
var publicationsModalClose03 = document.getElementsByClassName("publicationsModalClose03")[0];
// When the user clicks on <span> (x), close the modal
publicationsModalClose01.onclick = function() {
    publicationsModal01.style.display = "none";
  }
publicationsModalClose02.onclick = function() {
    publicationsModal02.style.display = "none";
  }
publicationsModalClose03.onclick = function() {
    publicationsModal03.style.display = "none";
  }