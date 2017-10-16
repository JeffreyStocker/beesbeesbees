var Bee = function() {
  Grub.call (this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';



  //methods
  // this.color = color;
  // this.food = food;
  // this.eat = eat;
  // this.forage

};


Bee.prototype = Object.create (Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.SomeFunction = function () {

}
Bee.prototype.forage = function (treasure) {
  //adds 

}

