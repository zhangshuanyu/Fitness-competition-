/*20170810
题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
eg: function findNum(arr){ ... }
*/
var num=[0,1,2,3,4,5,4,3,2,1,0];
function onlyOne(num) {
    return num.filter( element => {
        return num.filter( item => element === item).length === 1;
    })
}
console.log('num数组中，只出现了一次的数字是：'+onlyOne(num));