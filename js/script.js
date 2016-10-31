var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-btn");
var username = popup.querySelector(".form-field");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("pop-window");
  username.focus();
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

ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.93894, 30.3330833],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([59.9387942, 30.3230833], {
          hitContent: 'Gllacy Shop'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-map.png',
          iconImageSize: [218, 142],
          iconImageOffset: [-50, -118]
        });

        myMap.geoObjects.add(myPlacemark);
    }
