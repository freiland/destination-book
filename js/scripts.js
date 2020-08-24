// Business logic//

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


function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.bestFeature = function() {
  return this.landmark + "!!!!!";
}


// User Interface Logic //

let newPlace = new placeArr();

// function displayPlaceDetails(placeArrToDisplay) //

// function showPlace(placeId) // 

// function attachPlaceListeners // 


$(document).ready(function() {
  attachContactListners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("input#location").val();
    const inputtedLandmark = $("input#landmark").val();
    const inputtedTimeOfYear = $("input#time").val();
    const inputtedNotes = $("input#notes").val();
    let newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    placeArr.addPlace(newContact);
    displayPlaceDetails(newPlace);  // <--- this is the new line!
  })
})




