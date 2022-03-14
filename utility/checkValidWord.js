import wordBank from './wordBank'
import guessBank from './guessBank'

export default function checkValid(string){
  if(wordBank.includes(string)){
    return true
  } else if(guessBank.includes(string)){
    return true
  } else {
    return false
  }
}
