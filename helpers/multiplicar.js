const fs = require('fs')
const colors = require('colors');

const crearArchivo = async(base, listar, hasta)=>{
       
    try{
        console.log('=============================================='.brightMagenta)
        console.log(`--------- >> TABLA DEL ${base}  << -------------`.america)
        console.log('=============================================='.brightMagenta)
        
        let salida = '' ;
        let consola = '' ;
         
        for (i = 1 ; i <= hasta ; i++){
            res = i * base
            salida += '---->    ' +  base + ' x ' + i + ' = '+ res + '\n';
            consola += '---->    '.rainbow +  base + ' x '.red + i + ' = '.green + res + '\n'   
        }
        if (listar === true){
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida)   
        
        const nombreArchivo = `tabla-del-${base}.txt`.rainbow
        return nombreArchivo
    }catch(error){
        throw error
    }   
}



module.exports = {
    crearArchi: crearArchivo      
}