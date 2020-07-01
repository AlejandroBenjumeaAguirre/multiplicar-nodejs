// importacion
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch( comando ){
        
        case 'crear':
                crearArchivo(argv.base, argv.limite)
                        .then( archivo => console.log(`Archivo creado: ${colors.rainbow(`${archivo}`)}`))
                        .catch( err => console.log(err));
        break;
        
        case 'listar':
                listarTabla(argv.base, argv.limite);
        break;

        default:
                console.log('Comando no reconocido');
        break;
}

/* let base = '9'; */

/* console.log(process.argv); */

/* let arg = process.argv; */

/* console.log(arg); */
/* console.log(argv); */
/* let parametro = arg[2];
let base = parametro.split('=')[1]; */


