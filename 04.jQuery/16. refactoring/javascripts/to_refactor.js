$(function() {
  var months = {
    "January": "garnet",
    "February": "amethyst",
    "March": "aquamarine or bloodstone",
    "April": "diamond",
    "May": "emerald",
    "June": "pearl, moonstone, or alexandrite",
    "July": "ruby",
    "August": "peridot",
    "September": "sapphire",
    "October": "opal or tourmaline",
    "November": "topaz or citrine",
    "December": "turquoise, zircon, or tanzanite",
  };


  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("visible");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("visible");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass('clicked');
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
      total = getLuhnTotal(cc_number);
    var is_valid = total % 10 === 0;

    $(this).find(".success").toggle(is_valid);
    $(this).find(".error").toggle(!is_valid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");

    $stone.text("Your birthstone is " + months[month]);
  });

  function getLuhnTotal(cc_number) {
    var odd_total = 0;
    var even_total = 0;

    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }

    return odd_total + even_total;
  }
});
