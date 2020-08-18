const fs=require('fs')
const http = require('http');

//blocking,synchronous way
//const textin = fs.readFileSync('./txt/input.txt','utf-8');
//console.log(textin);
//const textout = `this is what i about about me: ${textin}.\nCerated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt',textout);
//console.log('file written');

//non-blocking, asynchronous way

fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
       console.log(data2);
       fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',(err)=>{
                 console.log("your file has been written")
            })
       });
    });
});
console.log("will read file!");