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

// -----------------Сумма чисел кратных 3----------------------
var result = 0;
for (x = 1; x <= 100; x++) {
    if (x % 3 === 0){
     result += x;
    } 
}
console.log(result)

//----------------------Елочка---------------------------------

function drawTriangle(height, symbol) {
    var i;
    for (i = 1; i <= height; i++) {
        var row = '';
        var j;    
        for (j = 0; j < i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(20, '*');
