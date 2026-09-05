# TechStore GT

Aplicación de consola desarrollada con Node.js que calcula
totales de ventas y aplica descuentos.

## Requisitos

- Node.js 24.x
- npm
- Git

## Instalación

Desde la carpeta principal del proyecto:

```powershell
npm install
```

Si ya existe un `package-lock.json` versionado, usar `npm ci`
para instalar las dependencias según ese archivo.

## Ejecutar la aplicación

```powershell
npm start
```

La demostración utiliza un precio de 250, una cantidad de 3
y un descuento del 10 %.

Resultados esperados:

- Subtotal: 750.
- Total con descuento: 675.

## Ejecutar las pruebas

```powershell
npm test
```

Las pruebas comprueban cálculos correctos, entradas inválidas
y descuentos en los límites de 0 % y 100 %.

## Validaciones

- Precio y total: números finitos mayores o iguales a cero.
- Cantidad: número entero mayor o igual a cero.
- Descuento: número finito entre 0 y 100 inclusive.
- Los datos inválidos generan un error.

Se asume que los productos se venden en unidades completas.

## Estructura principal

```text
config/
  config.js         Configuración de la aplicación
docs/
  NOTAS_PROYECTO.txt Notas del proyecto
src/
  app.js            Funciones y validaciones
  demo.js           Demostración de consola
tests/
  app.test.js       Pruebas automatizadas
.gitignore          Archivos excluidos de Git
package.json        Scripts y dependencias
README.md           Instrucciones del proyecto
```

## Configuración y seguridad

No deben guardarse contraseñas en el código ni en el repositorio.
La configuración sensible debe proporcionarse mediante variables
de entorno.

La aplicación actual es una demostración de consola:
no implementa una conexión a una base de datos.

## Flujo de trabajo propuesto

1. Crear una rama para cada cambio.
2. Modificar el código y agregar las pruebas correspondientes.
3. Ejecutar las pruebas localmente.
4. Registrar los cambios mediante commits.
5. Abrir un pull request.
6. Obtener revisión y controles automáticos aprobados antes de integrar.

Esquema:

Tarea → Rama → Cambios y pruebas → Pull request → Revisión → main

## Pendientes

| Pendiente | Responsable | Criterio de aceptación |
|---|---|---|
| Automatizar la preparación del proyecto | [Nombre] | El comando documentado genera una versión ejecutable y termina sin errores |
| Configurar Azure Pipelines | [Nombre] | Los pull requests ejecutan las pruebas automáticamente |
| Proteger main | [Nombre] | Se exige revisión y CI aprobada antes de integrar |
| Realizar revisión independiente | [Nombre] | Un compañero revisa y aprueba el pull request |
| Verificar la documentación | [Nombre] | Otra persona instala y ejecuta siguiendo este README |

## Fundamento de las mejoras

Las validaciones evitan operaciones con datos incorrectos.
Las pruebas automatizadas permiten detectar regresiones.
El control de versiones y las revisiones facilitan la colaboración.
Esta documentación permite compartir el conocimiento del sistema.