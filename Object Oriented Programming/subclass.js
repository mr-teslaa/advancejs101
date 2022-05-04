// we can call any class to subclass
// but we can not call any subclass to class
// because we did not extends them into class

// liek mother and children class
// mother did not get any habit from child
// instead child get some habit from mother, you can remember this example to remember this topic

// base class
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    greeting() {
        return `As Salamu Alaikum ${this.lname}`;
    }
}

// subclass
class Customer extends Person {
    constructor(fname, lname, phone, membershipID) {
        super(fname, lname);

        this.phone = phone;
        this.membershipID = membershipID;
    }
}
let person1 = new Person("Nikola", "Tesla");

console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Jhone", "Doe", "988265-525", "5563");
console.log(customer1);
console.log(customer1.greeting());
