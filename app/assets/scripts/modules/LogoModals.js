// ----- Get the LOGOS MODAL 1 ----- //
var logosModal01 = document.getElementById("logosModal01");
var logosModal02 = document.getElementById("logosModal02");
var logosModal03 = document.getElementById("logosModal03");
var logosModal04 = document.getElementById("logosModal04");
var logosModal05 = document.getElementById("logosModal05");
var logosModal06 = document.getElementById("logosModal06");
var logosModal07 = document.getElementById("logosModal07");
var logosModal08 = document.getElementById("logosModal08");
var logosModal09 = document.getElementById("logosModal09");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var logoWorksImg01 = document.getElementById("logoWorksImg01");
var logoWorksImg02 = document.getElementById("logoWorksImg02");
var logoWorksImg03 = document.getElementById("logoWorksImg03");
var logoWorksImg04 = document.getElementById("logoWorksImg04");
var logoWorksImg05 = document.getElementById("logoWorksImg05");
var logoWorksImg06 = document.getElementById("logoWorksImg06");
var logoWorksImg07 = document.getElementById("logoWorksImg07");
var logoWorksImg08 = document.getElementById("logoWorksImg08");
var logoWorksImg09 = document.getElementById("logoWorksImg09");
var logoModalImg01 = document.getElementById("logosImg01");
var logoModalImg02 = document.getElementById("logosImg02");
var logoModalImg03 = document.getElementById("logosImg03");
var logoModalImg04 = document.getElementById("logosImg04");
var logoModalImg05 = document.getElementById("logosImg05");
var logoModalImg06 = document.getElementById("logosImg06");
var logoModalImg07 = document.getElementById("logosImg07");
var logoModalImg08 = document.getElementById("logosImg08");
var logoModalImg09 = document.getElementById("logosImg09");
// var captionText = document.getElementById("caption");
logoWorksImg01.onclick = function(){
    logosModal01.style.display = "block";
    logosImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
logoWorksImg02.onclick = function(){
    logosModal02.style.display = "block";
    logosImg02.src = this.src;
}
logoWorksImg03.onclick = function(){
    logosModal03.style.display = "block";
    logosImg03.src = this.src;
}
logoWorksImg04.onclick = function(){
    logosModal04.style.display = "block";
    logosImg04.src = this.src;
}
logoWorksImg05.onclick = function(){
    logosModal05.style.display = "block";
    logosImg05.src = this.src;
}
logoWorksImg06.onclick = function(){
    logosModal06.style.display = "block";
    logosImg06.src = this.src;
}
logoWorksImg07.onclick = function(){
    logosModal07.style.display = "block";
    logosImg07.src = this.src;
}
logoWorksImg08.onclick = function(){
    logosModal08.style.display = "block";
    logosImg08.src = this.src;
}
logoWorksImg09.onclick = function(){
  logosModal09.style.display = "block";
  logosImg09.src = this.src;
}
// Get the <span> element that closes the modal
var logosModalClose01 = document.getElementsByClassName("logosModalClose01")[0];
var logosModalClose02 = document.getElementsByClassName("logosModalClose02")[0];
var logosModalClose03 = document.getElementsByClassName("logosModalClose03")[0];
var logosModalClose04 = document.getElementsByClassName("logosModalClose04")[0];
var logosModalClose05 = document.getElementsByClassName("logosModalClose05")[0];
var logosModalClose06 = document.getElementsByClassName("logosModalClose06")[0];
var logosModalClose07 = document.getElementsByClassName("logosModalClose07")[0];
var logosModalClose08 = document.getElementsByClassName("logosModalClose08")[0];
var logosModalClose09 = document.getElementsByClassName("logosModalClose09")[0];
// When the user clicks on <span> (x), close the modal
logosModalClose01.onclick = function() {
    logosModal01.style.display = "none";
  }
logosModalClose02.onclick = function() {
    logosModal02.style.display = "none";
  }
logosModalClose03.onclick = function() {
    logosModal03.style.display = "none";
  }
logosModalClose04.onclick = function() {
    logosModal04.style.display = "none";
  }
logosModalClose05.onclick = function() {
    logosModal05.style.display = "none";
  }
logosModalClose06.onclick = function() {
    logosModal06.style.display = "none";
  }
logosModalClose07.onclick = function() {
    logosModal07.style.display = "none";
  }
logosModalClose08.onclick = function() {
    logosModal08.style.display = "none";
  }
 logosModalClose09.onclick = function() {
    logosModal09.style.display = "none";
  }