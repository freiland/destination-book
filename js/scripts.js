
function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let portland = new Place ('PNW', "St. Johns Bridge", "Summer", "best place to get doughnuts is VOODOO Doughnuts");

let seattle = new Place ("Downtown", "Pikes Place Market", "Fall", "The Experience Music project is awesome");

let tucson = new Place("Southwest", "Finger Rock", "Spring", "University of Arizona is a great school!");