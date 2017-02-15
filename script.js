var femCand = function(candidate, partyColor)
{

  var cand = {};
  cand.name = candidate;
  cand.electionResults = null;
  cand.totalVotes = 0;
  cand.partyColor = partyColor;
  cand.totalVotesTally = function(){

    this.totalVotes = 0;

      for (var i = 0; i < this.electionResults.length; i++)
    {
        this.totalVotes = this.totalVotes + this.electionResults[i];
        console.log(this.totalVotes);
    }
    var winner = "???";

      if (cand1.totalVotes > cand2.totalVotes){
        winner = cand1.name;
      }else if (cand1.totalVotes < cand2.totalVotes) {
        winner = cand2.name;
      }else{
        winner = "DRAW.";
      }
    console.log("THE WINNER IS..." + winner.name + "!!!");
  };
   return cand;
}
var cand1 = femCand("Jane Doesitall", [245, 141, 136]);
var cand2 = femCand("Betsy Rocks", [132, 17, 11]);

  var setstateResults = function(state){

    theStates[state].winner = null;

    if (cand1.electionResults[state] > cand2.electionResults[state]){
      theStates[state].winner = cand1;
      setstateResults = (cand1.name + " is the winner of " + state);
    }else if (cand1.electionResults[state] < cand2.electionResults[state]){
      theStates[state].winner = cand2;
      setstateResults = (cand2.name + " is the winner of " + state);
    }
      var stateWinner = theStates[state].winner;

      if (stateWinner !== null) {
          theStates[state].rgbColor = stateWinner.partyColor;
      } else {
          theStates[state].rgbColor = [11,32,57];
      }
    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var cand1Name = body.children[0].children[0];
    var cand2Name = body.children[1].children[0];
    var cand1Results = body.children[0].children[1];
    var cand2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev. innerText = "(" +theStates[state].nameAbbrev + ")";

    cand1Name.innerText = cand1.name;
    cand2Name.innerText = cand2.name;

    cand1Results.innerText = cand1.electionResults[state];
    cand2Results.innerText = cand2.electionResults[state];

    if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
    }else{
      winnersName.innerText = theStates[state].winner.name;
    }
}

console.log("Jane's color is: " + cand1.partyColor);
console.log("Betsy's color is: " + cand2.partyColor);

cand1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
cand2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
state.electionResults = [9, 3, 11, 6, 55, 9, 7, 3, 3, 29, 16, 4, 4, 20, 11, 6, 6, 8, 8, 4, 10, 11, 16, 10, 6, 10, 3, 5, 6, 4, 14, 5, 29, 15, 3, 18, 7, 7, 20, 4, 9, 3, 11, 38, 6, 3, 13, 12, 5, 10, 3];

cand1.electionResults[9] = 1;
cand2.electionResults[9] = 28;

cand1.electionResults[4] = 17;
cand2.electionResults[4] = 38;

cand1.electionResults[43] = 11;
cand2.electionResults[43] = 27;

console.log(cand1.electionResults);
console.log(cand2.electionResults);

cand1.totalVotesTally();
cand2.totalVotesTally();

console.log(cand1.totalVotes);
console.log(cand2.totalVotes);

var countryInfoTable = document.getElementById('countryresults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = cand1.name;
row.children[1].innerText = cand1.totalVotes;
row.children[2].innerText = cand2.name;
row.children[3].innerText = cand2.totalVotes;
row.children[5].innerText = winner;
