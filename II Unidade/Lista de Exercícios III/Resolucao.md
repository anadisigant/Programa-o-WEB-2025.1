# Instruções

- Para resolução das questões abaixo, será admitido o uso apenas da sintaxe adotada para escrita de scripts na linguagem
Javascript;
- Para a realização das operações de entrada, considere exclusivamente o uso da método global window.prompt;
- Para a realização das operações de saída, considere exclusivamente o uso da método global window.alert;
- Para a realização das operações de conversão de strings em inteiros, considere o uso da função global parseInt;
- Para a realização das operações de conversão de strings em números de ponto flutuante, considere o uso da função global
parseFloat.

## Resolução

1. Escreva um script no qual seja solicitado ao usuário determinada distância em metros e, após isso, seja calculado e exibida distância informada em decímetros, centímetros e milímetro.

```javascript
    let metro = parseFloat(window.prompt("Distânica em metros:"));

    if(!isNaN(metro)) {
        let decimetro = metro * 10;
        let centimetro = metro * 100;
        let milimetro = metro * 1000;

        let conversao = `Distância em metros: ${metro}m\n` +
                     `Em decímetros: ${decimetro}dm\n` +
                     `Em centímetros: ${centimetro}cm\n` +
                     `Em milímetros: ${milimetro}mm`;

        window.alert(conversao);
    } else {
        window.alert("Digite um número válido");
    }
```

2. Escreve um script no qual seja solicitado ao usuário 2 (dois) números e, após isso, sejam calculados e exibidos: <br>
    a) A soma dos números;<br>
    b) O produto do primeiro número pelo quadrado do segundo;<br>
    c) O quadrado do primeiro número;<br>
    d) O módulo da divisão do primeiro número pelo segundo número.

```javascript
    let numeroI = parseFloat(window.prompt("1° número"));
    let numeroII = parseFloat(window.prompt("2° número"));

    if (!isNaN(numeroI) && !isNaN(numeroII) && numeroII !== 0) {
    let soma = numeroI + numeroII;
    let produto = numeroI * (numeroII ** 2);
    let quadrado = numeroI * numeroI;
    let resto = Math.abs(numeroI % numeroII);

    let resultados = `${numeroI} + ${numeroII} = ${soma}\n` +
                    `${numeroI} * (${numeroII}²) = ${produto}\n` +
                    `${numeroI}² = ${quadrado}\n` +
                    `|${numeroI} % ${numeroII}| = ${resto}`;

    window.alert(resultados);
    } else {
    window.alert("Considerando que o segundo número não possa ser 0, digite números válidos");
    }
```
3. Escreva um script no qual seja solicitado ao usuário 2 (dois) números e, após isso, seja identificado e mostrado o maior deles.

```javascript
    let numeroI = parseFloat(window.prompt("1° número"));
    let numeroII = parseFloat(window.prompt("2° número"));

    if(numeroI > numeroII) {
        window.alert(`${numeroI} > ${numeroII}`)
    } else if(numeroI = numeroII) {
        window.alert(`${numeroI} = ${numeroII}`)
    } else {
        window.alert(`${numeroI} < ${numeroII}`)
    }
```
4. Escreva um script no qual seja solicitado ao usuário 2 (dois) números e, após isso, seja identificado e mostrado a diferença entre
eles.

```javascript
    let numeroI = parseFloat(window.prompt("1° número"));
    let numeroII = parseFloat(window.prompt("2° número"));

    if(!isNaN(numeroI) && !isNaN(numeroII)) {
        let diferenca = numeroI - numeroII

        window.alert(`${numeroI} - ${numeroII} = ${diferenca}`)
    }
```
5. Escreva um script no qual seja solicitado ao usuário um numero inteiro e, após isso, seja verificado se ele é par ou ímpar.

```javascript
    let numero = parseInt(window.prompt("Insira um número para descobrir se ele é par ou ímpar:"));

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            window.alert(`${numero} é par`);
        } else {
            window.alert(`${numero} é ímpar`);
        }
    } else {
        window.alert("Digite um número inteiro válido.");
    }
```
6. Escreva um script no qual seja solicitado ao usuário um numero real. Após isso, se o numero informado for positivo, deve ser
calculada e exibida __diferença absoluta entre ele e potência daquele número elevado a 3 (três)__; caso contrário, deverá ser
calculado e exibido __quadrado do mesmo número__.

```javascript
    let numero = parseFloat(window.prompt("Insira um número:"));

    if(!isNaN(numero)) {
        if (numero > 0) {
            let positivo = Math.abs(numero - (numero ** 3))
            window.alert(`|${numero} - (${numero}³)| = ${positivo}`)
        } else {
            let negativo = numero ** 2
            window.alert(`${numero}² = ${negativo}`)
        } 
    } else {
        window.alert("Digite um número real válido.");
    }
```
7. Escreva um script no qual seja calculada a média ponderada das notas de 3 (três) avaliações aplicada a um aluno, a serem
informados pelo usuário. A primeira e a segunda avaliação possuem peso 1 (um) e a terceira nota possui peso 2 (dois). Ao final,
deverá ser calculada e exibida a média do aluno e indicar se ele foi aprovado ou reprovado (para aprovação, considere que a
média deve ser igual ou superior a 6).

