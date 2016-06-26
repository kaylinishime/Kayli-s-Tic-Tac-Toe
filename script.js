
var board = [["","",""],
            ["","",""],
            ["","",""]];


var player1 = "X";
var player2 = "O";
var turn = 1;

var boxOne = document.getElementById("boxOne");
  boxOne.addEventListener("click", function(e) {
    if (turn % 2 === 0) {
      boxOne.textContent = player2;
      turn ++;
    }
    else {
      boxOne.textContent = player1;
      turn ++;
    }
  });


  var boxTwo = document.getElementById("boxTwo");
    boxTwo.addEventListener("click", function(e) {
      if (turn % 2 === 0) {
        boxTwo.textContent = player2;
        turn ++;
      }
      else {
        boxTwo.textContent = player1;
        turn ++;
      }
    });

    var boxThree = document.getElementById("boxThree");
      boxThree.addEventListener("click", function(e) {
        if (turn % 2 === 0) {
          boxThree.textContent = player2;
          turn ++;
        }
        else {
          boxThree.textContent = player1;
          turn ++;
        }
      });

      var boxFour = document.getElementById("boxFour");
        boxFour.addEventListener("click", function(e) {
          if (turn % 2 === 0) {
            boxFour.textContent = player2;
            turn ++;
          }
          else {
            boxFour.textContent = player1;
            turn ++;
          }
        });

        var boxFive = document.getElementById("boxFive");
          boxFive.addEventListener("click", function(e) {
            if (turn % 2 === 0) {
              boxFive.textContent = player2;
              turn ++;
            }
            else {
              boxFive.textContent = player1;
              turn ++;
            }
          });

          var boxSix = document.getElementById("boxSix");
            boxSix.addEventListener("click", function(e) {
              if (turn % 2 === 0) {
                boxSix.textContent = player2;
                turn ++;
              }
              else {
                boxSix.textContent = player1;
                turn ++;
              }
            });

            var boxSeven = document.getElementById("boxSeven");
              boxSeven.addEventListener("click", function(e) {
                if (turn % 2 === 0) {
                  boxSeven.textContent = player2;
                  turn ++;
                }
                else {
                  boxSeven.textContent = player1;
                  turn ++;
                }
              });

              var boxEight = document.getElementById("boxEight");
                boxEight.addEventListener("click", function(e) {
                  if (turn % 2 === 0) {
                    boxEight.textContent = player2;
                    turn ++;
                  }
                  else {
                    boxEight.textContent = player1;
                    turn ++;
                  }
                });

                var boxNine = document.getElementById("boxNine");
                  boxNine.addEventListener("click", function(e) {
                    if (turn % 2 === 0) {
                      boxNine.textContent = player2;
                      turn ++;
                    }
                    else {
                      boxNine.textContent = player1;
                      turn ++;
                    }
                  });
