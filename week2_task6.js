const fs = require('fs');


const mp3FilePath = './wavfiles/rain.mp3';
const newMp3FilePath = './wavfiles/rain_new.mp3';


const readableStream = fs.createReadStream(mp3FilePath, { highWaterMark: 64 * 1024 }); 
const writableStream = fs.createWriteStream(newMp3FilePath);

// 通过管道将数据从可读流传输到可写流
//在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。
//就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。
//一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
readableStream.pipe(writableStream);
//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
//readable.pipe(writable, { end: false });

// 监听流data事件
readableStream.on('data',(chunk)=>{
    console.log('DATA:');
    console.log(chunk);
});
// 监听流end事件
readableStream.on('end', () => {
    console.log('文件读取完成，数据已写入新文件。');
});

// 监听error事件
readableStream.on('error', (err) => {
    console.error('读取文件时发生错误:', err);
});

// 监听流finish事件
writableStream.on('finish', () => {
    console.log('文件写入完成。');
});

// 监听error事件
writableStream.on('error', (err) => {
    console.error('写入文件时发生错误:', err);
});


