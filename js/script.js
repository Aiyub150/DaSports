/*========== sticky navbar ==========*/

document.getElementById("showPopupBtn").addEventListener("click", function() {
  document.getElementById("loginPopup").style.display = "block";
  document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
  document.documentElement.style.overflow = "hidden"; // Juga menonaktifkan scroll pada <html> (untuk beberapa browser)
});

document.getElementById("closePopupBtn").addEventListener("click", function() {
  document.getElementById("loginPopup").style.display = "none";
  document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll pada body
  document.documentElement.style.overflow = "auto"; // Juga mengaktifkan kembali scroll pada <html>
});

document.getElementById("jadwalsepakbola").addEventListener("click", function() {
  document.getElementById("jadwalsepakbolapopup").style.display = "block";
  document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
  document.documentElement.style.overflow = "hidden"; // Juga menonaktifkan scroll pada <html> (untuk beberapa browser)
});

document.getElementById("closepopupjadwalsepakbola").addEventListener("click", function() {
  document.getElementById("jadwalsepakbolapopup").style.display = "none";
  document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll pada body
  document.documentElement.style.overflow = "auto"; // Juga mengaktifkan kembali scroll pada <html>
});

document.getElementById("jadwalbadminton").addEventListener("click", function() {
  document.getElementById("jadwalbadmintonpopup").style.display = "block";
  document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
  document.documentElement.style.overflow = "hidden"; // Juga menonaktifkan scroll pada <html> (untuk beberapa browser)
});

document.getElementById("closepopupjadwalbadminton").addEventListener("click", function() {
  document.getElementById("jadwalbadmintonpopup").style.display = "none";
  document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll pada body
  document.documentElement.style.overflow = "auto"; // Juga mengaktifkan kembali scroll pada <html>
});


  document.getElementById("jadwalvolly").addEventListener("click", function() {
    document.getElementById("jadwalvollypopup").style.display = "block";
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
    document.documentElement.style.overflow = "hidden"; // Juga menonaktifkan scroll pada <html> (untuk beberapa browser)
  });
  
  document.getElementById("closepopupjadwalvolly").addEventListener("click", function() {
    document.getElementById("jadwalvollypopup").style.display = "none";
    document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll pada body
    document.documentElement.style.overflow = "auto"; // Juga mengaktifkan kembali scroll pada <html>
  });


  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  const slider = document.querySelector('.home .slider');
  const images = slider.querySelectorAll('img');
  const imageWidth = images[0].clientWidth;
  let currentIndex = 0;
  
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }
  
  function updateSliderPosition() {
    slider.scrollLeft = currentIndex * imageWidth; // Menggunakan scrollLeft untuk pergerakan
  }
  
  setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
  

  const swipper = document.querySelector(".swipper");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let swipperIndex = 0;
  let currentVideo = null;
  
  prevButton.addEventListener("click", () => {
    if (swipperIndex > 0) {
      swipperIndex--;
      updateSwipperPosition();
    }
  });
  
  nextButton.addEventListener("click", () => {
    if (swipperIndex < swipper.children.length - 1) {
      swipperIndex++;
      updateSwipperPosition();
    } else {
      swipperIndex = 0; // Kembali ke video 1 setelah video 3
      updateSwipperPosition();
    }
  });
  
  function updateSwipperPosition() {
    if (currentVideo) {
      currentVideo.pause();
    }
  
    const currentSlide = swipper.children[swipperIndex];
    currentVideo = currentSlide.querySelector("video");
  
    if (currentVideo) {
      currentVideo.play();
    }
  
    swipper.style.transform = `translateX(-${swipperIndex * 100}%)`;
  }
  
  updateSwipperPosition();
  


  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight; // Menggunakan offsetHeight bukan offsetheight
          let id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
              });
              document.querySelector(`header nav a[href*='${id}']`).classList.add('active'); // Perbaikan tanda petik
          }
      });
  
      let header = document.querySelector('.header');
  
      header.classList.toggle('sticky', window.scrollY > 100);
  };
  


