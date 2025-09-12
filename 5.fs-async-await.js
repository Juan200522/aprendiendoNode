// Esto solo en los modulos nativos
// que no tiene promesas nativas


// const { promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const { readFile } = require("node:fs/promises");


async function init() {
    console.log('Leyendo el primer archivo txt de manera sincrona');

        const text = await readFile('./archivo.txt' , 'utf-8')
        console.log('Primer texto:' , text );
        console.log('--> Hacer cosas mientras lee el archivo...'); 

        console.log('Leyendo el segundo archivo txt de manera sincrona');

        const segundoTexto = await readFile('./archivo2.txt' , 'utf-8')
        console.log('Segundo texto:' , segundoTexto)
}

init();


// LIFE expresión de función inmediata\
/*(
    async() =>{
        console.log('Leyendo el primer archivo txt de manera sincrona');

        const text = await readFile('./archivo.txt' , 'utf-8')
        console.log('Primer texto:' , text );
        console.log('--> Hacer cosas mientras lee el archivo...'); 

        console.log('Leyendo el segundo archivo txt de manera sincrona');

        const segundoTexto = await readFile('./archivo2.txt' , 'utf-8')
        console.log('Segundo texto:' , segundoTexto)
    }
)()
 */

