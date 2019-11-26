const argv = require('./config/yargs').argv
const colors = require('colors/safe');
    

const { crearArchivo,listarTabla}  = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch(commando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;
    case  'crear':
         crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
           .catch(error => console.log(error))
        break;
    default: 
    console.log('Comando no reconocido');

}

//console.log(mult);

//let argv2 = process.argv;


console.log(argv);

//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// //console.log(base);
