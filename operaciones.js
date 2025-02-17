export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) {
        return 'error: división por cero';
    } else {
        return a / b;
    }
}
