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