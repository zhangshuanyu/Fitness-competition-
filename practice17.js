/*20170826
/给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.
 */
var readline = require('readline');
var a = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入一个数字(按回车结束)：'
});
a.prompt();
a.on('line', function (line) {
    var n = parseInt(line);
    var result = '';
    if (n % 3 === 0 && n % 5 !== 0) {
        result = 'fizz';
    } else if (n % 5 === 0 && n % 3 !== 0) {
        result = 'buzz';
    } else if (n % 5 === 0 && n % 3 === 0) {
        result = 'fizz buzz';
    } else {
        result = ' ';
    }
    console.log(result);
    a.prompt();
});
