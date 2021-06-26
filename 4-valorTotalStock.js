const stock = require('./data.json'); 
let totalValorStock = 0;
// valor total del stock

const resultado = stock.forEach((item)=>{
    totalValorStock+=item.cantidad*item.precio
}); 
// valor total del stock


console.log();
console.log('************************************************************************************')
console.log(`Valor Total del Stock ${new Intl.NumberFormat("de-DE").format(totalValorStock)} CLP`);
console.log('************************************************************************************')
console.log();console.log();console.log();