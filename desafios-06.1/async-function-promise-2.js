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

function printAll() {
    printDouble(5, 0)
        .then((result) => {
            console.log(result)
            return printDouble(12, result)
        })
        .then((result) => {
            console.log(result)
            return printDouble(2, result)
        }).then((result) => {
            console.log(result)
        })
        .catch((err) => {
            throw new Error(err)
        })
}

printAll()