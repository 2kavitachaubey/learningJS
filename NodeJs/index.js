// const fs = require("fs");

// fs.writeFile("message.txt","Hello new file...",(err) =>{
//     if(err) throw err;
//     console.log("Hello my coder");
// });

// fs.readFile("./message.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// let generateName = require("sillyname");
// let sillyname = generateName();
// console.log(`My name is ${sillyname}.`);

import { randomSuperhero } from "superheroes";
let superheroes = randomSuperhero();
console.log(`My Hero name is ${superheroes}.`);