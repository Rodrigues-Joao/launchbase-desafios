//SE o IMC maior ou igual a 30: acima do peso;
//SE o IMC menor que 29.9:não está acima do peso;

const nome = 'Osmir'
const peso =  86 // em Kg  
const altura = 1.70 // em metros

const imc = peso / (altura * altura);

if (imc > 29.9){
    console.log(`${nome} está acima do peso`)
}
else{
    console.log (`${nome} não está acima do peso`)
}