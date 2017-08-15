/* 20170815
题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环
 */
var arr = [1, 3, 7, 1 ,4,];
var item = 1
function a(arr, item) {

    return arr.filter((element) => element === item).length;
}
console.log('数组：['+arr+']中，'+item+'出现的次数为：'+a(arr, item)+'次');
