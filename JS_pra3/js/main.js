'use strict' ;

{
  const btn = document.getElementById('btn');
// クリックされたら表示がhit!に変わる動作
  btn.addEventListener('click',() => {
    // // const results = ['大吉','中吉','凶','末吉','小吉'];
    // const results = ['大吉','大吉','大吉','大吉','凶']; //20%の確率で凶
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; //5%
    } else if (n < 0.2) {
      btn.textContent = '中吉'; //15%
    } else {
      btn.textContent = '凶'; //80%
    }
    // btn.textContent = n;
    // switch (n) {
    //   case 0:
    //   btn.textContent = '大吉';
    //   break;
    //   case 1:
    //   btn.textContent = '中吉';
    //   break;
    //   case 2:
    //   btn.textContent = '凶';
    //   break;
    // }
  });
// ボタンが押し込まれる動作
  btn.addEventListener('mousedown',() => {
    btn.classList.add('pressed');
  });
// 押されたボタンが戻る動作
  btn.addEventListener('mouseup',() => {
    btn.classList.remove('pressed');
  });
}
