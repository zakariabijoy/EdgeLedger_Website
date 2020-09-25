$(document).ready(function () {

    //sticky  menu background
    window.addEventListener('scroll', function () {
        if (window.scrollY > 150) {
            document.querySelector('#navbar').style.opacity = 0.9;
        } else {
            document.querySelector('#navbar').style.opacity = 1;
        }
    });


    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800);
        } // End if
    });
});


