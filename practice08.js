/*20170816
/题目：找出数组 arr 中重复出现过的元素
例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */

arr = ['a','ab','ed','da','a','ed','b'];
function a(arr) {
    var result = [];
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    console.log('数组：['+arr+']中重复出现的元素有：['+result+']');
}
a(arr);
