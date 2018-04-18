describe('Thermostat', function() {
  var thermo = new Thermostat();

  beforeEach(function(){
    thermo = new Thermostat();
  });

  describe('new', function(){
    it('initialises with a default of 20 degrees', function(){
      expect(thermo.temp).toEqual(20);
    });
  });

  describe('up', function(){
    it('increases temp by specified amount', function(){
      thermo.up(10);
      expect(thermo.temp).toEqual(30);
    });

    it('doesnt increase above maximum (power saving)', function(){
      var powerSave = {temp: 20, powerSaving: true};
      Object.setPrototypeOf(powerSave, Object.getPrototypeOf(thermo));
      powerSave.up(50);
      expect(powerSave.temp).toEqual(25);
    })
    
    it('doesnt increase above maximum (NOT power saving)', function(){
      var defaultPower = {temp: 20, powerSaving: false};
      Object.setPrototypeOf(defaultPower, Object.getPrototypeOf(thermo));
      defaultPower.up(50);
      expect(defaultPower.temp).toEqual(35);
    })
  });

  describe('down', function(){
    it('decreases temp by specified amount', function(){
      thermo.down(1);
      expect(thermo.temp).toEqual(19);
    });

    it('doesnt decrease below the minimum temp', function(){
      thermo.down(20);
      expect(thermo.temp).toEqual(10);
    });
  });
});