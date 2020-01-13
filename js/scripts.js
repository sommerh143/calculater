var add = function(number1, number2) {
    return number1 + number2;
    };
    
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 =parseInt(prompt("Enter another number:"));
    

var sub = function(number1, number2) {
    return number1 - number2;
};

var multi = function(number1, number2) {
    return number1 * number2;
};

var div = function(number1, number2) {
    return number1 / number2;
};

var addresult = add(number1, number2); 
var subresult = sub(number1, number2);
var multiresult = multi(number1, number2);
var divresult = div(number1, number2);


alert(addresult);
