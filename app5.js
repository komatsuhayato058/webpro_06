const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー'; 
  // ここに勝敗の判定を入れる
  let judgement = '';
  if( hand==cpu ){
    judgement = 'あいこ';
  } else if( 
    (hand == 'パー' && cpu == 'グー') ||
    (hand == 'グー' && cpu == 'チョキ') ||
    (hand == 'チョキ' && cpu == 'パー')
  ) {
  judgement = '勝ち';
  win += 1;
  } else {
     judgement = '負け';
  }
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/gatya", (req, res) => {
  let win = Number(req.query.win || 0); // ウルトラレアを当てた数
  let total = Number(req.query.total || 0); // 総プレイ回数

  // ガチャ結果の計算
  const num = Math.floor(Math.random() * 100 + 1);
  let gatya = '';
  if (num == 1) {
    gatya = 'ウルトラレア';
    win += 1;
  } else if (1 < num && num <= 6) {
    gatya = 'スーパーレア';
  } else if (6 < num && num <= 31) {
    gatya = 'レア';
  } else {
    gatya = 'ノーマル';
  }

  total += 1; // 総プレイ回数を増加

  const display = {
    number: num,
    gatya: gatya,
    win: win,
    total: total
  };

  res.render('gatya', display);
});

app.get("/bmi", (req, res) => {
  const weight = parseFloat(req.query.weight);
  const height = parseFloat(req.query.height);
  let bmi = null;
  let result = '';

  if (!weight || !height || weight <= 0 || height <= 0) {
    result = "正しい体重と身長を入力してください。";
  } else {
    bmi = weight / ((height / 100) ** 2); // BMI計算
    if (bmi < 18.5) {
      result = "痩せすぎです。";
    } else if (bmi < 25) {
      result = "普通体型です。";
    } else if (bmi < 30) {
      result = "少し太り気味です。";
    } else {
      result = "肥満です。";
    }
  }

  res.render("bmi", { weight, height, bmi: bmi ? bmi.toFixed(2) : null, result });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
