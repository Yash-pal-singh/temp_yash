// const os=require('os');
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.type());

// const path=require('path');
// console.log(path.sep);
// const filepath=path.join('/food','human','being','idia.txt');
// console.log(path.basename(filepath));
// console.log(path.join(__dirname,'folder','yash.txt'));


// const fs=require('fs');
// fs.writeFile('./yash.txt',"hii yash this is hr this side",(err)=>{});
// fs.readFile('./yash.txt','utf-8',(err,data)=>{console.log(data);});

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.end("home page hai");
//     }
//     else if(req.url=='/about')
//     {
//          res.end('about page hai')
//     }
//     else
//     {
//         res.end(`<h1>OOPs page not found<h1>
//         <p>sorry the page is not available.you may wish to proceed back<p>
//         <a href="/
//         ">home page</a>
//         `);
//     }
// });
// server.listen(5000,()=>{
//     console.log("server is listening");});


const lodash=require('lodash');
const items=[1,[2,[3,4,5]]];
const newItem=lodash.flattenDeep(items);
console.log(newItem);