'use strict';
//symbol取得
let symbol = document.getElementsByClassName('symbol')[0];
//result取得
let result = document.getElementsByClassName('result')[0];
//left取得
let left = document.getElementsByClassName('left')[0];
let leftValue = parseInt(left.value);

//right取得
let right = document.getElementsByClassName('right')[0];
let rightValue = parseInt(right.value);


//+取得
let sum = document.querySelector('.sum');
//または let sum = document.getElementsByClassName('sum')[0];
//+のクリックアクション
sum.addEventListener('click', function () {
  //色変更
  sum.classList.add("sum_color");
  pull.classList.remove("pull_color");
  equal.classList.remove("equal_color");
  mpn.classList.remove("mpn_color");
  disn.classList.remove("disn_color");
  //文字入力
  symbol.value = "+";
})

//-取得
let pull = document.querySelector('.pull');
//-のクリックアクション
pull.addEventListener('click', function () {
  //色変更
  pull.classList.add("pull_color");
  sum.classList.remove("sum_color");
  equal.classList.remove("equal_color");
  mpn.classList.remove("mpn_color");
  disn.classList.remove("disn_color");
  //文字入力
  symbol.value = "-";
})

//*取得
let mpn = document.querySelector('.mpn');
//*のクリックアクション
mpn.addEventListener('click', function () {
  //色変更
  mpn.classList.add("mpn_color");
  sum.classList.remove("sum_color");
  equal.classList.remove("equal_color");
  pull.classList.remove("pull_color");
  disn.classList.remove("disn_color");
  //文字入力
  symbol.value = "*";
})

// /取得
let disn = document.querySelector('.disn');
// /のクリックアクション
disn.addEventListener('click', function () {
  //色変更
  disn.classList.add("disn_color");
  sum.classList.remove("sum_color");
  equal.classList.remove("equal_color");
  pull.classList.remove("pull_color");
  mpn.classList.remove("mpn_color");
  //文字入力
  symbol.value = "/";
})

//equal取得
let equal = document.getElementsByClassName('equal')[0];
//equal イベント
//色変更
equal.addEventListener('click', function () {
//left、right再定義
  left = document.getElementsByClassName('left')[0];
  leftValue = parseInt(left.value);

  right = document.getElementsByClassName('right')[0];
  rightValue = parseInt(right.value);
  //valueで条件分岐
  if (symbol.value === '+') {
    result.value = (leftValue + rightValue).toPrecision(4);
  }
  else if (symbol.value === '-') {
    result.value = (leftValue - rightValue).toPrecision(4);
  } 
  else if (symbol.value === '*') {
    result.value = (leftValue * rightValue).toPrecision(4);
  }
  else if (symbol.value === '/') {
    result.value = (leftValue / rightValue).toPrecision(4);
  }
  //↑ .toPrecision(4)で少数第４位で固定
  else{
    result.value = '数と記号を確認してください';
  }
})
if (right === false) {
  right.style.backgroundColor = "#e5e5e5";
}