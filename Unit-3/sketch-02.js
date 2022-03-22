const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    const y = width * .5;
    const x = height * .5;
    const _w = width * .3;
    const _h = height * .3;
    
    context.save();
    context.translate(x,y);
    context.rotate(0.3);
    
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(_w * -.5,_h * -.5,_w,_h);
    context.fill();
    context.restore();
  };
};

canvasSketch(sketch, settings);
