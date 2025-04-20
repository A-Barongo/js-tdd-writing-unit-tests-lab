
import { pointsForWord,isPalindrome } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
  
    const points = pointsForWord(word);
  
    expect(points).toBe(7);
  });
});

describe("isPalindrome",()=>{
    it("Checks if a word is a palidrome and returns 'true' if it is",()=>{
        const word="racecar";

        const check=isPalindrome(word);
        
        expect(check).toBe(true)
    })

    it("should return true for words that are a combination of uppercase and lowercase letters",()=>{
        const word="rAceCar";

        const check=isPalindrome(word);
        
        expect(check).toBe(true)
    })
    
    it("throws an error if the input has any non-alphabetic characters", () => {
        const word = "race car";
    
        expect(() => isPalindrome(word)).toThrow();
      });
      it("throws an error if the input is an empty string", () => {
        const word = "";
    
        expect(() => isPalindrome(word)).toThrow();
      });
})
