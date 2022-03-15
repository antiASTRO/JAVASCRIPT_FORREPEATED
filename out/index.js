"use strict";
// console.log("Hello Typescript");
let users = [
    { name: 'Javohir', age: 47, nickname: 'javohir' },
    { name: 'Olimjon', age: 13, nickname: 'olimtoy' },
    { name: 'Juratbek', age: 17, nickname: 'juratbekoff' },
    { name: 'Muxtorbek', age: 20, nickname: 'muxtorshox' },
    { name: 'Abrorbek', age: 20, nickname: 'abroriy' },
];
let human = [];
for (const element of users) {
    if (element.age >= 17 && element.age <= 20) {
        human.push(element);
    }
}
console.log(human);
// type User = {
//     name: string;
//     age: number;
//     nickname: string;
// }
// let grownusers: User[] = [
// ];
