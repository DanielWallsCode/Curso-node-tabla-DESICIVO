const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = false) => {
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += (`${base} X ${i}: ${i * base}\n`.trap.america);
            salida += (`${base} X ${i}: ${i * base}\n`);
        }

        if(listar){
            console.log(`La tabla del ${base}`.trap);
            console.log(consola);
        }

        // !PARA GUARDAR UN ARCHIVO DESDE NODE
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla del ${base} creada`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}