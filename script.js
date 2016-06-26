
var board = [
    [" "," "," "],
            [" "," "," "],
            [" "," "," "]
          ];


var player1 = "X";
var player2 = "O";
var turn = 1;


var button = document.querySelector("button");
button.addEventListener("click", function(e) {
    boxOne.textContent = "";
    boxTwo.textContent = "";
    boxThree.textContent = "";
    boxFour.textContent = "";
    boxFive.textContent = "";
    boxSix.textContent = "";
    boxSeven.textContent = "";
    boxEight.textContent = "";
    boxNine.textContent = "";
  });


var h2 = document.querySelector("h2");
var boxOne = document.getElementById("boxOne");
  boxOne.addEventListener("click", function(e) {
    if (boxOne.innerHTML === "X" || boxOne.innerHTML === "O") {
    return;
        }

   if (turn % 2 === 0) {
      boxOne.textContent = player2;
      h2.textContent = "Player X turn";
      turn ++;
    }
    else {
      boxOne.textContent = player1;
      h2.textContent = "Player O turn";
      turn ++;
    }
});


  var boxTwo = document.getElementById("boxTwo");
    boxTwo.addEventListener("click", function(e) {
      if (boxTwo.innerHTML === "X" || boxTwo.innerHTML === "O") {
         return;
          }
      if (turn % 2 === 0) {
        boxTwo.textContent = player2;
        h2.textContent = "Player X turn";
        turn ++;
      }
      else if (turn % 2 !== 0) {
        boxTwo.textContent = player1;
        h2.textContent = "Player O turn";
        turn ++;
      }
    });

    var boxThree = document.getElementById("boxThree");
      boxThree.addEventListener("click", function(e) {
        if (boxThree.innerHTML === "X" || boxThree.innerHTML === "O") {
            return;
            }
        if (turn % 2 === 0) {
          boxThree.textContent = player2;
          h2.textContent = "Player X turn"
          turn ++;
        }
        else {
          boxThree.textContent = player1;
          h2.textContent = "Player O turn"
          turn ++;
        }
      });

      var boxFour = document.getElementById("boxFour");
        boxFour.addEventListener("click", function(e) {
          if (boxFour.innerHTML === "X" || boxFour.innerHTML === "O") {
              return;
              }
          if (turn % 2 === 0) {
            boxFour.textContent = player2;
            h2.textContent = "Player X turn"
            turn ++;
          }
          else {
            boxFour.textContent = player1;
            h2.textContent = "Player O turn"
            turn ++;
          }
        });

        var boxFive = document.getElementById("boxFive");
          boxFive.addEventListener("click", function(e) {
            if (boxFive.innerHTML === "X" || boxFive.innerHTML === "O") {
                return;
                }
            if (turn % 2 === 0) {
              boxFive.textContent = player2;
              h2.textContent = "Player X turn"
              turn ++;
            }
            else {
              boxFive.textContent = player1;
              h2.textContent = "Player O turn"
              turn ++;
            }
          });

          var boxSix = document.getElementById("boxSix");
            boxSix.addEventListener("click", function(e) {
              if (boxSix.innerHTML === "X" || boxSix.innerHTML === "O") {
                  return;
                  }
              if (turn % 2 === 0) {
                boxSix.textContent = player2;
                h2.textContent = "Player X turn"
                turn ++;
              }
              else {
                boxSix.textContent = player1;
                h2.textContent = "Player O turn"
                turn ++;
              }
            });

            var boxSeven = document.getElementById("boxSeven");
              boxSeven.addEventListener("click", function(e) {
                if (boxSeven.innerHTML === "X" || boxSeven.innerHTML === "O") {
                    return;
                    }
                if (turn % 2 === 0) {
                  boxSeven.textContent = player2;
                  h2.textContent = "Player X turn"
                  turn ++;
                }
                else {
                  boxSeven.textContent = player1;
                  h2.textContent = "Player O turn"
                  turn ++;
                }
              });

              var boxEight = document.getElementById("boxEight");
                boxEight.addEventListener("click", function(e) {
                  if (boxEight.innerHTML === "X" || boxEight.innerHTML === "O") {
                      return;
                      }
                  if (turn % 2 === 0) {
                    boxEight.textContent = player2;
                    h2.textContent = "Player X turn"
                    turn ++;
                  }
                  else {
                    boxEight.textContent = player1;
                    h2.textContent = "Player O turn"
                    turn ++;
                  }
                });

                var boxNine = document.getElementById("boxNine");
                  boxNine.addEventListener("click", function(e) {
                    if (boxNine.innerHTML === "X" || boxNine.innerHTML === "O") {
                        return;
                        }
                    if (turn % 2 === 0) {
                      boxNine.textContent = player2;
                      h2.textContent = "Player X turn"
                      turn ++;
                    }
                    else {
                      boxNine.textContent = player1;
                      h2.textContent = "Player O turn"
                      turn ++;
                    }
                  });
