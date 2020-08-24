// Business logic//
function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.bestFeature = function() {
  return this.landmark + "!!!!!";
}

function placeArr() {
  this.places = [];
  this.currentId = 0;
}

placeArr.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

placeArr.prototype.addPlace = function(destination) {
  destination.id = this.assignId();
  this.places.push(destination);
}


placeArr.prototype.removePlace = function(id) {
  for (let i=0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}
placeArr.prototype.findPlace = function(id){
  for(let i =0; i < this.places.length;i++){
    if(this.places[i].id==id){
      return this.places[i];
    }
  };
  return false;
}

$(document).ready(function () {
event.preventDefault();



})
