$(document).ready(function () {
    // Scroll down sticky navbar script start
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      // Scroll down sticky navbar script end
  
      // Scroll up Button script start
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
      // Scroll up Button script end
  
      // Fade In & Fade Out Elements on Scroll script start
      $(".fadein").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("showme");
        }
        if (bottom_of_window < bottom_of_element) {
          $(this).removeClass("showme");
        }
        // Fade In & Fade Out Elements on Scroll script end
      });
    });
  
    // Scroll up Button script start
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    // Scroll up Button script end
  
    // Typing animation script start
    var typed = new Typed(".typing", {
      strings: [ "Fresher", "Data Scientist","Data Analyst","National player"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing2", {
      strings: [ "Fresher", "Data Scientist","Data Analyst","National player"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // toggle menu/navbar script start
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // toggle menu/navbar script end
  
    // owl carousel script start
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
      
      },
    });
    // owl carousel script end
    
  });
  const prevBtn = document.getElementById('prevBtn');
         const nextBtn = document.getElementById('nextBtn');
         const carouselInner = document.querySelector('.carousel-inner');
         let slideIndex = 0;
 
         nextBtn.addEventListener('click', () => {
             slideIndex++;
             showSlides();
         });
 
         prevBtn.addEventListener('click', () => {
             slideIndex--;
             showSlides();
         });
 
         function showSlides() {
             const maxSlides = Math.ceil(carouselInner.scrollWidth / carouselInner.clientWidth);
 
             if (slideIndex >= maxSlides) {
                 slideIndex = 0;
             } else if (slideIndex < 0) {
                 slideIndex = maxSlides - 1;
             }
 
             const slideWidth = carouselInner.clientWidth;
             carouselInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
         }
 
         function showImage(imageSrc) {
             const imageContainer = document.getElementById('imageContainer');
             const expandedImg = document.getElementById('expandedImg');
             expandedImg.src = imageSrc;
             imageContainer.style.display = 'flex';
         }
 
         function hideImage() {
             const imageContainer = document.getElementById('imageContainer');
             imageContainer.style.display = 'none';
         }
  
  