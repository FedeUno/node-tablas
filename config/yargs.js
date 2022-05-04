const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es el número a multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    default: false,
                    type: 'boolean',
                    describe:'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    demandOption: false,
                    default: 10,
                    type: 'number',
                    describe:'Número hasta el cual se muestra la tabla'
                })
                .check((argv, options)=>{
                    if( isNaN( argv.b )){
                        throw 'La base deber ser un número necesariamente'
                    }
                    return true;
                })
                .argv ;

module.exports = argv;