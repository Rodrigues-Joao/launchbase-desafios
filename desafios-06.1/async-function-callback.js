function printDouble(number, callback) {
    setTimeout(
        () => {
            callback(console.log(number * 2))
        },
        Math.floor(Math.random() * (100 - 1)) + 1
    )
}

function printAll() {
    printDouble(5, () => {
        printDouble(10, () => {
            printDouble(22, () => {
                printDouble(1, () => {
                    printDouble(89, () => {})
                })
            })
        })
    })

}

printAll()