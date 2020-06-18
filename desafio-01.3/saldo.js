const users = [
    {
      nome: "Salvio",
      receitas: [10,20,30],
      despesas: [5,10,15]
    },
    {
      nome: "Marcio",
      receitas: [50.4],
      despesas: [60.5]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

  function SumNumbers (numbers){
      let sum = 0;
    for (let number of numbers){
        sum += number
    }
    return sum
  }

  function CalculateBalance (receitas, despesas){
      return (SumNumbers(receitas) - SumNumbers(despesas)).toFixed(1)
  }

  for (user of users){
       balance = CalculateBalance(user.receitas, user.despesas)
      if (balance > 0){
        console.log(`${user.nome} possui saldo POSITIVO de ${balance}`)
      }
      else{
        console.log(`${user.nome} possui saldo NEGATIVO de ${balance}`)
      }
  }