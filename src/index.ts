// console.log("Hello Typescript");

// type User = {
   
// }

// let users: User[] = [


//     {
//         name: 'juratbek',
//     },

//     {
//         name: 'islom',   
//     },

    
//     {
//         name: 'ahmad', 
//     },

    
//     {
//         name: 'shohjahon',  
//     }

// ]


// for(let i = 0; i < 4;  i++) {
//     console.log(users[i])
// }



// for(let i = 0; i < 10; i++) {
//     console.log('olimjon');
//     console.log('javohir');
// }



// let nums: number[] = [2,4,5,6,7,9];

// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i]

//     console.log(element)
// }


type User = {
    name: string;
    age: number;
    nickname: string;
}


let users: User [] = [

    {name: 'Javohir', age: 47, nickname: 'javohir'},
    {name: 'Olimjon', age: 13, nickname: 'olimtoy'},
    {name: 'Juratbek', age: 17, nickname: 'juratbekoff'},
    {name: 'Muxtorbek', age: 20, nickname: 'muxtorshox'},
    {name: 'Abrorbek', age: 20, nickname: 'abroriy'},

];  



let human: User [] = []

for (const element of users) {

    if(element.age >=17 && element.age <= 20 ) {
        human.push(element)

        
    }

}

console.log(human)




















// type User = {
//     name: string;
//     age: number;
//     nickname: string;
// }


// let grownusers: User[] = [

// ];



