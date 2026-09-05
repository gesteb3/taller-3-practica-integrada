const {
    calcularTotal,
    aplicarDescuento
} = require('../src/app');

test('calcula correctamente el total', () => {
    expect(calcularTotal(100, 2)).toBe(200);
});

test('acepta cantidad cero', () => {
    expect(calcularTotal(100, 0)).toBe(0);
});

test.each([-1, '100', NaN, Infinity])(
    'rechaza precio inválido: %s',
    (precio) => {
        expect(() => calcularTotal(precio, 2)).toThrow();
    }
);

test.each([-1, 1.5, '2', NaN, Infinity])(
    'rechaza cantidad inválida: %s',
    (cantidad) => {
        expect(() => calcularTotal(100, cantidad)).toThrow();
    }
);

test.each([-1, '100', NaN, Infinity])(
    'rechaza total inválido: %s',
    (total) => {
        expect(() => aplicarDescuento(total, 10)).toThrow();
    }
);

test.each([-1, 101, '10', NaN, Infinity])(
    'rechaza descuento inválido: %s',
    (porcentaje) => {
        expect(() => aplicarDescuento(100, porcentaje)).toThrow();
    }
);

test.each([
    [0, 100],
    [10, 90],
    [100, 0]
])('aplica descuento de %s por ciento', (porcentaje, esperado) => {
    expect(aplicarDescuento(100, porcentaje)).toBe(esperado);
});