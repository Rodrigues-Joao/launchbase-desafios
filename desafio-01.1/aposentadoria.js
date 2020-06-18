/*SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
*/

const nome = 'Wilma'
const idade = 50
const contribuicao = 30
const sexo = 'M'
const regra = idade + contribuicao

if (sexo === 'F'){
    if (regra > 84){
        console.log(`${nome}, você pode se aposentar`)
    }
    else{
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}
else{
    if(regra > 94){
        console.log(`${nome}, você pode se aposentar`)
    }
    else{
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}