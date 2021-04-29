const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];

const correct = 'ニンテンドーDS';

console.log();

//定数の文字列をHTMLに反映させる
//textContentはHTMLタグが持っているテキスト情報を取得するプロパティ
document.getElementById('js-question').textContent = question;


// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];


//HTMLのオブジェクトを取ってくる場合、「$」を入れる
const $button =document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];



//ボタンをクリックしたら正誤判定
//文字列を比較して一致するかどうかをみる場合は「===」を使う
$button[0].addEventListener('click', ()=> {
　if(correct === $button[0].textContent){
    window.alert('正解！')
  } else {
    window.alert('不正解！')
  }

});

