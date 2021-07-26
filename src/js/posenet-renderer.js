import { drawKeyPoints, drawSkeleton } from './posenet-utils.js';
import '@tensorflow/tfjs-backend-webgl';
import * as posenet from '@tensorflow-models/posenet';

const defaultConfig = {
  videoWidth: 1320,
  videoHeight: 762,
  flipHorizontal: false,
  algorithm: 'single-pose',
  architecture: 'MobileNetV1',
  showVideo: true,
  showSkeleton: true,
  showPoints: true,
  minPoseConfidence: 0.1,
  minPartConfidence: 0.5,
  maxPoseDetections: 2,
  nmsRadius: 20,
  outputStride: 16,
  imageScaleFactor: 0.5,
  skeletonColor: '#ffadea',
  skeletonLineWidth: 6,
  loadingText: 'Loading...please be patient...',
  detectionSource: 'video',
};

class PosenetRenderer {
  constructor(canvas, video, config = {}) {
    this.canvas = canvas;
    this.video = video;
    this.config = { ...defaultConfig, ...config };
    console.log(this.config);
  }

  async startDetection() {
    try {
      this.loadedPosent = await posenet.load({
        architecture: this.config.architecture,
      });
    } catch (error) {
      throw error;
    }
    this.detectPose();
  }

  detectPose() {
    const { videoWidth, videoHeight } = this.config;
    const canvasContext = this.canvas.getContext('2d');
    this.canvas.width = videoWidth;
    this.canvas.height = videoHeight;
    this.poseDetectionFrame(canvasContext);
  }

  render() {
    this.startDetection();
  }

  poseDetectionFrame(canvasContext) {
    const {
      algorithm,
      imageScaleFactor,
      flipHorizontal,
      outputStride,
      minPoseConfidence,
      minPartConfidence,
      maxPoseDetections,
      nmsRadius,
      videoWidth,
      videoHeight,
      showVideo,
      showPoints,
      showSkeleton,
      skeletonColor,
      skeletonLineWidth,
    } = this.config;

    const posenetModel = this.loadedPosent;
    //const video = video;

    const findPoseDetectionFrame = async () => {
      let poses = [];

      switch (algorithm) {
        case 'multi-pose': {
          poses = await posenetModel.estimateMultiplePoses(this.video, {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
            maxPoseDetections,
            minPartConfidence,
            nmsRadius,
          });
          break;
        }
        case 'single-pose': {
          const pose = await posenetModel.estimateSinglePose(this.canvas, {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
          });
          poses.push(pose);
          break;
        }
        default:
          return;
      }

      canvasContext.clearRect(0, 0, videoWidth, videoHeight);

      if (showVideo) {
        canvasContext.save();
      /*   canvasContext.scale(-1, 1);
        canvasContext.translate(-videoWidth, 0); */
        canvasContext.drawImage(this.video, 0, 0, videoWidth, videoHeight);
        canvasContext.fillStyle = '#ff00ff';
        canvasContext.textBaseline = 'top';
        canvasContext.fillText('Carespace Virtual Coach', 10, 10);
        canvasContext.restore();
      }

      poses.forEach(({ score, keypoints }) => {
        if (score >= minPoseConfidence) {
          if (showPoints) {
            drawKeyPoints(
              keypoints,
              minPartConfidence,
              skeletonColor,
              canvasContext
            );
          }
          if (showSkeleton) {
            drawSkeleton(
              keypoints,
              minPartConfidence,
              skeletonColor,
              skeletonLineWidth,
              canvasContext
            );
          }
        }
      });
      requestAnimationFrame(findPoseDetectionFrame);
    };
    findPoseDetectionFrame();
  }
}

export { PosenetRenderer };
