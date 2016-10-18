/** Simple inheritance and use of super constructor
 */

/// Sample class definition in TypeScript
class Person {
    /// name of the person
    Name: string;

    /// surname of the person
    Surname: string;

    /// age of the person
    Age: number;

    /// constructor
    constructor(name: string, surname: string, age: number) {
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
    }

    /// to string method
    toString(): string{
        return this.Name + ' ' + this.Surname + ' (' + this.Age + ')'
    }
}

/// Specification of Person who is also a Developer
class Developer extends Person {
    /// number of coffees a developer 
    CoffeesPerDay : number;

    /// constructor
    constructor(name: string, surname: string, age: number, coffeesPerDay: number) {
        super(name, surname, age);
        this.CoffeesPerDay = coffeesPerDay;
    }

    /// to string method (overrides the original method)
    toString(): string{
        return this.Name + ' ' + this.Surname + ' (' + this.Age + ')' + ' Coffees per day: ' + this.CoffeesPerDay;
    }
}

/// new instance of a person
var karel = new Developer('Karel', 'Mozdren', 30, 3);

/// write the result
document.body.innerHTML = karel.toString();