interface IProtoType {
    // interface com método clone 
    clone(): this
    // O clone pode ser Deep Copy ou Shallow Copy.
    // Vai da sua escolha qual implementar.
    // Os detelhes ficam na classe cncreta.
}

class MyClass implements IProtoType {
    // A Concrete Class
    field: number[]

    constructor(field: number[]) {
        this.field = field // qualquer valor de qualquer tipo
    }

    clone() {
        return Object.assign({}, this) // Shallow copy
        // return JSON.parse(JSON.stringify(this)); //Deep copy
    }
}

// Cliente
const OBJECT1 = new MyClass([1, 2, 3, 4]) // Cria um objeto que contém um array
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)

const OBJECT2 = OBJECT1.clone() // Clone
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
// Muda o valor de um elemento do array no OBJECT2
// Dependendo do seu método de clone, uma cópia superficial ou profunda foi realizada
OBJECT2.field[1] = 101

// Comparando OBJECT1 e OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)
