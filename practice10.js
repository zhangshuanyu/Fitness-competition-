/*20170818
/在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环
 */
var arr = [1, 3, 7, 1 ,4,];
var item = 1;
function a(array,item){
    var result = [];
    array.forEach((element,index) => {
        if(element === item){
            result.push(index);
        }
    });
    console.log('数组：['+arr+']中，'+item+'出现的位置是：'+result);
}
a(arr,item);
