function theBeatlesPlay(musicians, instruments) {
  var people = [];
  for (let i = 0; i < 2; i++) { 
    people.push(musicians[i] `play` instruments[i]);
  }
  return people;
}
