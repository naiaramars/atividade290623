function media() {
    let div = document.getElementById("resp");
    let nota1 = parseInt(document.getElementById("n1").value);
    let nota2 = parseInt(document.getElementById("n2").value);
    let nota3 = parseInt(document.getElementById("n3").value);
    let soma = nota1 + nota2 + nota3;
    let resultado = soma / 3;
    let text = "";

    if(resultado >= 6) {
        text = "Você foi aprovado. Sua média foi "  +resultado+  ". Parabéns!";
    }

    else{
        if(resultado < 6)
    text = "Você não foi aprovado. Sua média foi" +resultado+ ". Que pena!";
    }

    div.innerHTML = text;
}