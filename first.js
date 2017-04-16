function add(a, b) {
    var x = new String(a);
    var y = new String(b);
    x.valueOf = function() { return +x[0]};
    y.valueOf = function() { return +y[0]};
    return x+y
}
console.log(add('1', '2'))
