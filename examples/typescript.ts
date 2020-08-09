interface Animal {
  name: string;
  talk(): void;
  pets?: Animal[]
}

class Dog implements Animal {
  name = 'Dog';
  talk() {
    console.log('Woof!');
  }
}

class Human implements Animal {
  name = 'Human';
  pets: Dog[] = [new Dog()];
  talk() {
    console.log(`${this.name} says: Hello.`);
  }
}
