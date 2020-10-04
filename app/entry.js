'use strict';
import $ from 'jquery';

console.log('Hello!');

//initにかくとスコープ的に触れなくなるため、privateで記載する。
 const gameObj = {
  MAP_CANVAS_W: 300,
  MAP_CANVAS_H: 150,
};

//初期のマップのアイコン表示
//TODO:将来的には乱数を使って、初期マップを生成
function init() {
  //HTML5 ２Dキャンバス
  const mapCanvas = $('#map')[0];
  var ctxMap = mapCanvas.getContext('2d');
  //fillRect(x,y,width,height);
  for(let i=1;i<6;i++){
    ctxMap.fillRect(gameObj.MAP_CANVAS_W/10*i, gameObj.MAP_CANVAS_H/5*i, 10, 10);
    console.log(`21!!!DEBUG!!!x,y:${gameObj.MAP_CANVAS_W/10*i}, ${gameObj.MAP_CANVAS_H/5*i}`);
  }
  //ctxMap.fillRect(0,0,5,5)
  ctxMap.fillRect(20,20,5,5)
  ctxMap.fillRect(60,15,5,5)
  
  // console.log(`21!!!DEBUG!!!:${mapCanvas}`);
}
init();


function drawRadar(ctxRader) {
  const x = gameObj.RADER_CANVAS_WIDTH / 2;
  const y = gameObj.RADER_CANVAS_HEIGHT /2 ;
  const r = gameObj.RADER_CANVAS_WIDTH * 1.5 /2;//対角線の長さの半分

  ctxRader.save(); //save

  ctxRader.beginPath();
  ctxRader.translate(x,y);
  ctxRader.rotate(getRadian(gameObj.DEG));

  ctxRader.fillStyle = 'rgba(0, 220, 0, 0.5'

  ctxRader.arc(0, 0, r, getRadian(0), getRadian(-30), true);
  ctxRader.lineTo(0,0);

  ctxRader.fill();

  ctxRader.restore(); //元の設定を取得
  gameObj.DEG = (gameObj.DEG + 5) %360;

}

//固定のアイコンを表示
//Start:S、Goal：G
function drawFixiCon(ctxRader) {
  ctxRader.save();
  ctxRader.translate(gameObj.RADER_CANVAS_WIDTH / 2, gameObj.RADER_CANVAS_HEIGHT / 2);

  ctxRader.drawImage(
    gameObj.submarineImage, -(gameObj.submarineImage.width / 2), -(gameObj.submarineImageheight / 2)
  );
  ctxRader.restore();
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