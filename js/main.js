document.addEventListener("DOMContentLoaded", function () {
  var elms = document.querySelectorAll(".slider");
  for (var i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i]);
  }


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".menu-fix-wrap").css({ top: "0" });
    } else {
      $(".menu-fix-wrap").css({ top: "-100px" });
    }
  });


  let tonirovka_items = document
    .getElementById("tonirovka")
    .querySelectorAll(".item");
  for (let i = 0; i < tonirovka_items.length; i++) {
    tonirovka_items[i].addEventListener("mouseover", function () {
      tonirovka_items[i].classList.add("active-descr");
    });
    tonirovka_items[i].addEventListener("mouseout", function () {
      tonirovka_items[i].classList.remove("active-descr");
    });
  }

 
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $("#top-button").fadeIn();
      } else {
        $("#top-button").fadeOut();
      }
    });
    $("#top-button").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 700);
    });
  });


  $(function () {
    $(".header-burger-menu").bind("click", function () {
      $(".header-burger-menu_icon").toggleClass(
        "header-burger-menu_icon_active"
      );
      $(".menu-popup").toggleClass("menu-popup-active");
      $(function () {
        if ($(".menu-popup").hasClass("menu-popup-active")) {
          $("body").css("overflow", "hidden");
        } else {
          $("body").css("overflow", "visible");
        }
      });
      if ($(".menu-popup").hasClass("menu-popup-active")) {
        $(".menu-popup").scrollTop(0);
      }
    });
    $(window).resize(function () {
      let width = $(window).width();
      if ((width > 768) & $(".menu-popup").hasClass("menu-popup-active")) {
        $(".menu-popup").removeClass("menu-popup-active");
        $("body").css("overflow", "visible");
        $(".header-burger-menu_icon").removeClass(
          "header-burger-menu_icon_active"
        );
      }
    });
  });


  $(".ordering").bind("click", function (event) {
    event.preventDefault();
    $(".order-form").addClass('order-form__active');
    $('.main-shadow').css('opacity', '0.3');
    $(function () {
      if ($(".order-form").hasClass("order-form__active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    });
  });

  $(document).bind("click", function (e) {
    $('.order-form').removeClass('order-form__active');
    $('.form .form__input').val('');
    $('.main-shadow').css('opacity', '1');
    $("body").css("overflow", "visible");
  });
  $('.close').bind("click", function (e) {
    $('.order-form').removeClass('order-form__active');
    $('.form .form__input').val('');
    $('.main-shadow').css('opacity', '1');
    $("body").css("overflow", "visible");
  });
  $('.ordering').bind("click", function (e) {
    e.stopPropagation();
  });
  $('.order-form').bind("click", function (e) {
    e.stopPropagation();
  });
});
