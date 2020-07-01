const opts = {
    base:{
            demand: true,
            alias: 'b'
    },
    limite:{
            alias: 'l',
            default:10
    }
};

const argv = require('yargs')
                .command('listar', 'Imprime la tabla de multiplicar de la base', opts)
                .command('crear', 'Genera un archivo con la tabla de multiplicar con un limite', opts)
                .help()
                .argv;

module.exports = {
    argv
};