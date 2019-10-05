// const product = {
//     name: "Iphone 10",
//     price: 1200,
//     hello: function() {
//         console.log("Nazwa urządzenia: " + this.name)
//     },
//     order: function(amount) {
//         this.hello()
//         console.log("Cena ostateczna to: " + this.price * amount)
//     }
// }

// product.order(2)
// product.price = 2000
// product.order(2)

// const product2 = {
//     name: "Iphone 6",
//     price: 750,
//     hello: function() {
//         console.log("Nazwa urządzenia: " + this.name)
//     },
//     order: function(amount) {
//         this.hello()
//         console.log("Cena ostateczna to: " + this.price * amount)
//     }
// }

// product2.hello()

class Product {
    constructor(asd, price) {
        this.name = asd //Samsung
        this.price = price // 1800
        this.abc = "abc"
    }

    hello() {
        console.log("Nazwa urządzenia: " + this.name)
    }

    order(amount) {
        this.hello()
        console.log("Cena ostateczna to: " + this.price * amount)
    }


}

const p1 = new Product("Samsung", 1800)
console.log(p1.name)
const p2 = new Product("Samsung 2", 2400)
p2.price = 9000
console.log(p2.price)
p1.hello()
p1.order(10)
// product.hello()

// // let tab = [
// //     {
// //         name: "Iphone 11",
// //         price: 1200,
// //         hello: function() {
// //             //console.log(`Nazwa urządzenia: ${product.name}`)
// //             console.log("Nazwa urządzenia: " + this.name)
// //         }
// //     },
// //     {
// //         name: "Iphone 9",
// //         price: 1200,
// //         hello: function() {
// //             //console.log(`Nazwa urządzenia: ${product.name}`)
// //             console.log("Nazwa urządzenia: " + this.name)
// //         }
// //     }
// // ]
// // product.hello()

// console.log(product.name)

// const product2 = {
//     name: "Iphone 8",
//     price: 800
// }

// const tab = []


// product2.name = "Iphone 9"
// product2["name"] = "Iphone 20"

// const toChange = "name"
// product2[toChange] = 2000
// console.log(product2)
// product2["desc"] = "Lorem ipsum"

// console.log(product2)