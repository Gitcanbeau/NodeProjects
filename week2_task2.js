const fs = require('fs');

// Path to your WAV file
const filePath = './wavfiles/piano.wav';

//当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
//在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。

// Read the WAV file as a buffer
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    console.log(data.length + ' bytes');

    // `data` now contains the contents of the WAV file as a Buffer
    console.log('File content as buffer:', data);
    //switch buffer data to string
    const text = data.toString('utf-8');
    //switch string to buffer data
    const buf = Buffer.from(text, 'utf-8');
    console.log(buf);
    
});
console.log("week2_task2");