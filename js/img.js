// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('imgThumb');
var modalImg = document.getElementById("imgFull");
// var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.alt;
  console.log(modalImg.src)
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var closeIcon = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeIcon.onclick = function() { 
  modal.style.display = "none";
}
// var closeIcon = document.getElementsByClassName("modal")[0];



modal.onclick = function() { 
  modal.style.display = "none";
}