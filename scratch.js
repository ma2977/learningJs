// x = 3
// f(x) = x^2 + 1
// f(3) = (3)^2 + 1
let m_name = 'Mari';
console.log(m_name)
m_name = 'Bob'
console.log(m_name)
let age = 63;
let isMom = true;
let siblings = ['flavio', 'alejandro']

function printIfOld(age) {
    if (arguments < 50) {
        console.log('is not old')
    } else {
        console.log('is old')
    }
}

function washDishes() {
    console.log('Washing Dishes...')
}

function cleanBathroom() {
    console.log('Cleaning Bathroom...')
}

function vaccumFloor() {
    console.log('Vacumming floor...')
}

function cleanHouse() {
    washDishes()
    cleanBathroom()
    vaccumFloor()
}
let husband = "Luis"
console.log(husband)
let wife = "Maricruz"
console.log(wife)
console.log(husband, wife)
console.log(husband + wife)
console.log(husband, wife)
console.log(husband + " and" + wife)
console.log(husband + " and " + wife)
console.log(`${husband} and ${wife} are married.`)

function times2(number) {
    return number * 2
}

function add(a, b) {
    return (a + b)
}
console.log(add(26, 5))

function sqrt(num) {
    return Math.sqrt(num)
}
let myNumber = 5
let myNumberTimes2 = times2(myNumber)
console.log(myNumberTimes2)
// (-b + sqrt(b^2 - 4 ac)) / (2a)
function foo(a, b, c) {
    return (-b + sqrt(b ^ 2 - 4 * a * c)) / (2 * a)
}
console.log(foo(1, 25, 1))
let children = ["Dylan", "Keyri", "Camila"]
console.log(children)
console.log(children[0])
console.log(children[1])
console.log(children[2])

function upper(name) {
    return name.toUpperCase()
}

for (let index = 0; index < children.length; index++) {
    let ans = upper(children[index]) + ' is my kid'
    console.log(index + ' ' + ans)
}

for (const kid of children) {
    console.log(kid)
}

let names = children

for (const name of names) {
    console.log(name)
}


if (30 < 10) {
    console.log('wat')
} else {
    console.log('not')
}

function isLessThan10(num) {
    return num < 10
}

if (isLessThan10(3) && isLessThan10(2)) {
    console.log('mari')
}
else {
    console.log('agustina')
}

console.log(isLessThan10(11))
console.log('isLessThan10(11)')