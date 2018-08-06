//This links our friends data in
var friends = require("../app/data/friends");

//Exports our requests
module.exports = function (app) {
  // API GET Request. Displays current friend data as JSON.

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // API POST Request. Pushes new data into our friends array.
  app.post("/api/friends", function (req, res) {
    var match = findMatch(req.body);
    friends.push(req.body);
    console.log(friends)
    res.json(match);
   
  });

  function findMatch(person) {
    //friendMatch will start with first index of friends array to be checked and updated below
    var friendMatch = friends[0];
    
    //starts our starting matchDifference value as something impossibly high which will get relaced later
    var matchDifference = 100;
    
    //Loops through our friends array
    for (var i = 0; i < friends.length; i++) {
      //testDifference starts as zero as differences will be added on to this value
      var testDifference = 0;

      //Checks person's scores against friends[i] scores, and replaces match if a better match
      for (var n = 0; n < person.scores.length; n++) {
        testDifference += Math.abs(friends[i].scores[n] - person.scores[n]);
        console.log('testdiff: ' + testDifference);
      }
      
      //If friends[i] is better match than current, change match to friends[i].
      if (testDifference < matchDifference) {
        console.log('old-matchdiff: ' + matchDifference);
        friendMatch = friends[i];
        matchDifference = testDifference;
        console.log('new-matchdiff: ' + matchDifference);
        console.log('match: ' + friendMatch.name);
      }
    }
    return friendMatch;
    
  }
};

