var shouldScroll = true;
if (!window.mobileCheck()) {
    $(function() {
        $.scrollify({
            section: ".full-section",
            interstitialSection: "",
            easing: "easeOutExpo",
            scrollSpeed: 700,
            offset: 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            interstitialSection: ".int-section",
            overflowScroll: true,
            updateHash: true,
            touchScroll: false,
            before: function(indx) {
                if (indx % 2 == 0)
                    $("header").removeClass("black")
                else
                    $("header").addClass("black")
                const ss = $($(".scroll-section")[indx]);
                const ss2 = $($(".scroll-section")[indx + 1]);
                ss.find(".typewriter-title").addClass("active");
                ss.find(".our-team-wrapper").addClass("active");
                ss.find(".cf-container").addClass("active");
                ss2.find(".typewriter-title").addClass("active");
                if (ss.hasClass("int-section")) {
                    shouldScroll = false;
                }

            },
            after: function() {},
            afterResize: function() {},
            afterRender: function() {}
        });
    });
}