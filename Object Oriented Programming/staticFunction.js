class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    greeting() {
        console.log(`As Salamu Alaikum ${this.lname}`);
    }

    // static function
    static staticGreet() {
        console.log("No more dynamic, Static here 😊");
    }
}

// we can call any method from object, like this one
let person1 = new Person("Jhone", "Doe");
console.log(person1.greeting());

// but we can not call any static function from any object
// instead we need to call that static function from class, like this one
console.log(Person.staticGreet());
