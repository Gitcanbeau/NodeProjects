const iconv = require('iconv-lite');
const fs = require('fs');

// 从前端传输过来的 GBK 编码的数据
const filePath = './textfiles/gbk_data.txt';

fs.readFile(filePath, (err, gbkData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Convert GBK-encoded data to UTF-8
    let utf8Data = iconv.decode(gbkData, 'gbk');
    console.log('Decoded with GBK:', utf8Data);

    // Try decoding with GB2312
    utf8Data = iconv.decode(gbkData, 'gb2312');
    console.log('Decoded with GB2312:', utf8Data);
    
    console.log(typeof(utf8Data));

    // Parse the UTF-8 encoded JSON data
    try {
        const jsonData = JSON.parse(utf8Data);
        console.log(jsonData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
    
});

//-------------------------------------------------------------------//
// {
//     hello: '锟斤拷锟斤拷锟斤拷锟�',
//     count: 16,
//     this: 'that',
//     price: 106.959,
//     groups: [ { name: 'Bob', age: '16' }, { name: 'Alice', age: 24 } ]
// }

//还是有乱码，可能的原因：
//最开始使用iconv.decode() 把 the GBK-编码的数据解码成 UTF-8，但是用于编码的字符和实际解码的字符不匹配所以还是有乱码
//a mismatch between the character encoding used to decode the data and the actual encoding of the data itself.
//然后使用GB2312解码，乱码仍然存在，可能是原本的数据就是无效的
//the data may contain corrupted or invalid characters.

console.log("week2_task3");
