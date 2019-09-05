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
functfunction getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}io
console.log(getColor(
    
    
    n getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
/*
[
    {
        number: 12,
        color: "#122122"
    },
    {
        number: 1,
        color: "#121adfd"
    }
]
*/

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

const group = []
group.push(12)

for(let i = 0; i < numbers.length; i++) {
    let row = document.createElement("tr")
    for(let k = 0; k < numbers[i].length; k++) {
       let cell = document.createElement("td")
       if(numbers[i][k] % 2 === 0) {
            cell.style.color = "orange"
       } else {
           cell.style.color = "lightblue"
       }
       cell.innerText = numbers[i][k]
       row.appendChild(cell)
    }
    document.querySelector("table").appendChild(row)
}

let obj = {
    a: "asd",
    b:" testst",
    fan: function() {
        console.log("fan")
    }
}
obj.a = true
console.log(obj.a)
obj.fan()

// let person = {
//     name: "Marcin",
//     surname: "Warzybok"
// }
// let person2 = {
//     name: "Jan",
//     surname: "Kowalksi"
// }

// let num = [
//     [1,2,10,1],
//     [2,2,10,12],
//     [1,0,12,12]
// ]

/*

let wystepowania = [
    {
        value: 1,
        color: "#123123"
    },
    {
        value: 2,
        color: "#123F23"
    },
    {
        value: 10,
        color: "#12AD23"
    },
    {
        value: 12,
        color: "#123123"
    },
    {
        value: 0,
        color: "yellow"
    }
]

*/

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

console.log(minAndMax(numbers))

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

// [
//     [1,2,3],
//     [2,4,5],
//     [2,3,5]
// ]
//number[2][2]

let max = null
let min = null

for(let i = 0; i < numbers.length; i++) {
    let suma = 0
    for(let k = 0; k < numbers[i].length; k++ ){
        suma += numbers[i][k]
    }
    console.log(suma)
    if(!max) {
        max = suma
    } else if(suma > max) {
        max = suma
    }
    if(!min) {
        min = suma
    } else if(suma < min) {
        min = suma
    }
}

console.log(min, max)