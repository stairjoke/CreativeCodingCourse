let year = 2042;
let nextYear = year++;

let dinner = "salad";
let sentence = "Tonight, dinner will be " + dinner;

function saySomething(param) {
	console.log(param);
}

saySomething(sentence);

function add(a, b){
	return a + b;
}

let result = add(5, 7)
console.log(result);

let multiply = (a, b) => {
	return a*b;
}

console.log(multiply(5, 7));
