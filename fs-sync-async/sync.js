const fs = require('fs');

 fs.writeFileSync('hello.txt', 'intro to node js');
 fs.appendFileSync('hello.txt', 'module system');
 const data = fs.readFileSync('hello.txt');
console.log(data.toString());
fs.renameSync('hello.txt', 'welcome.txt');
// fs.unlinkSync('welcome.txt');




const ff = require("fs").promises

async function CreateFile () {
    try{

        await ff.writeFile("Async-await.txt", "This File Created With Async ");

        await console.log("File Is Created");

    }
    catch(err){

        console.log(err.message)
    
    }
}

CreateFile()