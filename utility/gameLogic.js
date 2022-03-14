function countLetters(array){
  let outputObject = {}

  for(let i = 0; i < array.length; i++){
    if(outputObject[array[i]] === undefined){
      outputObject[array[i]] = 1
    } else {
      outputObject[array[i]] = outputObject[array[i]] + 1
    }
  }
  return outputObject
}

export default function checkWord(inputWord, correctWord){
  correctWord = correctWord.split('')
  const correctWordCount = countLetters(correctWord)
  let outputColor = []
  let correctLetters = ''
  let closeLetters = ''
  let incorrectLetters = ''

  if(inputWord.length !== 5){
    console.log('Word needs to be 5 characters')
    return
  } else {

    for(let i = 0; i < inputWord.length; i++){
      if(inputWord[i] === correctWord[i]){
        outputColor.push('G')
        correctWordCount[inputWord[i]] = correctWordCount[inputWord[i]] - 1
        correctLetters = correctLetters + inputWord[i]
      } else {
        outputColor.push('D')
        incorrectLetters = incorrectLetters + inputWord[i]
      }
    }

    for(let i = 0; i < inputWord.length; i++){
      if(outputColor[i] !== 'G'){
        if(correctWord.includes(inputWord[i])){
          if(correctWordCount[inputWord[i]] > 0){
            outputColor[i] = 'Y'
            correctWordCount[inputWord[i]] = correctWordCount[inputWord[i]] - 1
            closeLetters = closeLetters + inputWord[i]
          }
        }
      }
    }

    const correct = !(outputColor.includes('Y') || outputColor.includes('D'))

    return{word: inputWord, color: outputColor, correct, correctLetters, closeLetters, incorrectLetters}
  }
}
