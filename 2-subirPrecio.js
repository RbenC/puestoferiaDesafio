const stock = require('./data.json');
const incrementoPrecio = 2;

function extraerProductos(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(
                stock.filter((element) =>{
                    return element.cantidad > 0 && element.cantidad <= 5
                }).map((element)=>{
                    return {
                        ...element,
                        nuevoprecio:element.precio*incrementoPrecio
                    }
                })
            )            
        }, 2000);
    })
}

async function stockDisponible(){
    const productosDisponibles = await extraerProductos();
    console.log();
    console.log('Subir el precio de los productos cuando quede poca existencia .****');
    console.table (productosDisponibles);    
    console.log('*******************************************************************');    
}
stockDisponible(); 