```javascript
    let nota1 = parseFloat(window.prompt("Digite a 1ª nota (peso 1):"));
    let nota2 = parseFloat(window.prompt("Digite a 2ª nota (peso 1):"));
    let nota3 = parseFloat(window.prompt("Digite a 3ª nota (peso 2):"));

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let media = (nota1 * 1 + nota2 * 1 + nota3 * 2) / 4;

        let resultado = `Média final: ${media.toFixed(2)}\n`;

        if (media >= 6) {
            resultado += "Aprovado";
        } else {
            resultado += "Reprovado";
        }

        window.alert(resultado);
    } else {
        window.alert("Por favor, digite notas válidas.");
    }
```
8. Escreva um script no qual seja solicitado ao usuário 2 (dois) valores (aqui chamados de valor1 e valor2) e 1 (um) operador
de alguma das quatro operações matemáticas básicas (soma, subtração, multiplicação e divisão, sendo elas representadas,
respectivamente, pelos caracteres “+”, “-”, “*” e “/”), sendo após isso calculado e exibido resultado da expressão: __valor1 _operador_ valor2 _=_ resultado__
```javascript
    let operacao = window.prompt("Digite a operação no formato: valor1 operador valor2\nExemplo: 10 + 5");

    if(operacao) {
        let partes = operacao.trim().split(" ");

        if(partes.length === 3) {
            let valor1 = parseFloat(partes[0]);
            let operador = partes[1];
            let valor2 = parseFloat(partes[2]);

            if(!isNaN(valor1) && !isNaN(valor2)) {
                let resultado;

                switch(operador) {
                    case "+":
                        resultado = valor1 + valor2;
                        break;
                    case "-":
                        resultado = valor1 - valor2;
                        break;
                    case "*":
                        resultado = valor1 * valor2;
                        break;
                    case "/":
                        if(valor2 !== 0) {
                            resultado = valor1 / valor2;
                        } else {
                            window.alert("Divisão por 0 não realizada");
                            resultado = null;
                        }
                        break;
                    default:
                        window.alert("Operador inválido. Use +, -, * ou /.");
                        resultado = null;
                }
                if (resultado !== null) {
                window.alert(`${valor1} ${operador} ${valor2} = ${resultado}`);
                }
            } else {
                window.alert("Entrada inválida, utilize a entrada no formato: valor1 operador valor2")
            }
        } else {
            window.alert("Nenhuma entrada fornecida")
        }
    }
```
9. Escreva um script no qual sejam calculados e exibidos os 5 (cinco) primeiros múltiplos de 3 (três) considerando-se apenas
números maiores que 0 (zero).
```javascript
    let multiplosDeTres = [];
    let contador = 1;

    while (multiplosDeTres.length < 5) {
        let multiplo = contador * 3;
        multiplosDeTres.push(multiplo);
        contador++;
    }

    window.alert(`Os 5 primeiros múltiplos de 3 maiores que 0 são: ${multiplosDeTres.join(", ")}`);
```
10. Escreva um script no qual seja solicitado ao usuário 10 (dez) inteiros e, após isso, seja calculada e exibida a média de tais
número.
```javascript
    let soma = 0;
    let quantidade = 10;

    for (let i = 1; i <= quantidade; i++) {
        let numero = parseInt(window.prompt(`Digite o ${i}º número inteiro:`), 10);

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            window.alert("Número inválido. Será considerado como 0.");
        }
    }

    let media = soma / quantidade;
    window.alert(`A média dos 10 números informados é: ${media}`);
```
11. Escreva um script no qual seja solicitado ao usuário um número positivo e, após isso, sejam identificados e exibidos seus
divisores.
```javascript
    let numero = parseInt(window.prompt("Digite um número inteiro positivo:"), 10);

    if (!isNaN(numero) && numero > 0) {
        let divisores = [];

        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }

        window.alert(`Os divisores de ${numero} são: ${divisores.join(", ")}`);
    } else {
        window.alert("Por favor, insira um número inteiro positivo válido.");
    }
```
12. Escreva um programa no qual seja solicitado ao usuário um numero inteiro e, após isso, seja calculada e exibida a soma de
todos os divisores desse numero, com exceção dela próprio. A soma, por exemplo, dos divisores do número 66 seria dada por __1 + 2 + 3 + 6 + 11 + 22 + 33 = 78__
```javascript
    let numero = parseInt(window.prompt("Digite um número inteiro positivo:"), 10);

    if (!isNaN(numero) && numero > 0) {
        let somaDivisores = 0;

        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                somaDivisores += i;
            }
        }

        window.alert(`A soma dos divisores de ${numero}, exceto ele próprio, é: ${somaDivisores}`);
    } else {
        window.alert("Por favor, insira um número inteiro positivo válido.");
    }
```