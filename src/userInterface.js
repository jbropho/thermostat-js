function Interface(options) {

  function updateTemp() {
    var value = +($( "#slider" ).slider( "value" ));
    options.thermo.changeTemp(value);
    updateDisplay();
  };

  $( options.toggle ).click(function() {
    options.thermo.powerSaving = options.thermo.powerSaving === true ? false : true;
   });

  $( options.resetTemp ).click(function() {
    options.thermo.changeTemp(20);
    updateDisplay();
  });

  $( options.updateCity ).click(function() {
    var city = document.getElementById("sub-city").value;
    $.get( options.getWeather + city, function( data ) {
      $( "#city-name" ).html( data.name );
      $( "#local-display" ).html(Math.round(+data.main.temp - 273.15) + "C")
      $( "#result" ).html( data.weather[0].description )
     });
   });

  function updateDisplay() {
    var display = document.getElementById('temp-display');
    display.innerHTML = options.thermo.temp + 'C';
  };

  $( function() {
    $( options.wrapper ).draggable();
  });
  
  $( function() {
    $( options.slide ).slider({
    range: "min",
    min: 10,
    max: 35,
    vaue: 20,
    slide: updateTemp,
    change: updateTemp
    });
  });

  return {
    toggleEco: toggleEco,
    resetTemp: resetTemp
  };  
};

