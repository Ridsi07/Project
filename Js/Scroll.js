
// When the user scrolls down 20px from the top of the document, slide down the navbar
if (document.documentElement.clientWidth > 941) {
	
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myTopnav").style.height = "80px";
	document.getElementById("image1").style.height = "60px";
	document.getElementById("menu").style.height = "60px";
	
  } else {
    document.getElementById("myTopnav").style.height = "110px";
	document.getElementById("image1").style.height = "80px";
	document.getElementById("menu").style.height = "80px";
  }
	
} 

}