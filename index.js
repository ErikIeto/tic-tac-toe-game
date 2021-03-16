var clicks = 0;
var matchs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// === igual ou do mesmo tipo;

// && As duas condições devem ser verdadeiras para que a condição final seja verdadeira;

// || uma das condições deve ser verdadeira para que a condição final seja verdadeira;

// clicks+ = 1
// clicks = +1

function process(pos) {
  clicks++;
  var type = clicks % 2 === 0 ? "X" : "O";
  document.game.block[pos].value = type;
  check(type);
}
function check(type) {
  matchs.forEach(function (x) {
    var count = 0;
    x.forEach(function (y) {
      if (document.game.block[y] && document.game.block[y].value === type)
        count++;
    });
    if (count == 3) {
      wins(x);
      var person = document.game[type].value || type;
      alert("Congratulations " + person + " You win, Perfect!!!");
      $(function () {
        $("#dialog").dialog();
      });
    }
  });
}

function draw(x) {
  x.forEach(function (i) {
    document.game.block[i].className = "draw";
  });
}

function wins(x) {
  x.forEach(function (i) {
    document.game.block[i].className = "wins";
  });
}
function reboot() {
  for (x = 0; x <= 8; x++) {
    document.game.block[x].value = "";
    document.game.block[x].className = "";
  }
  document.game.X.value = "";
  document.game.O.value = "";
}
