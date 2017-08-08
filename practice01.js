//20170808 Tues (Round1)
//题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
function a(n) {
    var arr = [];
    for (var k = 2; k <= n; k++) {
        if (n == k) {
            console.log(n);
        } else if (n > k && n % k == 0) {
            arr.push(k);
            n = n / k;
        } else {
            break;
        }
    }
    arr.push(n);
    return arr;
}
function result(n) {
    var arr=a(n);
    var result1=n+"="+arr.join("");
    console.log(result1);
}
result(90);