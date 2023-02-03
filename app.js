const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(argv);

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nameAr => console.log(`El archivo ${nameAr} Fue creado correctamente`.trap.america))
    .catch((err) => console.log(err));