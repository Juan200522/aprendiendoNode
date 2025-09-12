// Esto solo en los modulos nativos
// que no tiene promesas nativas

// const { promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./archivo.txt' , 'utf-8'),
    readFile('./archivo2.txt' , 'utf-8')
]).then(([text,segundoTexto]) => {
    console.log('Primer texto:' , text );
    console.log('Segundo texto:' , segundoTexto);
})

