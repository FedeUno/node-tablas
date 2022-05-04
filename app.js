const {crearArchi} = require('./helpers/multiplicar');
const argv = require('./config/yargs');




console.clear();



console.log(process.argv)
console.log(argv)

console.log('base:yargs', argv.b)


crearArchi(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err))  