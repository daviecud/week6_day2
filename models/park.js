const Park = function (name, ticket, dinosaur) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaur = dinosaur;
}

Park.prototype.checkName = function() {
  return this.park.name;
}

module.exports = Park;
