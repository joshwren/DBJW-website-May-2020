// ----- Get the LOGOS MODAL 1 ----- //
var businessFormModal01 = document.getElementById("businessFormModal01");
var businessFormModal02 = document.getElementById("businessFormModal02");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var businessFormWorksImg01 = document.getElementById("businessFormWorksImg01");
var businessFormWorksImg02 = document.getElementById("businessFormWorksImg02");
var businessFormImg01 = document.getElementById("businessFormImg01");
var businessFormImg02 = document.getElementById("businessFormImg02");
// var captionText = document.getElementById("caption");
businessFormWorksImg01.onclick = function(){
    businessFormModal01.style.display = "block";
    businessFormImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
businessFormWorksImg02.onclick = function(){
    businessFormModal02.style.display = "block";
    businessFormImg02.src = this.src;
}
// Get the <span> element that closes the modal
var businessFormModalClose01 = document.getElementsByClassName("businessFormModalClose01")[0];
var businessFormModalClose02 = document.getElementsByClassName("businessFormModalClose02")[0];
// When the user clicks on <span> (x), close the modal
businessFormModalClose01.onclick = function() {
    businessFormModal01.style.display = "none";
  }
businessFormModalClose02.onclick = function() {
    businessFormModal02.style.display = "none";
  }