const arr = [2,3,4,5,6,7]
function isOdd(x){
    return x%2;
}

function iseven(x) {
    return !(x%2)
}
const result = arr.filter(isOdd)
const res = arr.filter(iseven)

console.log(result)
console.log(res)