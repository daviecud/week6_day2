const Park = function (name, ticket, dinosaur) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaur = dinosaur;
  this.dinosaurs = [];
}

Park.prototype.name = function() {
  return this.park.name;
}

Park.prototype.ticket = function() {
  return this.park.ticket;
}

Park.prototype.numberOfDinosaurs = function() {
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  const indexOfDinosaurs = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaurs, 2);
}

park.prototype.addBySpecies = function(species) {
  this.dinosaurs.push(species);

}

module.exports = Park;
