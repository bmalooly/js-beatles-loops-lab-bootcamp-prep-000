function theBeatlesPlay(musicians, instruments) {
  var people = [];
  for (let i = 0; i < 4; i++) { 
    people.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return people;
}
function johnLennonFacts() {
  var array = [];
  var i = 0;
  while (i < facts.length) { 
  array.push(facts[i] + "!!!")
  i++;
  }
  return array;
  }