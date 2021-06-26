const stock = require('./data.json'); 
const productoComprar ='Papa';  // Producto a comprar 
const cantidadComprar = 6; // Cantidad del producto a comprar 
let totalPagar =0; 

const posicion = stock.findIndex((item)=>{
    const condicion = item.nombre == productoComprar
    return condicion 
});


switch (productoComprar) {
    case 'Papa':
        if(stock[posicion].cantidad > cantidadComprar){
            try {
                // throw new Error("Error");
                totalPagar=cantidadComprar * stock[posicion].precio;            
                console.log(`Total a pagar = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`);                                
            } catch (error) {
                console.log(error);
            }
        }else {
            console.log(`Lo sentimos no disponemos de la cantidad de ${productoComprar} que usted requiere en este momento. Gracias por su comprensión.  `);                                
        }
        break;
    default:
        break;
}
