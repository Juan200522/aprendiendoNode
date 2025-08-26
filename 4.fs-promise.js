// Esto solo en los modulos nativos
// que no tiene promesas nativas


// const { promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises');


console.log('Leyendo el primer archivo txt de manera sincrona');

fs.readFile('./archivo.txt' , 'utf-8')
    .then(text =>{
        console.log('Primer texto:' , text );
    })

console.log('--> Hacer cosas mientras lee el archivo...'); 

console.log('Leyendo el segundo archivo txt de manera sincrona');

fs.readFile('./archivo2.txt' , 'utf-8')
    .then(text => {
        console.log('Segundo texto:' , text);
        
    })
