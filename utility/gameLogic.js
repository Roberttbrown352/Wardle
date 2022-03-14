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

export default function checkWord(inputWord, secretWord){
  inputWord = inputWord.split('')
  const correctWord = secretWord.split('')
  const correctWordCount = countLetters(correctWord)
  let outputColor = []

  if(inputWord.length !== 5){
    console.log('Word needs to be 5 characters')
    return
  } else {

    for(let i = 0; i < inputWord.length; i++){
      if(inputWord[i] === correctWord[i]){
        outputColor.push('G')
        correctWordCount[inputWord[i]] = correctWordCount[inputWord[i]] - 1
      } else {
        outputColor.push('DG')
      }
    }

    for(let i = 0; i < inputWord.length; i++){
      if(outputColor[i] !== 'G'){
        if(correctWord.includes(inputWord[i])){
          if(correctWordCount[inputWord[i]] > 0){
            outputColor[i] = 'Y'
            correctWordCount[inputWord[i]] = correctWordCount[inputWord[i]] - 1
          }
        }
      }
    }

    const correct = !(outputColor.includes('Y') || outputColor.includes('DG'))

    return{word: inputWord, color: outputColor, correct}
  }
}
