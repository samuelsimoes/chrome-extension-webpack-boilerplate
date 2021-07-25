import { PosenetRenderer } from './posenet-renderer.js';

class PosenetStream {
  constructor(stream) {
    console.log('Posenet Filter to Stream', stream);

    this.stream = stream;
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    this.canvas = canvas;

    this.renderer = new PosenetRenderer(this.canvas, video);

    video.addEventListener('playing', () => {
      // Use a 2D Canvas.
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      // Use a WebGL Renderer.
      console.log('playing');
      this.renderer.setSize(this.video.videoWidth, this.video.videoHeight);
      //this.update();
      this.renderer.render();
    });
    video.srcObject = stream;
    video.autoplay = true;
    this.video = video;
    //this.ctx = this.canvas.getContext('2d');
    this.outputStream = this.canvas.captureStream();
  }

  update() {
    //console.log('PosenetStream.update');
    // Use a 2D Canvas
    //this.ctx.filter = 'invert(1)';
    /*   this.ctx.drawImage(this.video, 0, 0);
    this.ctx.fillStyle = '#ff00ff';
    this.ctx.textBaseline = 'top';
    this.ctx.fillText('Carespace Virtual Coach', 10, 10);

    this.ctx.beginPath();
    this.ctx.moveTo(Math.random() * 1000, Math.random() * 1000);
    this.ctx.lineTo(Math.random() * 1000, Math.random() * 1000);
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#ffadea';
    this.ctx.stroke(); */
    // Use a WebGL renderer.
    // this.renderer.render();
    //requestAnimationFrame(() => this.update());
  }
}

export { PosenetStream };
