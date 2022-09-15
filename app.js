const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();
console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow ), 'creado' )
    .catch( err => console.log( err ) );


// const base = 11;

//PASAR ARGUMENTOS POR CONSOLA PARA GENERAR SALIDAS DE DATOS
// const [ , ,arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');
// console.log(base);

// crearArchivo(base)
//     .then( nombreArchivo => console.log( nombreArchivo ), 'creado' )
//     .catch( err => console.log( err ) );

// crearArchivo( base );