var moduleA = (function () {
    var obj = {};
    var name = "小明";
    var age = 23;
    var flag = true;
    if (flag) {
        console.log(sum(10, 20));
    };
    function sum(a, b) {
        return a + b;
    }
    obj.flag = flag;
    obj.sum = sum;
    return obj;
})();