const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    const cy = width * .5;
    const cx = height * .5;
    const _w = width * .01;
    const _h = height * .1;
    
    const num = 12;
    const radus = width * .3;
    
    for (let i = 0; i < num; i++) {
      const slice = degToRad(360/12);
      const angle = slice * i;
      x = cx + radus * Math.sin(angle);
      y = cy + radus * Math.cos(angle);
      
      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      
      context.fillStyle = 'black';
      context.beginPath();
      context.rect(_w * -.5,_h * -.5,_w,_h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
