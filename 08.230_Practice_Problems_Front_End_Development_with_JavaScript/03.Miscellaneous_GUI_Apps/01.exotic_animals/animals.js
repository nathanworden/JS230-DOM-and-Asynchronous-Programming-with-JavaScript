$(function () {
  var App = {
    startTimer: function(e) {
      this.timer = setTimeout(function() {
        this.showToolTip(e);
      }.bind(this), 200);
    },
    showToolTip: function(e) {
      var $figcap = $(e.target).next('figcaption').fadeIn(300);
      $figcap.css({
        "position": "absolute",
      });
    },

    handleMouseLeave: function(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      $(e.target).next('figcaption').fadeOut(300);
    },

    init: function() {
      // console.log($('[title=tooltip]').text());
      // $(document).tooltip();
      $('#exotic_animals').on('mouseenter', "img", this.startTimer.bind(this));
      $('#exotic_animals').on('mouseleave', "img", this.handleMouseLeave.bind(this));
    }
  }

  App.init();
});

