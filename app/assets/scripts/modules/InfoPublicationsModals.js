// ----- Get the LOGOS MODAL 1 ----- //
var infoPublicationsModal01 = document.getElementById("infoPublicationsModal01");
var infoPublicationsModal02 = document.getElementById("infoPublicationsModal02");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var infoPublicationsWorksImg01 = document.getElementById("infoPublicationsWorksImg01");
var infoPublicationsWorksImg02 = document.getElementById("infoPublicationsWorksImg02");
var infoPublicationsImg01 = document.getElementById("infoPublicationsImg01");
var infoPublicationsImg02 = document.getElementById("infoPublicationsImg02");
// var captionText = document.getElementById("caption");
infoPublicationsWorksImg01.onclick = function(){
    infoPublicationsModal01.style.display = "block";
    infoPublicationsImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
infoPublicationsWorksImg02.onclick = function(){
    infoPublicationsModal02.style.display = "block";
    infoPublicationsImg02.src = this.src;
}
// Get the <span> element that closes the modal
var infoPublicationsModalClose01 = document.getElementsByClassName("infoPublicationsModalClose01")[0];
var infoPublicationsModalClose02 = document.getElementsByClassName("infoPublicationsModalClose02")[0];
// When the user clicks on <span> (x), close the modal
infoPublicationsModalClose01.onclick = function() {
    infoPublicationsModal01.style.display = "none";
  }
infoPublicationsModalClose02.onclick = function() {
    infoPublicationsModal02.style.display = "none";
  }