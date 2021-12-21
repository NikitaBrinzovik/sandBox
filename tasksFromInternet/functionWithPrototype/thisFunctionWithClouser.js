const inc = () => {
    let counter = 1;

    const inner = () => {
        counter++
        return inner
    }

    inner.get_value = () => {
        return counter
    }

    return inner
}

console.log(inc()()().get_value())//3
console.log('--------------')
console.log(inc()().get_value())//2
console.log('==================')
console.log(inc().get_value())//1