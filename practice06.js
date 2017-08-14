/*20170813
/给定一个未排序的整数数组，找到其中位数。
function XXX(arr){}
 */
function sortNumber(a,b)
{
    return a - b
}

function num(arr){
    var newArr = arr.sort(sortNumber);
    if(arr.length%2 == 0){
        var result = (newArr[arr.length/2 - 1] + newArr[arr.length/2])/2;
    }else if(arr.length%2 !== 0) {
        var result = newArr[(arr.length+1)/2];
    }
    console.log('数组：['+arr+']的中位数是：'+result);
}
num([2,15,99,78,56,52,32]);
num([15,45,22,23]);