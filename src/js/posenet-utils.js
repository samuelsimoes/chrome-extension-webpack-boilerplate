import * as posenet from '@tensorflow-models/posenet';
const pointRadius = 3;

function toTuple({ x, y }) {
  return [x, y];
}

export function drawKeyPoints(
  keypoints,
  minConfidence,
  skeletonColor,
  canvasContext,
  scale = 1
) {
  keypoints.forEach((keypoint) => {
    if (keypoint.score >= minConfidence) {
      const { x, y } = keypoint.position;
      console.log(x, y);
      canvasContext.beginPath();
      canvasContext.arc(x * scale, y * scale, pointRadius, 0, 2 * Math.PI);
      canvasContext.fillStyle = skeletonColor;
      canvasContext.fill();
    }
  });
}

function drawSegment(
  [firstX, firstY],
  [nextX, nextY],
  color,
  lineWidth,
  scale,
  canvasContext
) {
  canvasContext.beginPath();
  canvasContext.moveTo(firstX * scale, firstY * scale);
  canvasContext.lineTo(nextX * scale, nextY * scale);
  canvasContext.lineWidth = lineWidth;
  canvasContext.strokeStyle = color;
  canvasContext.stroke();
}

export function drawSkeleton(
  keypoints,
  minConfidence,
  color,
  lineWidth,
  canvasContext,
  scale = 1
) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  );

  adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      lineWidth,
      scale,
      canvasContext
    );
  });
}
