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

  describe('changeTemp', function() {
    it('accepts a valid temp change', function(){
       thermo.changeTemp(25);
       expect(thermo.temp).toEqual(25);
    });

    it('changes to minimum when below min selected', function(){
      thermo.changeTemp(5);
      expect(thermo.temp).toEqual(10);
    })

    it('doesnt go above the max in eco mode', function(){
      var ecoThermo = {temp: 20, powerSaving: true};
      Object.setPrototypeOf(ecoThermo, Object.getPrototypeOf(thermo));
      ecoThermo.changeTemp(40);
      expect(ecoThermo.temp).toEqual(25);
    })

    it('doesnt go above the max in NON-ECO mode', function(){
      var notEco = {temp: 20, powerSaving: false};
      Object.setPrototypeOf(notEco, Object.getPrototypeOf(thermo));
      notEco.changeTemp(40);
      expect(notEco.temp).toEqual(35);
    })
  });

  describe('reset', function(){
    it('sets temp to 20', function(){
      var maxThermo = {temp: 35, powerSaving: true}
      Object.setPrototypeOf(maxThermo, Object.getPrototypeOf(thermo));
      maxThermo.reset();
      expect(maxThermo.temp).toEqual(20);
    })
  })

  describe('currentUsage', function(){
    it('returns low when temp < 18', function(){
      var low = {temp: 17, powerSaving: true};
      Object.setPrototypeOf(low, Object.getPrototypeOf(thermo));
      expect(low.currentUsage()).toEqual('low');
    })

    it('returns medium when 18 < temp < 25', function(){
      var medium = {temp: 23, powerSaving: true};
      Object.setPrototypeOf(medium, Object.getPrototypeOf(thermo));
      expect(medium.currentUsage()).toEqual('medium');
    })
    
    it('returns high when temp > 25', function(){
      var high = {temp: 30, powerSaving: true};
      Object.setPrototypeOf(high, Object.getPrototypeOf(thermo));
      expect(high.currentUsage()).toEqual('high');
    })
  })
});