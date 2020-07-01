// Requireds
const fs = require('fs');


let listarTabla = (base, limite) => {

    for( let i = 0; i<= limite; i++){
        console.log(`${base} X ${i} = ${base * i}`);
        };
}


let crearArchivo = (base, limite) => { 

    return new Promise( (resolve, reject) =>{

        if (!Number(base)){
            reject(`${base} no es un numero -base`);
            return;
        }

        if(!Number(limite)){
            reject(`${limite} no es un numero -limite`);
            return;
        }

        let data = '';

        for( let i = 0; i<= limite; i++){
        data += `${base} X ${i} = ${base * i}\n`;
        };

        /* const data = new Uint8Array(Buffer.from('Hello Node.js')); */

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
};