const Park = function (name, ticket, dinosaur) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaur = dinosaur;
}

Park.prototype.name = function() {
  return this.park.name;
}

Park.prototype.ticket = function() {
  return this.park.ticket;
}

module.exports = Park;
