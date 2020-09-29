// ----- Get the LOGOS MODAL 1 ----- //
var businessDocsModal01 = document.getElementById("businessDocsModal01");
var businessDocsModal02 = document.getElementById("businessDocsModal02");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var businessDocsWorksImg01 = document.getElementById("businessDocsWorksImg01");
var businessDocsWorksImg02 = document.getElementById("businessDocsWorksImg02");
var businessDocsImg01 = document.getElementById("businessDocsImg01");
var businessDocsImg02 = document.getElementById("businessDocsImg02");
// var captionText = document.getElementById("caption");
businessDocsWorksImg01.onclick = function(){
    businessDocsModal01.style.display = "block";
    businessDocsImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
businessDocsWorksImg02.onclick = function(){
    businessDocsModal02.style.display = "block";
    businessDocsImg02.src = this.src;
}
// Get the <span> element that closes the modal
var businessDocsModalClose01 = document.getElementsByClassName("businessDocsModalClose01")[0];
var businessDocsModalClose02 = document.getElementsByClassName("businessDocsModalClose02")[0];
// When the user clicks on <span> (x), close the modal
businessDocsModalClose01.onclick = function() {
    businessDocsModal01.style.display = "none";
  }
businessDocsModalClose02.onclick = function() {
    businessDocsModal02.style.display = "none";
  }