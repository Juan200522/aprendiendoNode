// Provando ls con promesas
const fs = require('node:fs');

fs.readdir('.')
    .then(files =>{
        files.forEach(file => {
            console.log(file);
            
        })
    })
    .catch(err =>{
        if (err) {
            console.log('Error al leer el directorio' , err);
            return;
            
        }
    })
// Provando ls con fs system
/*const fs = require('node:fs');

fs.readdir('.' , (err,files) =>{
    if (err) {
        console.log('Error al leer el directorio' , err);
        
    }

    files.forEach(file => {
        console.log(file);
        
    })
})*/