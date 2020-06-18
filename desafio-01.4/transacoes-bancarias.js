const user = {
    name: "João",
    transactions: [],
    balance: 0
  }
/*

  {
  type: 'credit',
  value: 50.5
}
*/

function createTransaction (object){
    user.transactions.push(object)

    if (object.type == 'credit'){
        user.balance += object.value
    }
    else{
        user.balance -= object.value
    }
}
// { type: 'credit', value: 120 }
function getHigherTransactionByType(type){
    let HigherTransaction
    let NumberHigher = 0

    for( transaction of user.transactions){
        if (transaction.type == type && transaction.value > NumberHigher){
            NumberHigher = transaction.value
            HigherTransaction = transaction
        }
    }
    return HigherTransaction
}
// 83.3
function getAverageTransactionValue(){
    let sum = 0
    
    for(transaction of user.transactions){
        sum += transaction.value
    }
    let media = (sum / user.transactions.length).toFixed(2)
    return media
}
// { credit: 5, debit: 3 }
function getTransactionsCount(){
    let CountCredit = 0
    let CountDebit = 0

    for (transaction of user.transactions){
        if (transaction.type == 'credit')
            CountCredit += 1
        else
            CountDebit += 1    
    }

    return {credit: CountCredit, debit: CountDebit}
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })
createTransaction({ type: 'debit', value: 81 })
createTransaction({ type: 'credit', value: 121 })

console.log(user.balance) // 60
const credito = getHigherTransactionByType('credit')
console.log (`Maior transação de ${credito.type} = ${credito.value}`) // { type: 'credit', value: 120 }
const debito = getHigherTransactionByType('debit')
console.log (`Maior transação de ${debito.type} = ${debito.value}`)// { type: 'debit', value: 80 }

console.log (`Media das transações = ${getAverageTransactionValue()}`) // 70


const CounTransations = getTransactionsCount() // { credit: 2, debit: 2 }
console.log (`Tiveram ${CounTransations.credit} transações de crédito e ${CounTransations.debit} de débito`)