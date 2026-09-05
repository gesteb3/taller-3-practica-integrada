const { calcularTotal, aplicarDescuento } = require('./app');
const config = require('../config/config');

const subtotal = calcularTotal(250, 3);
const total = aplicarDescuento(subtotal, 10);

console.log("=== TechStore GT ===");
console.log("Subtotal:", subtotal);
console.log("Total con descuento:", total);
console.log("Base de datos configurada:", config.database);
