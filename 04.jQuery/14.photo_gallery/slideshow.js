$(function() {
  var $slideshow = $("#slideshow");
  var $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest("li");
    var idx = $li.index();

    $slideshow.find("figure").stop().filter(":visible").fadeOut(300).end().eq(idx).delay(300).fadeIn(300);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  }); 

});