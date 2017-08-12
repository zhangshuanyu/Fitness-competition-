/*20170812
题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。

*/  for(var num=100;num<1000;num++){
    var i=num%10;
    var j=parseInt(num%100/10);
    var k=parseInt(num/100);
    if(num==i*i*i+j*j*j+k*k*k){
        console.log(num+"是水仙花数！");
    }



}