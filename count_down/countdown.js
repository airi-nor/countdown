
//  要素を取得

const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown (){

  //Dateオブジェクトを用いて、タイムリミットまでの残り時間を取得
  const now = new Date ();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(),now.getDate()+1);
  const diff = tomorrow.getTime() - now.getTime();


  //取得した時間の単位を修正する
  const calcHour = Math.floor(diff / 1000 / 60 /60);
  const calcMin = Math.floor(diff / 1000/ 60) % 60;
  const calcSec = Math.floor(diff / 100) % 60;

  //時間を2桁表示させる

  hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
  min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
  sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}

//カウントダウンタイマーを実行する
countdown();
setInterval(countdown,1000);