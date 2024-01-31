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

const dogs = new Animal("Tom", "Black");

console.log(dogs.eat("Meat"));
console.log(dogs.eat("Meat", "Bones"));

// const someAnimal = new Animal("Bruno", "Brown");

// console.log(someAnimal.name, someAnimal.color)

// console.log(someAnimal.eat("Milk"))

class Dog extends Animal {
    bark() {
        console.log(this.name + " Dog is barking");
    }

    eat() {
        super.eat("Bones");
        console.log(this.name + " eats bones");
    }
}

const dog = new Dog("Tom", "Black");

// console.log(dog.bark());

class Cat extends Animal {
    meow() {
        console.log(this.name + " is meowing");
    }
}

// const cat = new Cat("Kitty", "White");

// console.log(cat.meow());

console.log(dog.eat("Meat"));