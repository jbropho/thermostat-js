function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.up = function(amount) {
  this.temp += amount;
}