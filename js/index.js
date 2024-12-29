window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    
    if (window.scrollY > header.offsetHeight) {
      nav.classList.remove('navbar-hidden');
      nav.classList.add('navbar-visible');
    } else {
      nav.classList.remove('navbar-visible');
      nav.classList.add('navbar-hidden');
    }
  });



  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");
    const scrollUser = 250;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollUser) {
        navbar.classList.add("fixed-navbar");
      } else {
        navbar.classList.remove("fixed-navbar");
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.remove("d-none");
      } else {
        scrollToTopButton.classList.add("d-none");
      }
    });
  
    scrollToTopButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    
  });
  let mainOffset = $(".mainSection").offset().top;

