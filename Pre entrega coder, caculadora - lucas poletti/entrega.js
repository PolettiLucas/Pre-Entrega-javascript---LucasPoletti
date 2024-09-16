function calcular(operacion, num1, num2) {
    let resultado;

    console.log('Operación:', operacion);
    console.log('Número 1:', num1);
    console.log('Número 2:', num2);

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log('Error: División por cero');
                return 'Error: División por cero';
            }
            break;
        default:
            console.log('Operación no válida');
            return 'Operación no válida';
    }

    console.log('Resultado:', resultado);
    return resultado;
}

function iniciarCalculadora() {
    let operacion = prompt('Ingrese la operación (+, -, *, /):');
    let num1 = parseFloat(prompt('Ingrese el primer número:'));
    let num2 = parseFloat(prompt('Ingrese el segundo número:'));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: Uno o ambos números ingresados no son válidos.');
        console.log('Error: Uno o ambos números no son válidos');
        return iniciarCalculadora();
    }

    let resultado = calcular(operacion, num1, num2);
    alert('El resultado de la operación es: ' + resultado);

    if (confirm('¿Desea realizar otra operación?')) {
        console.log('El usuario desea realizar otra operación.');
        iniciarCalculadora();
    } else {
        console.log('Gracias por usar la calculadora.');
        alert('Gracias por usar la calculadora.');
    }
}

iniciarCalculadora();



