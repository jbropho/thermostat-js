describe('Thermostat', function() {
  var thermo = new Thermostat();

  beforeEach(function(){
    thermo = new Thermostat();
  })

  describe('new', function(){
    it('initialises with a default of 20 degrees', function(){
      expect(thermo.temp).toEqual(20);
    })
  })
})