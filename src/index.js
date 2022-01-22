const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  let words = expr.toString().split('**********');
  let letters =[];
  let key = '';
  //console.log(words);
  for (word of words){
      letters = [];
      for (let i = 0; i < word.length / 10; i++){
        letters.push(word.substr(i*10,10));
       // console.log(letters);
      };
      for (letter of letters){
        letter = letter.slice(letter.indexOf('1'),letter.length);
        key = '';
        for (let k = 0; k < (letter.length / 2); k++){
            key += (letter[2*k+1] === '0') ? '.':'-';
        }
        result += MORSE_TABLE[key];
      }
      result += ' ';
  }

  return result.trim();

}

module.exports = {
    decode
}