'use strict';
import $ from 'jquery';

console.log('Hello!');

//initにかくとスコープ的に触れなくなるため、privateで記載する。
 const gameObj = {
  MAP_CANVAS_W: 300,
  MAP_CANVAS_H: 150,
  isDisplayedFlag: 0
};

//初期のマップのアイコン表示
//TODO:将来的には乱数を使って、初期マップを生成
function init() {
  //HTML5 ２Dキャンバス
  const mapCanvas = $('#map')[0];
  gameObj.ctxMap = mapCanvas.getContext('2d');
}
init();

function ticker() {
  gameObj.ctxMap.clearRect(0, 0, gameObj.MAP_CANVAS_W, gameObj.MAP_CANVAS_H);//まっしろ
  drawMap(gameObj.ctxMap);
}
setInterval(ticker, 500);

function drawMap(ctxMap) {
  //デフォルトの状態を保持
  ctxMap.save();
  //描写
  if(gameObj.isDisplayedFlag){
    ctxMap.font="15px Arial";
    ctxMap.fillStyle="#FFFFFF";
    ctxMap.fillText("S",20,130);
    ctxMap.fillText("E",260,25);
  }
  // ctxMap.fillText(gameObj.isDisplayedFlag,260,130);
  //元に戻す
  ctxMap.restore();
  //点滅用
  
  gameObj.isDisplayedFlag= (gameObj.isDisplayedFlag+1)%2
}



  /** gameObj.ctxRader = raderCanvas.getContext('2d');
    canvas 要素には、自分で描画する能力を持っていません。
    canvas は、JavaScriptを使用してすべてのピクセルを制御できる矩形の領域です。
    HTML5 は、canvas 要素に getContext("2d") オブジェクトの組み込みオブジェクトを持っています。
    getContext("2d") オブジェクトは、線、ボックス、円、などを描画するメソッドを持っています。
   *   //http://memopad.bitter.jp/w3c/html5/html5_ref_canvas.html
        //HTML5 canvas.getContext("2d") リファレンス

        http://www.htmq.com/canvas/
        現在の状態を保存する。
        context . save() …… 現在の描画状態を保存する
        context . restore() …… 描画状態を保存した時点のものに戻す

        mapCanvas.width=100;HTELは変える。cssは変えない。
        →変更対象のObjectの属性はcss側で定義はしない。jqueryで制御する。

   */