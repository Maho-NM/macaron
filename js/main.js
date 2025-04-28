$(function () {
    /* --------------
    ハンバーガーメニュー
    -----------------*/
    $(".hamburger").on("click", function () {
        ($("header").toggleClass("open"));
    });
    $("#mask").on("click", function () {
        $("header").toggleClass("open");
    });
    $("#nav a").on("click", function () {
        $("header").toggleClass("open");
    });


    /* ------------
    スムーススクロール
    -------------- */
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, 600, "swing");
        return false;
    })


    /* ----------------------
    スクロール時の画像フェード表示
    ------------------------- */
    $(window).scroll(function () {
        $(".fadein").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });


    /* -----------
    slick
    -------------*/
    $(".slick-area").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        slidesToShow: 4,
        swipe: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });


    /* ----------
    to-top
    ------------*/
    let pagetop = $("#to-top");
    pagetop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            pagetop.fadeIn();

        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 500);

        return false;
    });


});




