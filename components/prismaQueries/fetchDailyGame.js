// import generateDailyWord from "../../utility/dailyWordCreator";
// import wordBank from "../../utility/wordBank"
// import checkWord from "../../utility/gameLogic";

// export default async function fetchDailyGame(game) {
//   const dailyWord = wordBank[generateDailyWord(wordBank.length)]

//   const {turn, words, colors} = game

//   const gameBoard = []

//   let status = 'pending'

//   for(let i = 0; i < words.length; i++){
//     if(words[i] === ''){
//       gameBoard.push({word: ['','','','',''], color: ['','','','',''], correct: false})
//     } else {
//       const wordObj = checkWord(words[i],dailyWord)
//       gameBoard.push(wordObj)
//       if(wordObj.correct){
//         status = 'won'
//       }
//     }
//   }

//   if(turn >= 6 && gameBoard[5].correct === false){
//     status = 'lost'
//   }

//   return({gameBoard, turn, status})
// }
