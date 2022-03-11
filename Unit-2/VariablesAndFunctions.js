let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

function drawingOne(){
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
}

function drawingTwo() {
	const width = 60;
	const height = 60;
	const gap = 20;
	let x, y;
	
	for (let i = 0; i < 5; i++) {
		// context.strokeStyle = 'rgb('+ Math.random()*255 +', '+ Math.random()*255 +', '+ Math.random()*255 +')';
		for (let j = 0; j < 5; j++) {
			context.strokeStyle = 'rgb('+ Math.random()*255 +', '+ Math.random()*255 +', '+ Math.random()*255 +')';
			context.lineWidth = Math.random() * 2 + 2;
			x = 100 + (width + gap) * i;
			y = 100 + (height + gap) * j;
			
			context.beginPath();
			context.rect(x, y, width, height);
			context.stroke();
			
			if (Math.random() < 0.5) {
			context.beginPath();
			context.rect(x + 8, y + 8, width - 16, height - 16);
			context.stroke();
			}
		}
	}
}
drawingTwo();

// let year = 2042;
// let nextYear = year++;
// 
// let dinner = "salad";
// let sentence = "Tonight, dinner will be " + dinner;
// 
// function saySomething(param) {
// 	console.log(param);
// }
// 
// saySomething(sentence);
// 
// function add(a, b){
// 	return a + b;
// }
// 
// let result = add(5, 7)
// console.log(result);
// 
// let multiply = (a, b) => {
// 	return a*b;
// }
// 
// console.log(multiply(5, 7));
