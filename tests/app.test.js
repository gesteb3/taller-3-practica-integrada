const { calcularTotal, aplicarDescuento } = require('../src/app');

test('calcula correctamente el total', () => {
    expect(calcularTotal(100, 2)).toBe(200);
});

test('aplica correctamente un descuento', () => {
    expect(aplicarDescuento(1000, 10)).toBe(900);
});

test('rechaza precios negativos', () => {
    expect(() => calcularTotal(-1, 2)).toThrow('precio');
});

test('rechaza cantidades no enteras o negativas', () => {
    expect(() => calcularTotal(100, 1.5)).toThrow('cantidad');
    expect(() => calcularTotal(100, -1)).toThrow('cantidad');
});

test('rechaza descuentos fuera del rango permitido', () => {
    expect(() => aplicarDescuento(100, -1)).toThrow('descuento');
    expect(() => aplicarDescuento(100, 101)).toThrow('descuento');
});
