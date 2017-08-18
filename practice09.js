/*20170817
/为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
要求：不要使用for，while循环
 */
var arr = [5, 3, 7, 1];
function a(arr) {
    var result = [];
    result = arr.map(num => {
        return Math.pow(num, 2);
    }) ;
    return result;
}
var b = a(arr);
console.log('数组：['+arr+']的二次方数组为：['+b+']')
