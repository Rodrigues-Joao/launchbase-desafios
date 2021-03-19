 function printDouble(number, soma) {
     return new Promise(resolve => {
         setTimeout(
             () => {
                 let result = number * 2 + soma
                 resolve(result)

             },
             Math.floor(Math.random() * (100 - 1)) + 1
         )

     })
 }

 async function printAll() {
     let result
     result = await printDouble(5, 0)
     console.log(result)
     result = await printDouble(12, result)
     console.log(result)
     result = await printDouble(2, result)
     console.log(result)
 }
 printAll()