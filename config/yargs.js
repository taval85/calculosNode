const options = {
    base: {
        demand: true,
        alias: 'b'
    } ,
    limite:{
        alias: 'l',
        default:10
    } 
};

const argv = require('yargs')
    .command('listar','Imprime en consola la tabala de multiplicar',
      options
    )
    .command('crear','Genera archivo con la tabala de multiplicar',
       options
      )
    .help()
    .argv;


    module.exports = {
        argv

    }