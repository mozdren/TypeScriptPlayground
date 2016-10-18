/** This sample shows how easy it really is to create and use classes and its constructors
 *  in TypeScript. Reading and writing code is quite starightforward and You can basically
 *  start developing in TS immediately!!!
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

/// new instance of a person
var karel = new Person('Karel', 'Mozdren', 30);

/// write the result
document.body.innerHTML = karel.toString();