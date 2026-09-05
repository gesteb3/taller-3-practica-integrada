function calcularTotal(precio, cantidad) {
    if (!Number.isFinite(precio) || precio < 0) {
        throw new Error('El precio debe ser un número mayor o igual a cero');
    }

    if (!Number.isInteger(cantidad) || cantidad < 0) {
        throw new Error('La cantidad debe ser un entero mayor o igual a cero');
    }

    return precio * cantidad;
}

function aplicarDescuento(total, porcentaje) {
    if (!Number.isFinite(total) || total < 0) {
        throw new Error('El total debe ser un número mayor o igual a cero');
    }

    if (!Number.isFinite(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        throw new Error('El descuento debe estar entre 0 y 100');
    }

    return total - (total * porcentaje / 100);
}

module.exports = {
    calcularTotal,
    aplicarDescuento
};
