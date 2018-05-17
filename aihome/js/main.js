$(document).ready(function() {
    var mySwiper = new Swiper(".swiper-container", {
        pagination: ".pagination",
        paginationClickable: true,
        mode: "horizontal",
        autoplay: 3000,
        loop: true,
        speed: 1500,
    });
    var code = $(".top-con dt");
    var codeAlert = $(".top-con-alert");
    moveBanner(".design");
    echo.init();
    change(code, codeAlert, "changeColor", "show");
    change(codeAlert, code, "show", "changeColor");
    down();
    inputBox();
    mouseImg();
    console.log($(".design").top);
    linkCompany()
});
function change(elea, eleb, class1, class2) {
    elea.hover(function() {
        $(this).addClass(class1),
        eleb.addClass(class2)
    },
    function() {
        $(this).removeClass(class1),
        eleb.removeClass(class2)
    })
}
function down() {
    var show = $(".show-box");
    var box = $(".box-select");
    var boxLi = box.find("li");
    show.hover(function() {
        $(this).find("strong").addClass("rotate");
        box.find("ul").slideDown("slow");
        boxLi.click(function() {
            box.find("ul").slideUp("fast");
            show.find("span").text($(this).text());
            show.find("strong").removeClass("rotate")
        })
    },
    function() {
        $(this).find("strong").removeClass("rotate");
        box.find("ul").slideUp("slow")
    })
}
function inputBox() {
    var ipt = $("#entering");
    ipt.focus(function() {
        $(this).siblings("label").text("")
    });
    ipt.blur(function() {
        if (this.value.length == 0) {
            $(this).siblings("label").text("请输入您要检索的关键词")
        }
    })
}
function moveBanner(container) {
    var slideShow = $(container).find(".slideShow");
    ul = slideShow.find("ul"),
    showNumber = slideShow.find(".showNav span"),
    oneWidth = slideShow.find("ul li").eq(0).width();
    var timer = null;
    var iNow = 0;
    showNumber.on("click",
    function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        iNow = index;
        ul.animate({
            "left": -oneWidth * iNow,
        })
    });
    function autoPlay() {
        timer = setInterval(function() {
            iNow++;
            if (iNow > showNumber.length - 1) {
                iNow = 0
            }
            showNumber.eq(iNow).trigger("click")
        },
        3000)
    }
    autoPlay();
    slideShow.hover(function() {
        clearInterval(timer)
    },
    autoPlay)
}
function mouseImg() {
    var imgShow = $(".recommendation_icon5");
    imgShow.hover(function() {
        imgShow.find("em").fadeIn("slow")
    },
    function() {
        imgShow.find("em").fadeOut("slow")
    })
}
var tabing = function(tab, con, className) {
    tab.hover(function() {
        var indx = tab.index(this);
        tab.removeClass(className);
        $(this).addClass(className);
        con.hide();
        con.eq(indx).show()
    })
};
var tabs = function(tab, className) {
    tab.hover(function() {
        var indx = tab.index(this);
        tab.removeClass(className);
        $(this).addClass(className)
    })
};
tabing($(".recommendition-right ").find("li"), $(".recommendition-sort"), "active");
tabing($(".list-right-con").find("li"), $(".list-right-con-sort"), "active");
tabs($(".list-left-con-nav").find("a"), "active");

function linkCompany() {
    var aHeight = $(".link-company").find("a").height();
    var up = $("#packUp");
    var more = $("#More");
    function packUp() {
        up.click(function() {
            $(".link-company").addClass("hide");
            $(".link-company").width("1050px");
            more.show()
        })
    }
    packUp();
    function More() {
        more.click(function() {
            $(".link-company").removeClass("hide");
            $(".link-company").width("1130px");
            more.hide()
        })
    }
    More()
};