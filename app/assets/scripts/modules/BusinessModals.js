// ----- Get the LOGOS MODAL 1 ----- //
var businessModal01 = document.getElementById("businessModal01");
var businessModal02 = document.getElementById("businessModal02");
var businessModal03 = document.getElementById("businessModal03");
var businessModal04 = document.getElementById("businessModal04");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var businessWorksImg01 = document.getElementById("businessWorksImg01");
var businessWorksImg02 = document.getElementById("businessWorksImg02");
var businessWorksImg03 = document.getElementById("businessWorksImg03");
var businessWorksImg04 = document.getElementById("businessWorksImg04");
var businessImg01 = document.getElementById("businessImg01");
var businessImg02 = document.getElementById("businessImg02");
var businessImg03 = document.getElementById("businessImg03");
var businessImg04 = document.getElementById("businessImg04");
// var captionText = document.getElementById("caption");
businessWorksImg01.onclick = function(){
    businessModal01.style.display = "block";
    businessImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
businessWorksImg02.onclick = function(){
    businessModal02.style.display = "block";
    businessImg02.src = this.src;
}
businessWorksImg03.onclick = function(){
    businessModal03.style.display = "block";
    businessImg03.src = this.src;
}
businessWorksImg04.onclick = function(){
    businessModal04.style.display = "block";
    businessImg04.src = this.src;
}
// Get the <span> element that closes the modal
var businessModalClose01 = document.getElementsByClassName("businessModalClose01")[0];
var businessModalClose02 = document.getElementsByClassName("businessModalClose02")[0];
var businessModalClose03 = document.getElementsByClassName("businessModalClose03")[0];
var businessModalClose04 = document.getElementsByClassName("businessModalClose04")[0];
// When the user clicks on <span> (x), close the modal
businessModalClose01.onclick = function() {
    businessModal01.style.display = "none";
  }
businessModalClose02.onclick = function() {
    businessModal02.style.display = "none";
  }
businessModalClose03.onclick = function() {
    businessModal03.style.display = "none";
  }
businessModalClose04.onclick = function() {
    businessModal04.style.display = "none";
  }