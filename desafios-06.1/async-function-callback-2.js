function printDouble(number, soma, callback) {
    setTimeout(
        () => {
            callback(number * 2 + soma)
        },
        Math.floor(Math.random() * (100 - 1)) + 1
    )
}

function printAll() {
    printDouble(5, 0, (result) => {
        console.log(result)
        printDouble(12, result, (result) => {
            console.log(result)
            printDouble(2, result, (result) => {
                console.log(result)
            })
        })
    })

}

printAll()