// JavaScript Coding Challenge

// 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.


// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.


// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.


// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.


// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.


// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.


// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.


// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.


// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.


// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.


// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.


// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.


// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.


// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.


// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.


// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.

function createPerson() {
    const name = "Braydon";
    const age = 25;
    const person = {
        name: name,
        age: age
    };
    return person;
}

function logPersonProperties(person) {
    const name = person.name;
    const age = person.age;
    return { name, age };
}

const { Braydon, 25 } = logPersonProperties(person);
console.log("Name:", Braydon);
console.log("Age", 25);

function modifyAge()person, newAge) {
    person.age = newAge;
    return person;
}

const newAge = 35;
const modifiedPerson = modifyAge(person, newAge);
console.log(modifiedPerson);

function addJob(person, job) {
    person.job = job;
    return person;
}

const job = "Software Engineer";
const personWithJob = addJob(person, job);
console.log(personWithJob);

funstion deleteAge(person) {
    delete person.age;
    return person;
}

const personWithoutAge = deleteAge(person);
console.log(personWithoutAge);

function addGreet(person) {
    person.greet = function() {
        return "Hello, my name is " + this.name + ".";
    };
    console,log(person.greet());
}

addGreet(person);

function createNumbersArray() {
    const numbers = [1, 3, 5, 7, 9];
    return numbers;
}

function logFirstAndThird(numbers) {
    const firstElement = numbers[0];
    const thirdElement = numbers[2];
    return [firstElement, thirdElement];
}

function modifySecond(numbers, newNumber) {
    numbers[1] = newNumber;
    return numbers;
}

function logLength(numbers) {
    return numbers.length;
}

function iterateWithFor(numbers) {
    const result = [];
    for (let i=0; i < numbers.length; i++) {
        result.push(numbers[i]);
    }
    return result;
}

function iterateWithWhile(numbers) {
    const result = [];
    let i=0;
    while (i < numbers.length) {
        result.push(numbers[i]);
        i++;
    }
    return result;
}

function iterateWithForOf(numbers) {
    const result = []
    for (const number of numbers) {
        result.push(number);
    }
    return result;
}

function createJSON(person) {
    const json = JSON.stringify(person);
    return json;
}

const jsonPerson= createJSON(person);
console.log("JSON representation of person:", jsonPerson);

function parseJSON(json) {
    const parsedObject = JSON.parse(json);
    return parsedObject;
}

function stringifyPerson(person) [
    const jsonString = JSON.stringify(person);
    return jsonString
]

const jsonString = stringifyPerson(person);
console.log("JSON string representation of person:", jsonString);