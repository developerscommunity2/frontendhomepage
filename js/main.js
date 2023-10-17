const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){

  if(window.scrollY > 0){
    navbar.classList.add("navScroled")
  } else {
    navbar.classList.remove("navScroled")
  }

})