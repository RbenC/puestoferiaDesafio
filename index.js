// array frutas stock 
const stock =  [
    {
        "nombre":"Uva",
        "precio":1000,
        "cantidad":20,
        "unidad": "kg"
    },
    {
        "nombre":"Manzana Verde",
        "precio":700,
        "cantidad":20,
        "unidad": "kg"
    },
    {
        "nombre":"Manzana Roja",
        "precio":600,
        "cantidad":50,
        "unidad": "kg"
    },
    {
        "nombre":"Naranja",
        "precio":500,
        "cantidad":20,
        "unidad": "kg"
    },
    {
        "nombre":"Piña",
        "precio":1800,
        "cantidad":12,
        "unidad": "Un"
    },
    {
        "nombre":"Banana",
        "precio": 850,
        "cantidad":60,
        "unidad": "kg"
    },
    {
        "nombre":"Cebolla",
        "precio": 600,
        "cantidad":60,
        "unidad": "kg"
    },
    {
        "nombre":"Zanahoria",
        "precio": 500,
        "cantidad":60,
        "unidad": "kg"
    },
    {
        "nombre":"Brocoli",
        "precio": 1000,
        "cantidad":30,
        "unidad": "Un"
    },
    {
        "nombre":"Coliflor",
        "precio": 1200,
        "cantidad":30,
        "unidad": "Un"
    },
    {
        "nombre":"Papa",
        "precio": 500,
        "cantidad":2,
        "unidad": "Kg"
    },
    {
        "nombre":"Frutilla",
        "precio": 1000,
        "cantidad":0,
        "unidad": "Kg"
    }
]
let cantidadMinima = 5; // Alerta para subir el precio de los productos cuando quede poca existencia (modificar el precio de un producto cuando algún producto tenga una existencia).
let incrementoPrecio = 1.3; // Incrementar 30%  Al llegar a 5 como cantidad minima en stock del producto 
let productoComprar ='Papa';  // Producto a comprar 
let cantidadComprar = 6; // Cantidad del producto a comprar 
let mensaje='Gracias por su compra. '; 
let totalPagar = 0;
let totalValorStock=0;

//************************************************* */ //Cantidad total de productos  con existencia > 0
const stockDisponible = stock.filter((item)=>{
    return  item.cantidad>0;
});
//************************************************* */
//************************************************* */ // Cantidades de existencia > 0 y < 5 
const stockDisponible2 = stock.filter((item)=>{
    return  item.cantidad > 0 && item.cantidad <= cantidadMinima 
});
//************************************************* */ //incrementar precio
const stockIncrementadoPrecio = stockDisponible2.map((item)=>{
    return {
        ...item,
        precio: item.precio*incrementoPrecio
    }
});
//************************************************* */ //Encontrar la posicion del producto a comprar
const posicion = stock.findIndex((item)=>{
    const condicion = item.nombre == productoComprar
    return condicion 
});
switch (productoComprar) {
    case 'Uva':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Manzana Verde':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Manzana Roja':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Naranja':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Piña':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Banana':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Cebolla':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Zanahoria':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Brocoli':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Coliflor':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Papa':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;
    case 'Frutilla':
        if(stock[posicion].cantidad>cantidadComprar){
            totalPagar=cantidadComprar * stock[posicion].precio;
            mensaje+= `Total = ${cantidadComprar} * ${stock[posicion].precio} = ${new Intl.NumberFormat("de-DE").format(totalPagar)}`; 
        } else {
            mensaje+= `Lamentamos no disponer la cantidad solicitada de ${productoComprar} que requiere. `
        }
        break;

    default:
        break;
}

// valor total del stock
const resultado = stock.forEach((item)=>{
    totalValorStock+=item.cantidad*item.precio
}); 
// valor total del stock


//************************************************* */
console.clear();
console.log('************************************************************************************')
console.log(`Puesto de Feria Santaolalla - ${stock.length} Productos `);
console.log('************************************************************************************')


console.log();
console.log('************************************************************************************')
console.log(`Puesto de Feria Santaolalla -  ${stockDisponible.length} Productos en Stock Disponibles Cantidades > 0 ` );
console.log(stockDisponible);
console.log('************************************************************************************')
console.log();

console.log();
console.log('************************************************************************************')
console.log(`Puesto de Feria Santaolalla -  ${stockDisponible2.length} Productos en Stock con cantidad menor o igual a  ${cantidadMinima}`);
console.log(stockDisponible2);
console.log('************************************************************************************')
console.log();

console.log();
console.log('************************************************************************************')
console.log("Puesto de Feria Santaolalla   - Productos en Stock con incremento de precio"+ stockIncrementadoPrecio.length);
console.log(stockIncrementadoPrecio);
console.log('************************************************************************************')
console.log();

console.log();
console.log('************************************************************************************')
console.log(`Producto solicitado ${productoComprar}  Cantidad Disponible ${stock[posicion].cantidad}`);
console.log(mensaje);
console.log('************************************************************************************')
console.log();

console.log();
console.log('************************************************************************************')
console.log(`Valor Total del Stock ${new Intl.NumberFormat("de-DE").format(totalValorStock)} CLP`);
console.log('************************************************************************************')
console.log();console.log();console.log();