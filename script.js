// Change navigation appearance while scrolling

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(46, 27, 19, 0.94)";

    } else {

        navbar.style.background =
            "transparent";

    }

});