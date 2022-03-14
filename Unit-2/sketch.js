const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y;
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(0,0,width, height);
    context.fill();
    
    for (let i = 0; i < 5; i++) {
      // context.strokeStyle = 'rgb('+ Math.random()*255 +', '+ Math.random()*255 +', '+ Math.random()*255 +')';
      for (let j = 0; j < 5; j++) {
        context.strokeStyle = 'rgb('+ Math.random()*255 +', '+ Math.random()*255 +', '+ Math.random()*255 +')';
        context.lineWidth = Math.random() * 2 + 2;
        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;
        
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        
        if (Math.random() < 0.5) {
        context.beginPath();
        context.rect(x + 8, y + 8, w - 16, h - 16);
        context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
