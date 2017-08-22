/*20170822
/题目：

计算两个数组的交数组

注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
function a(arr1, arr2) {
    var result = [];
    var index1 = 0;
    var index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] > arr2[index2]) {
            index2++;
        } else if (arr1[index1] < arr2[index2]) {
            index1++;
        } else {
            result.push(arr1[index1]);
            index1++;
            index2++;
        }
    }
    return result;
}

console.log('数组：['+nums1+']与数组['+nums2+']的交集为：['+a(nums1,nums2)+']');