/*20170809
* 题目：查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。
斐波纳契数列的前10个数字是：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …*/
function mofei(n) {
    var first=1;
    var second=1;
    var third=0;
    for(var i= 0;i<n-3;i++){
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}
console.log('斐波纳契数列中第 11 个数是：'+mofei(11));