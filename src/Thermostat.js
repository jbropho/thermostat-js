function Thermostat() {
  this.temp = 20;
  this.powerSaving = true;
}

Thermostat.prototype.maxTemp  = function() {
  return this.powerSaving === true ? 25 : 35; 
}

Thermostat.prototype.up = function(amount) {
  this.temp += amount;
  if (this.temp > this.maxTemp()) this.temp = this.maxTemp();
};

Thermostat.prototype.down = function(amount) {
  this.temp -= amount;
  if(this.temp < 10) this.temp = 10;
};

Thermostat.prototype.reset = function(){
  this.temp = 20;
}

Thermostat.prototype.currentUsage = function(){
  if (this.temp < 18) return 'low';
  if (this.temp > 25) return 'high';
  return 'medium';
}

Thermostat.prototype.changeTemp = function(reqTemp) {
  var max = this.maxTemp();
  this.temp = reqTemp;
  if (this.temp > max) this.temp = max;
  if (this.temp < 10) this.temp = 10;
}