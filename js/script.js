var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-btn");
var login = popup.querySelector(".form-field");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("pop-window");
  login.focus();
});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("pop-window");
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("pop-window")) {
            popup.classList.remove("pop-window");
          }
        }
});
