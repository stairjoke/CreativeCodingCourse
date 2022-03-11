let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(100,100,400,400);

context.lineWidth = 4;
context.beginPath();
context.rect(90, 90, 420, 420);
context.stroke();

context.beginPath();
context.arc(300, 300, 123, Math.PI * 2, Math.PI);
context.stroke();

context.strokeStyle = "white"
context.beginPath();
context.arc(300, 300, 123, Math.PI, Math.PI * 2);
context.stroke();


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
