const fs = require('node:fs');
const { text } = require('node:stream/consumers');

const texto1 = fs.readFileSync('./texto.txt' , 'utf-8')
console.log(texto1);

fs.readFile('./texto2.txt' , 'utf-8' , (err , text) => {
    console.log(text);
    
})
