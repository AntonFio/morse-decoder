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
    let arr = expr.split('')
    let newArr = [];
    let rezult = [];
    
    for (let i = 0; i < Math.ceil(arr.length / 10); i++) {
       newArr[i] = arr.slice((i * 10), ((i * 10) + 10))
    }
 
    for (let i = 0; i < newArr.length; i++) {
       let morse = [];
       let one = newArr[i].join('').slice(0, 2);
       let two = newArr[i].join('').slice(2, 4);
       let three = newArr[i].join('').slice(4, 6);
       let four = newArr[i].join('').slice(6, 8);
       let five = newArr[i].join('').slice(8, 10);
 
       if (one === '10') {
          morse.push('.')
       } else if(one === '11'){
          morse.push('-')
       }
       
       if (two === '10') {
          morse.push('.')
       } else if(two === '11'){
          morse.push('-')
       }
 
       if (three === '10') {
          morse.push('.')
       } else if(three === '11'){
          morse.push('-')
       }
 
       if (four === '10') {
          morse.push('.')
       } else if(four === '11'){
          morse.push('-')
       }
 
       if (five === '10') {
          morse.push('.')
       } else if(five === '11'){
          morse.push('-')
       }
 
       let strMorse = morse.join('')
       console.log(strMorse)
 
       if (strMorse.length > 0) {
          rezult.push(MORSE_TABLE[strMorse])
       } else {
          rezult.push(' ')
       }
 
    }
 
 return rezult.join('')
}

module.exports = {
    decode
}