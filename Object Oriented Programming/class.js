class Person {
    constructor(fname, lname, birthdate) {
        this.fname = fname;
        this.lname = lname;
        this.birthdate = birthdate;
    }

    calcage() {
        let get_birthdate = new Date(this.birthdate);
        let difference = Date.now() - get_birthdate.getTime();
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person1 = new Person("Nikola", "Tesla", "11-13-1980");
let person2 = new Person("Khalid", "Chawduri", "05-05-2000");

console.log(person1.calcage());
console.log(person2.calcage());
