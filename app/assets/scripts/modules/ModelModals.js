// ----- Get the LOGOS MODAL 1 ----- //
var modelModal01 = document.getElementById("modelModal01");
var modelModal02 = document.getElementById("modelModal02");
var modelModal03 = document.getElementById("modelModal03");
var modelModal04 = document.getElementById("modelModal04");
var modelModal05 = document.getElementById("modelModal05");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modelWorksImg01 = document.getElementById("modelWorksImg01");
var modelWorksImg02 = document.getElementById("modelWorksImg02");
var modelWorksImg03 = document.getElementById("modelWorksImg03");
var modelWorksImg04 = document.getElementById("modelWorksImg04");
var modelWorksImg05 = document.getElementById("modelWorksImg05");
var modelImg01 = document.getElementById("modelImg01");
var modelImg02 = document.getElementById("modelImg02");
var modelImg03 = document.getElementById("modelImg03");
var modelImg04 = document.getElementById("modelImg04");
var modelImg05 = document.getElementById("modelImg05");
// var captionText = document.getElementById("caption");
modelWorksImg01.onclick = function(){
    modelModal01.style.display = "block";
    modelImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
modelWorksImg02.onclick = function(){
    modelModal02.style.display = "block";
    modelImg02.src = this.src;
}
modelWorksImg03.onclick = function(){
  modelModal03.style.display = "block";
  modelImg03.src = this.src;
}
modelWorksImg04.onclick = function(){
  modelModal04.style.display = "block";
  modelImg04.src = this.src;
}
modelWorksImg05.onclick = function(){
  modelModal05.style.display = "block";
  modelImg05.src = this.src;
}
// Get the <span> element that closes the modal
var modelModalClose01 = document.getElementsByClassName("modelModalClose01")[0];
var modelModalClose02 = document.getElementsByClassName("modelModalClose02")[0];
var modelModalClose03 = document.getElementsByClassName("modelModalClose03")[0];
var modelModalClose04 = document.getElementsByClassName("modelModalClose04")[0];
var modelModalClose05 = document.getElementsByClassName("modelModalClose05")[0];
// When the user clicks on <span> (x), close the modal
modelModalClose01.onclick = function() {
    modelModal01.style.display = "none";
  }
modelModalClose02.onclick = function() {
    modelModal02.style.display = "none";
  }
  modelModalClose03.onclick = function() {
    modelModal03.style.display = "none";
  }
  modelModalClose04.onclick = function() {
    modelModal04.style.display = "none";
  }
  modelModalClose05.onclick = function() {
    modelModal05.style.display = "none";
  }