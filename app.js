import { sumar, restar, multiplicar, dividir } from './operaciones.js';

function mostrarMenu() {
    return prompt(`Elige una operación:
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividir
    5. Salir`);
}

function calculadora() {
    let salir = false;
    while (!salir) {
        const operacion = mostrarMenu();
        if (operacion === '5') {
            salir = true;
            alert('Saliendo...');
        } else {
            const num1 = parseFloat(prompt('Ingresa el primer número:'));
            const num2 = parseFloat(prompt('Ingresa el segundo número:'));
            let resultado;
            switch (operacion) {
                case '1':
                    resultado = sumar(num1, num2);
                    break;
                case '2':
                    resultado = restar(num1, num2);
                    break;
                case '3':
                    resultado = multiplicar(num1, num2);
                    break;
                case '4':
                    resultado = dividir(num1, num2);
                    break;
                default:
                    alert('Operación no válida');
                    continue;
            }
            alert(`El resultado es: ${resultado}`);
        }
    }
}

calculadora();
