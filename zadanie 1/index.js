let numberColumn = Math.floor(Math.random() * 9 + 4), 
numberRows = Math.floor(Math.random() * 27 + 4),
numbers = []

/*

[
    [1,2,3],
    [2,4,5],
    [2,3,5]
]

*/
//numbercolins -> 3
//numberrows -> 2

for(let i = 0; i < numberRows; i++) {
    let row = []
    for(let k = 0; k < numberColumn; k++) {
        row.push(
            Math.floor(Math.random() * 200 - 100)
        )
    }
    numbers.push(row)
}

// let num = [
//     [1,2],
//     [2,5],
//     [1,0]
// ]

// for(let i = 0; i < num.length; i++) {
//     console.log(num[i])
//     for(let k = 0; k < num[i].length; k++) {
//         console.log(num[i][k])
//     }
// }

for(let i = 0; i < numbers.length; i++) {
    let row = document.createElement("tr")
    for(let k = 0; k < numbers[i].length; k++) {
       let cell = document.createElement("td")
       cell.innerText = numbers[i][k]
       row.appendChild(cell)
    }
    document.querySelector("table").appendChild(row)
}

// let num = [
//     [1,2,10,12],
//     [2,5,10,12],
//     [1,0,12,12]
// ]

console.log(numbers)

function minAndMax(array) {
    let minArray = [],
    maxArray = []
    for(let k = 0; k < array[0].length; k++) {
        let minValue,
        maxValue
        for(let i = 0; i < array.length; i++) {
            if(!minValue || minValue > array[i][k]) {
                minValue = array[i][k]
            }
            if(!maxValue || maxValue < array[i][k]) {
                maxValue = array[i][k]
            }
        }
        minArray.push(minValue)
        maxArray.push(maxValue)
    }
    return {minArray, maxArray}
}

// function abc() {
//    console.log("abccc")
//    return 1
// }

// function add(a,b) {
//     return a + b
// }

// console.log(add(10,5))

// let t = abc()
// console.log(t)

let ar = minAndMax(numbers)
console.log(ar)