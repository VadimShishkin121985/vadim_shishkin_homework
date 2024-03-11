var x = 5
var y = 12
function pow(){
    var result = 1;
    while (y > 0) {
        result *= x;
        y--;
    }
    return result;
}
var result = pow();
console.log(result);