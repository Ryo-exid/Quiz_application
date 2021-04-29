const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];

const correct = 'ニンテンドーDS';

const $button =document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = ()=> {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！')
  } else {
    window.alert('不正解！')
  }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });

  handlerIndex++;
}






// クイズの問題文、選択肢を定義　　※手順（1）


//定数の文字列をHTMLに反映させる
//textContentはHTMLタグが持っているテキスト情報を取得するプロパティ

// document.getElementById('js-question').textContent = question;


// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];


//HTMLのオブジェクトを取ってくる場合、「$」を入れる
// const $button =document.getElementsByTagName('button');

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while(buttonIndex < buttonLength){
//   //ここに命令
//   $button[buttonIndex].textContent = answers[buttonIndex];
//   buttonIndex++;
// }



//ボタンをクリックしたら正誤判定 ※手順（2）

//文字列を比較して一致するかどうかをみる場合は「===」を使う


// $button[0].addEventListener('click', ()=> {
// 　if(correct === $button[0].textContent){
//     window.alert('正解！')
//   } else {
//     window.alert('不正解！')
//   }
// });

// $button[1].addEventListener('click', ()=> {
//   if(correct === $button[1].textContent){
//     window.alert('正解！')
//   } else {
//     window.alert('不正解！')
//   }
// });

// $button[2].addEventListener('click', ()=> {
//   if(correct === $button[2].textContent){
//     window.alert('正解！')
//   } else {
//     window.alert('不正解！')
//   }
// });

// $button[3].addEventListener('click', ()=> {
//   if(correct === $button[3].textContent){
//     window.alert('正解！')
//   } else {
//     window.alert('不正解！')
//   }
// });



//※手順（3）　（手順（2）をリファクタリング）

// $button[0].addEventListener('click', (e)=> {
//   clickHandler(e);
// });

// $button[1].addEventListener('click', (e)=> {
//   clickHandler(e);
// });

// $button[2].addEventListener('click', (e)=> {
//   clickHandler(e);
// });

// $button[3].addEventListener('click', (e)=> {
//   clickHandler(e);
// });