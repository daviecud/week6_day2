const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Dino\'s Dinosaurs', 15, 'Roxy the Rex');
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino\'s Dinosaurs');
  });

  it('should have a ticket price', function (){
    const actual = park.ticket;
    assert.deepStrictEqual(actual, 15)
  });

  describe('Dinosaurs', function(){
  it('should start with no dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should return number of dinosaurs', function() {
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur('Albert');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
});
