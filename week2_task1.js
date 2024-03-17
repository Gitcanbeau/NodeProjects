const fs = require("fs");
// 引入 events 模块, 创建 eventEmitter 对象
const events=require('events');
const eventEmitter=new events.EventEmitter;
//--------------------------------------------------------------------//

//创建购物车array
const cartArray=[];

//创建onCreate事件处理程序
const onCreateHandler=()=>{
    const data={
        name:'',
        price:0,
        amount:0
    }
    cartArray.push(data);
    //存到json试试看
    const data_json=JSON.stringify(data);
    fs.writeFile('jsonfiles/shoppingCart.json',data_json,'utf-8',(err)=>{
        if(err){
            console.error('Error reading file:',err);
        }else{
            //console.log(data);
            //console.log(`(1) 向购物车添加条目成功:+ ${data_json}`);
            //好神奇：object不能用${}，但是string可以用${} 
            //When you use string interpolation (${data}) to log the data object, it will simply print [object Object] 
            //because it's trying to convert the object to a string. 
            //To log the data object correctly, you need to use JSON.stringify() with indentation for pretty formatting.
        }
        
    });
    
    console.log(`(1) 向购物车添加条目成功:+ ${data_json}`);
    //emit onChange事件
    eventEmitter.emit('onChange','product1', 20, 5);
};

//绑定 onCreate 事件处理程序
eventEmitter.on('onCreate',onCreateHandler);


//--------------------------------------------------------------------//
const onChangeHandler=(name,price,amount)=>{
    const lastItemIdx=cartArray.length-1;
    cartArray[lastItemIdx].name=name;
    cartArray[lastItemIdx].price=price;
    cartArray[lastItemIdx].amount=amount;
    
    console.log(`(2)更新成功，购物车新添加的产品是：${name}`);
};
//绑定 onChange 事件处理程序
eventEmitter.on('onChange',onChangeHandler);


//--------------------------------------------------------------------//
const onDestroyHandler=()=>{
    let totalPrice=0;
    for (let i = 0; i < cartArray.length; i++) {
        //console.log(cartArray[i]); // Output each item in the array
        const price = parseFloat(cartArray[i].price);
        const amount = parseFloat(cartArray[i].amount);

        // Check if price and amount are valid numbers
        if (!isNaN(price) && !isNaN(amount)) {
            totalPrice += price * amount;
        } else {
            console.error(`Invalid price or amount for item at index ${i}`);
        }
        
    }
    console.log(`(3)退出成功，购物车内金额是：${totalPrice}`);
    
};
//绑定 onDestroy 事件处理程序
eventEmitter.on('onDestroy', onDestroyHandler);



//--------------------------------------------------------------------//
//emit onCreate事件
eventEmitter.emit('onCreate');

//Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数：
process.on('exit', ()=> {
    eventEmitter.emit('onDestroy');
});
console.log("week2_task1应该还是出现在exit之前");



//--------terminal output----------------------------------------------------//
// (1) 向购物车添加条目成功:+ {"name":"","price":0,"amount":0}
// (2)更新成功，购物车新添加的产品是：product1
// week2_task1应该还是出现在exit之前
// (3)退出成功，购物车内金额是：100
