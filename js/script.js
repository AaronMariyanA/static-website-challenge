const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

const button = document.getElementById("toggleDarkMode");

  button.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
          button.classList.remove("light");
          button.classList.add("dark");
      } else {
        button.textContent = "🌙";
          button.classList.remove("dark");
          button.classList.add("light");
      }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("subscribeBtn");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.querySelector(".close-btn");

    
    subscribeBtn.addEventListener("click", function () {
        popupOverlay.style.display = "flex";
    });

    
    closeBtn.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});


  