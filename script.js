let numeroAtual = "";
let numeroAnterior = "";
let operador = "";

function numeros(numero){
    numeroAtual += numero;
    document.getElementById("resultado").value = numeroAtual;
}

function limpar(){
    numeroAtual = "";
    numeroAnterior = "";
    operador = "";
    document.getElementById("resultado").value = "0";
}

function operadores(op){
        if(numeroAtual === "")return;
        numeroAnterior = numeroAtual;
        numeroAtual = "";
        operador = op;
}

function calcular(){
    if(numeroAtual === "" || operador === "") return;

    let resultado;
    switch(operador){
        case "+":
            resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
            break;
        case "-":
            resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
            break;
        case "*":
            resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
            break;
        case "/":
            if (parseFloat(numeroAtual) === 0){
                alert("Erro: Divisão por zero não é permitida.");
                return;
            }
            resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
            break;
        default:
            return;
    }
    numeroAtual = resultado.toString();
    document.getElementById("resultado").value = numeroAtual;
    operador = "";
}
