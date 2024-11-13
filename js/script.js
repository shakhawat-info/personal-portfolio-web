$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "SEO Expert",
      "Web Developer",
      "Blogger",
      "Grapics Designer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "SEO Expert",
      "Web Developer",
      "Blogger",
      "Grapics Designer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

const projectItems = Array(28).fill({
  image: "images/1.png",
  name: "Tanvir Musa",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  download: "&nbsp Download &nbsp",
});

projectItems.map((ProjectItem) => {
  document.querySelector(".projects").innerHTML += `
          <div class="card">
            <div class="box">
              <img src="${ProjectItem.image}" alt="1" />
              <div class="text">${ProjectItem.name}</div>
              <p>${ProjectItem.description}</p>
              <br />
              <a class="download" href="#">${ProjectItem.download}</a>
            </div>
          </div>
    `;
});



this.window.addEventListener('scroll' , ()=>{
  if (this.scrollY > 1800 && this.scrollY < 2900) {
    document.querySelector(".html").classList.add("htmlprogress");
    document.querySelector(".css").classList.add("cssprogress");
    document.querySelector(".js").classList.add("jsprogress");
    document.querySelector(".php").classList.add("phprogress");
    document.querySelector(".mysql").classList.add("sqlprogress");
  } else {
    document.querySelector(".html").classList.remove("htmlprogress");
    document.querySelector(".css").classList.remove("cssprogress");
    document.querySelector(".js").classList.remove("jsprogress");
    document.querySelector(".php").classList.remove("phprogress");
    document.querySelector(".mysql").classList.remove("sqlprogress");
  }
  
})