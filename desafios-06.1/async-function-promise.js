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

function printAll() {
    printDouble(5)
        .then(() => { return printDouble(10) })
        .then(() => { return printDouble(22) })
        .then(() => { return printDouble(1) })
        .then(() => { return printDouble(89) })
        .catch((err) => {
            throw new Error(err)
        })
}

printAll()