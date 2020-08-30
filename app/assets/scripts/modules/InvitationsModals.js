// ----- Get the LOGOS MODAL 1 ----- //
var invitationsModal01 = document.getElementById("invitationsModal01");
var invitationsModal02 = document.getElementById("invitationsModal02");
var invitationsModal03 = document.getElementById("invitationsModal03");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var invitationsWorksImg01 = document.getElementById("invitationsWorksImg01");
var invitationsWorksImg02 = document.getElementById("invitationsWorksImg02");
var invitationsWorksImg03 = document.getElementById("invitationsWorksImg03");
var invitationsImg01 = document.getElementById("invitationsImg01");
var invitationsImg02 = document.getElementById("invitationsImg02");
var invitationsImg03 = document.getElementById("invitationsImg03");
// var captionText = document.getElementById("caption");
invitationsWorksImg01.onclick = function(){
    invitationsModal01.style.display = "block";
    invitationsImg01.src = this.src;
    // captionText.innerHTML = this.alt;
}
invitationsWorksImg02.onclick = function(){
    invitationsModal02.style.display = "block";
    invitationsImg02.src = this.src;
}
invitationsWorksImg03.onclick = function(){
    invitationsModal03.style.display = "block";
    invitationsImg03.src = this.src;
}
// Get the <span> element that closes the modal
var invitationsModalClose01 = document.getElementsByClassName("invitationsModalClose01")[0];
var invitationsModalClose02 = document.getElementsByClassName("invitationsModalClose02")[0];
var invitationsModalClose03 = document.getElementsByClassName("invitationsModalClose03")[0];
// When the user clicks on <span> (x), close the modal
invitationsModalClose01.onclick = function() {
    invitationsModal01.style.display = "none";
  }
invitationsModalClose02.onclick = function() {
    invitationsModal02.style.display = "none";
  }
invitationsModalClose03.onclick = function() {
    invitationsModal03.style.display = "none";
  }