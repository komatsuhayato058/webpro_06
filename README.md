# webpro_06
## このプログラムについて
## 24G1058 小松駿斗
## ファイル一覧
ファイル名　|　説明
-|-
app5.js | プログラミング本体
public/janken.html | じゃんけんの開始画面
public/gatya.html | ガチャガチャの開始画面
public/bmi.html | BMI計算機の開始画面
views/janken.ejs | じゃんけんのテンプレートファイル
views/gatya.ejs | ガチャガチャのテンプレートファイル
views/bmi.ejs | BMI計算機のテンプレートファイル

## 起動方法
1. ソースコードをクローンする．
```
git clone https://github.com/komatsuhayato058/webpro_06.git
```
2. 必要なパッケージを入手する．
```
cd webpro_06
npm install
```
3. サーバーを起動する．
```
node app5.js
```
4. ブラウザでURLにアクセスする．
じゃんけん機能：```localhost:8080/public/janken.html```
ガチャ機能：```localhost:8080/public/gatya.html```
BMI計算機能：```localhost:8080/public/bmi.html```

## Gitでの管理
Githubに修正したファイルをアップロードする．
```
git add .
git commit -am 'コメント'
git push
```

## 機能説明と使用手順
### じゃんけん機能
ユーザーが「グー」「チョキ」「パー」を選び、コンピュータと対戦する．
勝敗（勝ち、負け、あいこ）を判定し、勝利数や試合数を記録する．
#### 手順
1. フォームに「グー」「チョキ」「パー」のいずれかを入力する．
2. コンピュータの選択に基づき、勝敗が表示される．
3. 次の試合を行うにはフォームに再度手を入力して送信する．
### ガチャガチャ機能
ガチャを1回引き、レアリティ（ウルトラレア、スーパーレア、レア、ノーマル）をランダムに決定する．
ウルトラレアを引いた回数と総プレイ回数を記録する．
#### 手順
1. ガチャを1回引くと結果が表示される（例：「スーパーレア」）．
2. 再度ガチャを引くにはフォームを送信する．
### BMI計算機能
ユーザーが体重（kg）と身長（cm）を入力すると、BMI（体格指数）を計算する．
BMI値に応じて、「痩せすぎ」「普通体型」「肥満」などの判定を表示する．
#### 手順
1. フォームに体重（kg）と身長（cm）を入力する．
2. 「計算」ボタンを押すと、BMI値と体型判定が表示される．
