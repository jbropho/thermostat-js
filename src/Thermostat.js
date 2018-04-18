function Thermostat() {
  this.temp = 20;
  this.powerSaving = true;
}

Thermostat.prototype.max_temp  = function() {
  return this.powerSaving === true ? 25 : 35; 
}

Thermostat.prototype.up = function(amount) {
  this.temp += amount;
  if (this.temp > this.max_temp()) this.temp = this.max_temp();
};

Thermostat.prototype.down = function(amount) {
  this.temp -= amount;
  if(this.temp < 10) this.temp = 10;
};

Thermostat.prototype.reset = function(){
  this.temp = 20;
}

Thermostat.prototype.currentUsage = function(){
  switch(true) {
    case this.temp < 18:
        return 'low';
    case this.temp > 25:
        return 'high';
    default:
        return 'medium';
   }
}