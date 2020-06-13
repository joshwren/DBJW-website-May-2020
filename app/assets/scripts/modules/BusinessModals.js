// ----- Get the LOGOS MODAL 1 ----- //
var businessModal01 = document.getElementById("businessModal01");
var businessModal02 = document.getElementById("businessModal02");
var businessModal03 = document.getElementById("businessModal03");
var businessModal04 = document.getElementById("businessModal04");
var businessModal05 = document.getElementById("businessModal05");
var businessModal06 = document.getElementById("businessModal06");
var businessModal07 = document.getElementById("businessModal07");
var businessModal08 = document.getElementById("businessModal08");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var businessWorksImg01 = document.getElementById("businessWorksImg01");
var businessWorksImg02 = document.getElementById("businessWorksImg02");
var businessWorksImg03 = document.getElementById("businessWorksImg03");
var businessWorksImg04 = document.getElementById("businessWorksImg04");
var businessWorksImg05 = document.getElementById("businessWorksImg05");
var businessWorksImg06 = document.getElementById("businessWorksImg06");
var businessWorksImg07 = document.getElementById("businessWorksImg07");
var businessWorksImg08 = document.getElementById("businessWorksImg08");
var logoModalImg01 = document.getElementById("businessImg01");
var logoModalImg02 = document.getElementById("businessImg02");
var logoModalImg03 = document.getElementById("businessImg03");
var logoModalImg04 = document.getElementById("businessImg04");
var logoModalImg05 = document.getElementById("businessImg05");
var logoModalImg06 = document.getElementById("businessImg06");
var logoModalImg07 = document.getElementById("businessImg07");
var logoModalImg08 = document.getElementById("businessImg08");
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
businessWorksImg05.onclick = function(){
    businessModal05.style.display = "block";
    businessImg05.src = this.src;
}
businessWorksImg06.onclick = function(){
    businessModal06.style.display = "block";
    businessImg06.src = this.src;
}
businessWorksImg07.onclick = function(){
    businessModal07.style.display = "block";
    businessImg07.src = this.src;
}
businessWorksImg08.onclick = function(){
    businessModal08.style.display = "block";
    businessImg08.src = this.src;
}
// Get the <span> element that closes the modal
var businessModalClose01 = document.getElementsByClassName("businessModalClose01")[0];
var businessModalClose02 = document.getElementsByClassName("businessModalClose02")[0];
var businessModalClose03 = document.getElementsByClassName("businessModalClose03")[0];
var businessModalClose04 = document.getElementsByClassName("businessModalClose04")[0];
var businessModalClose05 = document.getElementsByClassName("businessModalClose05")[0];
var businessModalClose06 = document.getElementsByClassName("businessModalClose06")[0];
var businessModalClose07 = document.getElementsByClassName("businessModalClose07")[0];
var businessModalClose08 = document.getElementsByClassName("businessModalClose08")[0];
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
businessModalClose05.onclick = function() {
    businessModal05.style.display = "none";
  }
businessModalClose06.onclick = function() {
    businessModal06.style.display = "none";
  }
businessModalClose07.onclick = function() {
    businessModal07.style.display = "none";
  }
businessModalClose08.onclick = function() {
    businessModal08.style.display = "none";
  }