function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides ajudaae");
  var dots = document.getElementsByClassName("demo ajudaae");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " w3-opacity-off";
}

function currentDiv1(n) {
  showDivs1(slideIndex1 = n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides cajuhaisa");
  var dots = document.getElementsByClassName("demo cajuhaisa");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " w3-opacity-off";
}