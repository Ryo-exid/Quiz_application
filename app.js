const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '日本語と同様の適切な語句を選びなさい　"夕暮れ"',
    answers: [
      'midday',
      'twilight',
      'daytime',
      'midnight'
    ],
    correct: 'twilight'
  }, {
    question: '日本語と同様の適切な語句を選びなさい　"成功する"',
    answers: [
      'prosper',
      'overtake',
      'invest',
      'finance'
    ],
    correct: 'prosper'
  }
];

const quizLength = quiz.length;　//問題数
let quizIndex = 0; //今何問目か数える変数
let score = 0;


const $button = document.getElementsByTagName('button');　//documentはHTMLに反映させる　//HTMLのオブジェクトを取ってくる場合、「$」を入れる
const buttonLength = $button.length;　//buttonの数（問題数が変わっても良いように柔軟性を持たせる）


//クイズの問題文、選択肢を定義
const setupQuiz = ()=> {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;　//textContentはHTMLタグが持っているテキスト情報を取得するプロパティ
  let buttonIndex = 0;　//buttonIndexはbuttonを数える変数
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


//「e」はイベントのオブジェクト,targetはクリックされたボタンのこと。//clickHandlerはクリックされたら動く関数として定義。
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！')
    score++;
  } else {
    window.alert('不正解！')
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもう無ければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + '問です！')
  }
};


//手順⑤　（手順④をリファクタリング）
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });

  handlerIndex++;
}






// クイズの問題文、選択肢を定義　　※手順①

// const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//   'スーパーファミコン',
//   'プレイステーション2',
//   'ニンテンドースイッチ',
//   'ニンテンドーDS'
// ];

// const correct = 'ニンテンドーDS';



//定数の文字列をHTMLに反映させる
//textContentはHTMLタグが持っているテキスト情報を取得するプロパティ

// document.getElementById('js-question').textContent = question;


// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];



//※手順② （手順①をリファクタリング）

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



//ボタンをクリックしたら正誤判定 ※手順③（手順②をリファクタリング）

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



//※手順④　（手順③をリファクタリング）

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