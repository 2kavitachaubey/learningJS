/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
 .prompt([
   {
      type : "input",
      name : "URL",
      message :"Which site QR code you want?"
   }
 ])
 .then((answer)=>{
   const url = answer.URL;
   console.log(url);

   let qr_png = qr.image(url);
   qr_png.pipe(fs.createWriteStream("site_qr.png"));

   fs.writeFile("URL.txt",url ,(err) =>{
   if(err) throw err;
   console.log("Saved to File");
   });
 })
 .catch((err)=>{
    if(err.isTtyError) throw err;
    console.log("finished the job...")
 })
