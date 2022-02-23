class Person {
    constructor(name, surname, hobbies) {
        this.name = name;
        this.surname = surname;
        this.hobbies = hobbies;
    }

    greeting() {
        return "Hello! I am " + this.name + " " + this.surname + ", and I have the following hobbies: " + this.hobbies;
    }
}

class Teacher extends Person {
    constructor(name, surname, hobbies, subject) {
        super(name, surname, hobbies);
        this.subject = subject;
    }

    greeting() {
        return "Hello! I am " + this.name + " " + this.surname + ", and I have the following hobbies: " + this.hobbies + ". I am also a teacher";
    }

    teach() {
        return "I teach " + this.subject;
    }
}

let person= new Person("Mark", "Robert", ["Engineering","Math", "Programming"]);
console.log(person.greeting());

let teacher= new Teacher("Mary", "Miller", ["Reading Books","Watching Films"], "english");
console.log(teacher.greeting());
console.log(teacher.teach());