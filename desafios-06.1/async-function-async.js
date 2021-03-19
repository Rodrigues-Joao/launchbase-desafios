 function printDouble(number) {
     return new Promise(resolve => {
         setTimeout(
             () => {
                 let result = number * 2
                 console.log(result)
                 resolve(result)

             },
             Math.floor(Math.random() * (100 - 1)) + 1
         )

     })
 }

 async function printAll() {
     await printDouble(5)
     await printDouble(10)
     await printDouble(22)
     await printDouble(1)
     await printDouble(89)
 }
 printAll()