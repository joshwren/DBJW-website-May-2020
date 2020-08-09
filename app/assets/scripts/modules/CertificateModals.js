// ----- Get the LOGOS MODAL 1 ----- //
var certificatesModal01 = document.getElementById("certificatesModal01");
var certificatesModal02 = document.getElementById("certificatesModal02");
var certificatesModal03 = document.getElementById("certificatesModal03");
var certificatesModal04 = document.getElementById("certificatesModal04");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var myCertificatesImg01 = document.getElementById("myCertificatesImg01");
var myCertificatesImg02 = document.getElementById("myCertificatesImg02");
var myCertificatesImg03 = document.getElementById("myCertificatesImg03");
var myCertificatesImg04 = document.getElementById("myCertificatesImg04");
var certImg01 = document.getElementById("certImg01");
var certImg02 = document.getElementById("certImg02");
var certImg03 = document.getElementById("certImg03");
var certImg04 = document.getElementById("certImg04");
// var captionText = document.getElementById("caption");
myCertificatesImg01.onclick = function(){
    certificatesModal01.style.display = "block";
    certImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
myCertificatesImg02.onclick = function(){
    certificatesModal02.style.display = "block";
    certImg02.src = this.src;
}
myCertificatesImg03.onclick = function(){
    certificatesModal03.style.display = "block";
    certImg03.src = this.src;
}
myCertificatesImg04.onclick = function(){
    certificatesModal04.style.display = "block";
    certImg04.src = this.src;
}
// Get the <span> element that closes the modal
var certificatesModalClose01 = document.getElementsByClassName("certificatesModalClose01")[0];
var certificatesModalClose02 = document.getElementsByClassName("certificatesModalClose02")[0];
var certificatesModalClose03 = document.getElementsByClassName("certificatesModalClose03")[0];
var certificatesModalClose04 = document.getElementsByClassName("certificatesModalClose04")[0];
// When the user clicks on <span> (x), close the modal
certificatesModalClose01.onclick = function() {
    certificatesModal01.style.display = "none";
  }
certificatesModalClose02.onclick = function() {
    certificatesModal02.style.display = "none";
  }
certificatesModalClose03.onclick = function() {
    certificatesModal03.style.display = "none";
  }
certificatesModalClose04.onclick = function() {
    certificatesModal04.style.display = "none";
  }