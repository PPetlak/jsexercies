let tekst = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia arcu eget purus placerat fermentum. Ut eu tincidunt orci. Maecenas eleifend quam ac metus dapibus, faucibus hendrerit lectus elementum. Duis et tortor nunc. Aenean commodo pulvinar tellus eu mattis. In tempus augue nec egestas dignissim. Sed euismod tellus elementum, fringilla lacus maximus, condimentum lorem. Nunc vitae condimentum nisi, ut congue diam. Fusce in euismod nisl, non pulvinar mauris. Maecenas ornare non urna vitae tristique. Cras nulla magna, commodo sed condimentum ac, tincidunt vitae magna. Vivamus bibendum, libero non laoreet vehicula, leo turpis eleifend velit, vitae egestas enim eros at libero."

/*
{
    char: "L",
    count: 12
},
{
    char: "m",
    count: 47
}
*/

const countChars = []

for(let i =0;i<tekst.length;i++){
    countChars.push({
        char: tekst[i],
        count: 2
    })
}


/*
Stwórz strukturę obiektu dla pojazdu, tak żeby miałą
1. 5 pól
2. 2 metody (tak żeby operowały na polach)

Przepisz to na klasę potem.

*/

const car = {
    name: "volvo",
    color: "red",
    fuel: "diesel",
    Fullname: function(){
        console.log("nazwa:"+this.name +' '+ "kolor:"+this.color+" "+ "paliwo:"+this.fuel)
    },
    spalanie: function(km){
        console.log(km*0.06+" litrów")
    }
}
car.spalanie(200)


class Car{
    constructor(name,color){
        this.name=name
        this.color=color
        this.fuel="diesel"
    }
    Fullname() {
        console.log("nazwa:"+this.name +' '+ "kolor:"+this.color+" "+ "paliwo:"+this.fuel)
    }
}

const ford = new Car("ford","blue")
console.log(ford.Fullname())

const fiat = new Car("fiat", "yellow")
console.log(fiat.Fullname())