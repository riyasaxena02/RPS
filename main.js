//rock =0
//paper = 1
//scissor = 2
function getScore(p1, p2) {
  if (p1 === p2) {
    return 0;
  } else if (p1 === 0) {
    if (p2 === 1) {
      return 0;
    } else {
      return 1;
    }
  } else if (p1 === 1) {
    if (p2 === 2) {
      return 0;
    } else {
      return 1;
    }
  } else if (p1 === 2) {
    if (p2 === 0) {
      return 0;
    } else {
      return 1;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var player1 = new Array(50);
var player2 = new Array(50);
var player3 = new Array(50);
var player4 = new Array(50);

function play(){
for(var i = 0; i < player1.length; i++){
  player1[i] = getRandomInt(3);
  player2[i] = getRandomInt(3);
  player3[i] = getRandomInt(3);
  player4[i] = getRandomInt(3); 
}
// Play game
var score1=0;
var score2=0;
var score3=0;
var score4=0;
var result = new Array(50);
for(var i = 0; i < player1.length; i++){
  var player1Choice = player1[i];
  var player2Choice = player2[i];
  var player3Choice = player3[i];
  var player4Choice = player4[i];
  
  var score12 = getScore(player1Choice, player2Choice);
  var score13 = getScore(player1Choice, player3Choice);
  var score14 = getScore(player1Choice, player4Choice);

  var score21 = getScore(player2Choice, player1Choice);
  var score23 = getScore(player2Choice, player3Choice);
  var score24 = getScore(player2Choice, player4Choice);

  var score31 = getScore(player3Choice, player1Choice);
  var score32 = getScore(player3Choice, player2Choice);
  var score34 = getScore(player3Choice, player4Choice);

  var score41 = getScore(player4Choice, player1Choice);
  var score42 = getScore(player4Choice, player2Choice);
  var score43 = getScore(player4Choice, player3Choice);

  score1 = score1 + score12 + score13 + score14;
  score2 = score2 + score21 + score23 + score24;
  score3 = score3 + score31 + score32 + score34;
  score4 = score4 + score41 + score42 + score43;

  result[i] = score1.toString()+ " " + score2.toString()+ " " + score3.toString()+ " " + score4.toString()+ " " + " ";
}
return result;
}


var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/game/start') { //check the URL of the current request
        
      var result = play();
      var myJSON = JSON.stringify(result);
      res.write(myJSON)
      res.end();
    }
});

server.listen(5500); //6 - listen for any incoming requests

console.log('Node.js web server at port 5500 is running..')