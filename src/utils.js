export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char)? 1 : 2;
    }
    return points;
  }

export function isPalindrome (word){
    const reversed=word.split('').reverse().join('').toLowerCase()
    if(!/^[A-Za-z]+$/.test(word)){
        throw new Error("Enter valid input");
    }
    else{
    if(word.toLowerCase()===reversed){
            return true}
}}