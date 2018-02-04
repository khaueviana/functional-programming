//Pure Function
function add(x, y) {
    return x + y;
}

console.log(add(1,2));

//High Order Function
// function validateValueWithFunc(value, parseFunc, type) {
//     if (parseFunc(value))
//         console.log('Invalid ' + type);
//     else
//         console.log('Valid ' + type);
// }

// function makeRegexParser(regex) {
//     return regex.exec;
// }

// var parseSsn = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/);
// var parsePhone = makeRegexParser(/^\(\d{3}\)\d{3}-\d{4}$/);

// validateValueWithFunc('123-45-6789', parseSsn, 'SSN');
// validateValueWithFunc('(123)456-7890', parsePhone, 'Phone');
// // validateValueWithFunc('123 Main St.', parseAddress, 'Address');
// // validateValueWithFunc('Joe Mama', parseName, 'Name');

function makeAdder(constantValue) {
    return function adder(value) {
        return constantValue + value;
    };
}

var add10 = makeAdder(10);
console.log(add10(20)); // prints 30
console.log(add10(30)); // prints 40
console.log(add10(40)); // prints 50

var add10 = value => value + 10;
var mult5 = value => value * 5;


var mult5AfterAdd10 = value => mult5(add10(value));

console.log(mult5AfterAdd10(10));

var add = x => y => x + y

console.log(add(1)(2));

