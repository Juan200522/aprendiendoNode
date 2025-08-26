// ------------------------------------- Leyendo archivos txt de manera sincrona -------------------------
/*const fs = require('node:fs')

console.log('Leyendo el primer archivo txt de manera sincrona');

const text = fs.readFileSync('./archivo.txt' , 'utf-8')

console.log(text); 

console.log('Leyendo el segundo archivo txt de manera sincrona');

const segundoTexto = fs.readFileSync('./archivo2.txt' , 'utf-8')

console.log(segundoTexto);*/





// ------------------------------------- Leyendo archivos txt de manera Asincrona -------------------------

const fs = require('node:fs');
const { text } = require('node:stream/consumers');

console.log('Leyendo el primer archivo txt de manera sincrona');

fs.readFile('./archivo.txt' , 'utf-8' , (err , text) => { // <---- Ejecutas este callback
    console.log('Primer texto' , text);
    
})

console.log('--> Hacer cosas mientras lee el archivo...'); 

console.log('Leyendo el segundo archivo txt de manera sincrona');

fs.readFile('./archivo2.txt' , 'utf-8' , (err , text) => {
    console.log('Segundo texto' , text);
    
})
