$(function() {
  var $ul = $("ul");

  function addItem(name, quantity) {
    $ul.append("<li>" + quantity + " " + name + "</li>");
  }

   $('form').on('submit', function(event) {
     event.preventDefault();
     var $form = $(this);
     var name = $form.find("#name").val();
     var quantity = $form.find("#quantity").val() || 1;
     if (!name) {
      alert("You didn't put anything in the 'Name' box.")
      return
     }

     addItem(name, quantity);
     $form.get(0).reset();
   });


});