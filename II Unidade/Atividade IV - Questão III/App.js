let somaTotal = 0;
let quantidade = 0;
let numerosInseridos = [];

function calcular() {
    const number1 = parseFloat(document.getElementById("number1").value.trim());
    const number2 = parseFloat(document.getElementById("number2").value.trim());
    const operador = document.getElementById("operador").value;
    let resultado;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Insira apenas números válidos (use ponto como separador decimal).");
        return;
    }

    somaTotal += number1 + number2;
    quantidade = 2;
    numerosInseridos.push(number1, number2);
    document.getElementById("historico").value = numerosInseridos.join(", ");

    switch (operador) {
        case "+": resultado = number1 + number2; break;
        case "-": resultado = number1 - number2; break;
        case "*": resultado = number1 * number2; break;
        case "/": 
            if (number2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = number1 / number2; 
            break;
        default: 
            alert("Operador inválido");
            return;
    }

    alert(`Resultado: ${resultado}`);
    document.getElementById("resultado").value = resultado;
}