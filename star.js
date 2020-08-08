var star = '';

// 問題１解答記述欄
star = '';
// for文を記述して解答
for (var i = 0; i < 5; i++) {
  star += "★"
}
document.getElementById('display1').innerHTML = star;

// 問題２解答記述欄
star = '';
// for文を記述して解答
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    star += "★";
  }
  star += "<br>";
}
document.getElementById('display2').innerHTML = star;

// 問題３解答記述欄
star = '';
// for文を記述して解答
for (i = 0; i < 5; i++) {
  for (j = 0; j < i + 1; j++) {
    star += "★";
  }
  star += "<br>";
}

document.getElementById('display3').innerHTML = star;

// 問題４解答記述欄
star = '';
// for文を記述して解答
for (i = 0; i < 5; i++) {
  for (j = 0; j < i + 1; j++) {
    if ((j + 1) % (i + 1)) {
      star += "★";
    } else {
      star += "☆";
    }
  }
  star += "<br>";
}

document.getElementById('display4').innerHTML = star;

// 問題５解答記述欄
star = '';
// for文を記述して解答
for (i = 0; i < 5; i++) {
  for (j = 0; j < i + 1; j++) {
    if ((j + 1) % (i + 1)) {
      star += "★";
    } else {
      star += "☆";
      for (k = j; k < 4; k++)
        star += "★";
    }
  }
  star += "<br>";
}



document.getElementById('display5').innerHTML = star;

// 問題６解答記述欄
star = '';
// for文を記述して解答

document.getElementById('display6').innerHTML = star;

// 問題７解答記述欄
star = '';
// for文を記述して解答

document.getElementById('display7').innerHTML = star;
