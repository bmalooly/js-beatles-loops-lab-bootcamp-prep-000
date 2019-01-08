function theBeatlesPlay(musicians, instruments) {
  var people = [];
  for (let i = 0; i < 3; i++) { 
    people.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return people;
}
