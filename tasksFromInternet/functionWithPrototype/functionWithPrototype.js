const incOne = (function()  {

    return function (){
        incOne.prototype.inc+=1
        return incOne
    }
})()
incOne.prototype.inc = 0
Function.prototype.get_value = function (){
    let result =  incOne.prototype.inc
    incOne.prototype.inc = 0
    return result
}

console.log(incOne()()().get_value())//3
console.log('--------------')
console.log(incOne()().get_value())//2
console.log('==================')
console.log(incOne().get_value())//1
