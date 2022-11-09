import { faker } from '@faker-js/faker'
import * as fs from "fs"

function generateArray() {
    let employees = []

    for (let i = 0; i < 10; i++)
        employees.push(generate());

    return employees;
}

function generate() {
    return {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        img: faker.internet.avatar()
    };
}

console.log(generate());

fs.writeFile("employees.json", JSON.stringify({ employees: generateArray() }), "utf8", function () { });

