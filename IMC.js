//IMC
var Altura = prompt("Qual é a sua Altura?");
var Peso = prompt("Quanto Você Pesa?");

Imc = Peso / (Altura * 2)


//Infomações
console.log(Altura);
console.log(Peso);
console.log(Idade);
console.log(Imc);
console.log(Categoria);

//Idade
var Categoria
var Idade = prompt("Digite sua Idade");

if(Idade > 0 && Idade < 12){
    Categoria = "Infantil"
}else if(Idade >= 12 && Idade <= 20){
    Categoria = "Juvenil"
}else if(Idade >= 21 && Idade <= 65){
    Categoria = "Adulto"
}else if(Idade > 65){
    Categoria = "Idoso"
}else{
    Categoria = "Você é Um Bixim De água Humana"
}

//Riscos
if (Imc < 20) {
    console.log("Muitas Complicações de saúde como Doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.");
}else if(Imc >= 20 && Imc < 24.9){
    console.log("Seu peso está ideal para suas referências.")
}else if(Imc >= 25 && Imc < 29.9){
    console.log("Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares");
}else if(Imc >= 30 && Imc < 35){
    console.log("quem tem Obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade");
}else if(Imc > 35){
    console.log("O obeso Mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.");
}

//Recomendações Iniciais
if (Imc < 20) {
    console.log("inclua carboidratos simples em sua dieta, alén de proteínas indispensáveis para ganho de massa magra. Procure um profissional.");
}else if(Imc >= 20 && Imc < 24.9){
    console.log("Mantenha uma dieta saudável efaça seus exames periódicos.")
}else if(Imc >= 25 && Imc < 29.9){
    console.log("Adote um tratamento em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante");
}else if(Imc >= 30 && Imc < 35){
    console.log("Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)");
}else if(Imc > 35){
    console.log("Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).");
}