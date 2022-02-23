interface IComponent {
    method(): string
}

class Component implements IComponent {
    method(): string {
        return 'Component Method'
    }
}

class Decorator implements IComponent {
    #object: IComponent

    constructor(object: IComponent) {
        this.#object = object
    }

    method(): string {
        return `Decorator Method(${this.#object.method()})`
    }
}

const COMPONENT = new Component()
console.log(COMPONENT.method())


const Decorated = new Decorator(COMPONENT)
console.log(Decorated.method())

const Decorated2 = new Decorator(Decorated)
console.log(Decorated2.method())