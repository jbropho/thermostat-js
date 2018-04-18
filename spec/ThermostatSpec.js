describe('Thermostat', function() {
  var thermo = new Thermostat();

  describe('new', function(){
    it('initialises with a default of 20 degrees', function(){
      expect(thermo.temp).toEqual(20);
    })
  })

  describe('up', function(){
    it('increases temp by specified amount', function(){
      thermo.up(10);
      expect(thermo.temp).toEqual(30);
    })
  })
})