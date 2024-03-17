var fs = require("fs");

//test1:阻塞
// var data = fs.readFileSync('./textfiles/input1.txt');
// console.log(data.toString());
// console.log("程序执行结束!");


//test2:非阻塞
// fs.readFile('./textfiles/input2.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("程序执行结束!");


//test3:reading and writing files asynchronously
// fs.readFile('./textfiles/input1.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./textfiles/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./textfiles/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./textfiles/final.txt', `${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('your file has been updated');
//             });
//         });

//     });
// });


//test4:reading json file asynchronously
// load json file:
// const config=require('./jsonfiles/user.json');
// console.log(config);
fs.readFile('./jsonfiles/user.json','utf-8',(err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(JSON.parse(data)); 
    // const userObj=JSON.parse(data);
    // console.log(userObj.firstName);
    // console.log(userObj.middleName);
    // console.log(userObj.petInfo);
    // const friends=userObj.friends;
    // for(const friend of friends){
    //     console.log(friend);
    // }
    // console.log(Date.parse(userObj.Date)); //NaN
})



