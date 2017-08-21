/*20170819
数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
*/
var arr = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
function a(arr) {
    var result = [];
    arr.map(elem => {
        if (result.indexOf(elem) === -1) {
            result.push(elem);
        }
    });
    console.log("数组：[" + arr + "]去掉重复元素为：[" + result+"]");
}
a(arr);
