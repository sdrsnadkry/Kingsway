class Animal {
    constructor(nameArg, colorArg) {
        this.name = nameArg;
        this.color = colorArg;
    }

    eat(foodArg) {
        console.log(
            this.name + "who is of color " + this.color + " is eating " + foodArg
        );
    }
}

// const someAnimal = new Animal("Bruno", "Brown");

// console.log(someAnimal.name, someAnimal.color)

// console.log(someAnimal.eat("Milk"))

class Dog extends Animal {
    bark() {
        console.log(this.name + " Dog is barking");
    }
}

const dog = new Dog("Tom", "Black");

// console.log(dog.bark());

// console.log(dog.eat("Meat"));

class Cat extends Animal {
    meow() {
        console.log(this.name + " is meowing");
    }
}

const cat = new Cat("Kitty", "White");

console.log(cat.meow());