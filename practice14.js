/*20170823
/给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。
给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
 */

var arr1 = [1,2,[1,2]];
var arr2 = [1,2,[1,2],[3,4]];
var arr3 = [4,[3,[2,[1]]]];

function a(array) {
    var result = array.reduce(function(i, j) {
        var clude = j;
        if(Array.isArray(clude)){
            clude = a(clude);
        }
        return i.concat(clude);
    }, []);
    return result;
}

console.log('输出：['+a(arr1)+']');
console.log('输出：['+a(arr2)+']');
console.log('输出：['+a(arr3)+']');