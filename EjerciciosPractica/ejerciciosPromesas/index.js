const path = require('path');
const fs = require('node:fs/promises');


/*fs.readFile('./texto.txt' , 'utf-8')
    .then(text => console.log(text))
    .catch(err => console.log('Error leyendo el archivo', err));
*/

/*(async () => {
  try {
    const file1 = path.join(__dirname, 'texto.txt'); // ruta segura
    const text1 = await fs.readFile(file1, 'utf8'); // espera aquí
    console.log('Primer texto:', text1);

    const file2 = path.join(__dirname, 'texto2.txt');
    const text2 = await fs.readFile(file2, 'utf8'); // ejecuta después
    console.log('Segundo texto:', text2);
  } catch (err) {
    console.error('Error leyendo archivos:', err.message);
  }
})();*/



(async () => {
  try {
    const p1 = fs.readFile(path.join(__dirname,'texto.txt'),'utf8');
    const p2 = fs.readFile(path.join(__dirname,'texto2.txt'),'utf8');
    const [text1, text2] = await Promise.all([p1, p2]); // ambas corren al mismo tiempo
    console.log('Primer texto:', text1);
    console.log('Segundo texto:', text2);
  } catch (err) {
    console.error('Error leyendo archivos en paralelo:', err.message);
  }
})();