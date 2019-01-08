function theBeatlesPlay(musicians, instruments) {
  var people = [];
  for (let i = 0; i < 4; i++) { 
    people.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return people;
}
function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) { 
  array.push(facts[i] + "!!!")
  i++;
  }
  return array;
  }
  function iLoveTheBeatles() {
    var beatles = []
    var i = 0
    do { beatles.push(`I love the Beatles!`);
    i++;
  }  while (i < 15)
  return beatles;
  }