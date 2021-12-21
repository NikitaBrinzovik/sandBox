console.log(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,);
//------------------------------------1--------------------------
let result = -1
let helper = 0
const fibonacci0 = () => {
    result = helper - result
    helper = helper + result
    return console.log(helper)
}

fibonacci0()
fibonacci0()
fibonacci0()
fibonacci0()
fibonacci0()
console.log('=========')
console.log('=========')

//----------------------------------2-----------------------------------------
const fibonacci = () => {
    let result = -1
    let helper = 0
    return function innerF() {
        result = helper - result
        helper = helper + result
        return console.log(helper)
    }
}
const fibonacci2 =fibonacci()
fibonacci2()
fibonacci2()
fibonacci2()
fibonacci2()
console.log('=========')
console.log('=========')

//---------------------3------------------------------------------
//можно и без initValue, но так интереснее)
const fib1 = (function (initValue) {
    let a = initValue
    let b = 1 //если поставить знак минус, то пойдём в другую сторону
    return function innerF() {
        console.log(a)//если вывести b, то будет от 1 начинаться
        a = b - a
        b = b + a
        return fib1
    }
})(0)
fib1()
fib1()
fib1()
fib1()
fib1()
fib2 = fib1()
fib2()
fib2()
console.log('=========')
console.log('=========')

//----------------------------------4------------------------------
const fib3 = function () {
    let b = 0
    let a = 1
    return function innerF() {
        console.log(a)
        b = a - b
        a = b + a
        return fib3
    }
}

fib4 = fib3()
fib4()
fib4()
fib4()
fib4()
