function toggleEco() {
  thermo.powerSaving = thermo.powerSaving === true ? false : true;
}

function resetTemp() {
  thermo.changeTemp(20);
  updateDisplay();
}

function updateTemp() {
  var value = +($( "#slider" ).slider( "value" ));
  thermo.changeTemp(value);
  updateDisplay();
};

function updateDisplay() {
  var display = document.getElementById('temp-display');
  display.innerHTML = thermo.temp + 'C';
};

$( function() {
   $( "#card1" ).draggable();
 });

$( function() {
    $( "#slider" ).slider({
    range: "min",
    min: 10,
    max: 35,
    vaue: 20,
    slide: updateTemp,
    change: updateTemp
    });
});