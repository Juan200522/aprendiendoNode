// .js --> por defecto utiliza CommonJs
// .mjs --> para utilizar Es Modules
// .cjs --> para utilizar CommonJs

import { suma , resta , multiplicacion , division} from './suma.mjs'

console.log(suma(5,5));
console.log(resta(10,5));
console.log(multiplicacion(2,5));
console.log(division(2,5));