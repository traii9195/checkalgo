let length = 0;
let words = 0;
let vowels = 0;

const sentence = prompt("Enter a sentence with a period at the end:");

for (let i = 0; i < sentence.length; i++) {
  const character = sentence.charAt(i);
  
  if (character === '.') {
    break;
  }
  
  length++;

  if (character === ' ') {
    words++;
  }
  if (character.match(/[aeiouAEIOU]/)) {
    vowels++;
  }
}

words++;

console.log(`Length: ${length}`);
console.log(`Words: ${words}`);
console.log(`Vowels: ${vowels}`);