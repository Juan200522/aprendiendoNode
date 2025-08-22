const fs = require('node:fs')

console.log('Leyendo el primer archivo txt de manera sincrona');

const text = fs.readFileSync('./archivo.txt' , 'utf-8')

console.log(text);
