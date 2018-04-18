function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.up = function(amount) {
  this.temp += amount;
}

Thermostat.prototype.down = function(amount) {
  this.temp -= amount;
  if(this.temp < 10) this.temp = 10;
}