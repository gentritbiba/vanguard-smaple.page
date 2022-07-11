function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).on('scroll', function() {
    $(".typewriter-title").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).addClass("active");
        }
    });
    $(".our-team-wrapper-text").each(function() {
        if (isScrolledIntoView($(this))) {
            $('.our-team-wrapper').addClass("active");
            $(this).addClass("active");
        }
    });
    $(".cf-container").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).addClass("active");
        }
    });
});



// /* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 50,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#F7D1CD"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000501"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": true,
//             "distance": 150,
//             "color": "#F7D1CD",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 1,
//             "direction": "left",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": true,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "grab"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 140,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });
function scroll(element) {
    var ele = document.getElementById(element);
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
}
jQuery(document).ready(function() {
    $(".typewriter-title").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).addClass("active");
        }
    });
    $(".our-team-wrapper-text").each(function() {
        if (isScrolledIntoView($(this))) {
            $('.our-team-wrapper').addClass("active");
            $(this).addClass("active");
        }
    });
    $(".cf-container").each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).addClass("active");
        }
    });

    function toggleContactModal() {
        $("#contact-us-modal").toggleClass("active");
    }
    [".contact-modal-opener", ".closeb", ".close-modal-bg"].forEach(el => {
        $(el).click(() => {
            toggleContactModal();
        })
    });
    $("#contact-us-modal")[0].addEventListener("wheel", (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
    if ($("#contact-us-modal:target").length) {
        toggleContactModal();
    }
    $(".update-button").on("click", (el) => {
        $("#our-partners-title").text(el.target.dataset.imgTitle);
        $("#our-partners-description").text(el.target.dataset.imgDescription);
    })
    $('#trigger-overlay').on('click', function() {
        $(".overlay").addClass('open');
    });
    $('.overlay-close').on('click', function() {
        $(".overlay").removeClass('open');
    });
    $(".nav-mobile a").on("click", function() {
        $(".overlay").removeClass('open');

    })
});