$(function() {
  Handlebars.registerPartial('car_tempate', $('#car_template').html());
  Handlebars.registerPartial('test_template', $('#test_template').html());

  otherContext = {
    thing: "So many ideas and people to talk about ideas"
  };

  const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];
  
  var App = {
    carsTemplate: Handlebars.compile($('#cars_template').html()),
    filtersTemplate: Handlebars.compile($('#filters_template').html());
    allCars: cars,
    $filters: $('#filters'),
    $cars: $('#cars'),
    filteredCars: cars,
    otherContext: otherContext,

    renderCars: function() {
      this.$cars.html(this.carsTemplate({cars: this.filteredCars, thing: this.otherContext["thing"]}));
    },
    renderFilterMenu: function() {
      this.$filters.html(h)
    },
    init: function() {
      this.renderCars();
    }
  }

  App.init(); 
}); 