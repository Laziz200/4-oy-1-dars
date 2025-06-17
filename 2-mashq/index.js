class Animal {
    constructor(name) {
        if (new.target === Animal) throw Error("Animal abstrakt klass!");
        this.name = name;
    }
    makeSound() { throw Error("makeSound override qilinishi kerak!"); }
    move() { throw Error("move override qilinishi kerak!"); }
}

class Dog extends Animal {
    #breed;
    constructor(name, breed) {
        super(name);
        this.#breed = breed;
    }
    makeSound() { return `${this.name} vov-vov!`; }
    move() { return `${this.name} yuguradi`; }
}

class Cat extends Animal {
    #color;
    constructor(name, color) {
        super(name);
        this.#color = color;
    }
    makeSound() { return `${this.name} miyov-miyov!`; }
    move() { return `${this.name} yuradi`; }
}
class Bird extends Animal {
    #canFly;
    constructor(name, canFly) {
        super(name);
        this.#canFly = canFly;
    }
    makeSound() { return `${this.name} chiq-chiq!`; }
    move() { return this.#canFly ? `${this.name} uchadi` : `${this.name} sakraydi`; }
}

try { new Animal("Test"); } catch (e) { console.error(e.message); } 
const dog = new Dog("Rex", "Husky");
const cat = new Cat("Mimi", "White");
const bird = new Bird("Tweety", true);

console.log(dog.makeSound(),dog.move());
console.log(cat.makeSound(),cat.move());
console.log(bird.makeSound(),bird.move()); 