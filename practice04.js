/*20170811
题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){}
*/
var list = '1->2->3->3->4->5->3';
var val = 3;

function arr(list, val) {
    var arr = list.split('->');
    var result = [];
    for(var item of arr) {
        if(item !== (''+val)) {
            result.push(item);
        }
    }
    return result.join('->');
}
console.log('链表：' + list + ',删除' + val + '后，得到的重组链表是：' + arr(list, val));