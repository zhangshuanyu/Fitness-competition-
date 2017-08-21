/*20170820
/判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */
let str = 'abcsbaddbizdbas';
var str1 = 'aaaaabbdbdbb'
function count(string) {
    var arr = string.split('');
    var temp =[];
    arr.forEach(elem => {
        if(temp[elem]) {
            temp[elem]++;
        } else {
            temp[`${elem}`] = 1;
        }
    });
    var result = [];
    var obj = {};
    var count = 0;
    for(item in temp) {
        if(temp[item] > count) {
            count = temp[item];
            result = [{key: item, count}];
        } else if(temp[item] === count) {
            result.push({key: item, count});
        }
    }
    result.forEach(ele => {
        obj[ele.key] = ele.count;
    });
    return obj ;
}
console.log('输入：'+str+'\n'+'输出：'+count(str));
console.log('输入：'+str1+'\n'+'输出：'+count(str1));
