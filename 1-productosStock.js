const stock = require('./data.json');


function extraerProductos(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(
                stock.filter((element) =>{
                    return element.cantidad > 0
                })
            )            
        }, 2000);
    })
}

async function stockDisponible(){
    const productosDisponibles = await extraerProductos();
    console.log();
    console.log('Mostrar con console.log cuántos productos quedan en stock.*********');
    console.table (productosDisponibles);    
    console.log('*******************************************************************');    
}
stockDisponible(); 

