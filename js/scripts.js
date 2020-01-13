var add = function(number1, number2) {
    return number1 + number2;
    };
    
    var number1 = parseInt(prompt("Enter temp"));
    var number2 =parseFloat(prompt("Enter height (in meters):"));
    

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

var bmiresult= (number1 / (number2 * number2));

var cnum2 = ((number1 + number1) * 0.1);
var temp = ((number1 + number1) - cnum2 + 32);




alert(temp);
