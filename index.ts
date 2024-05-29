// index.ts
import { Camera, CameraManager } from './src/CameraManager';

// Example usage
const hardwareCameras: Camera[] = [
    { name: "cam1", subjectDistanceRange: [0, 5], lightLevelRange: [20, 50] },
    { name: "cam2", subjectDistanceRange: [3, 10], lightLevelRange: [40, 80] },
    { name: "cam3", subjectDistanceRange: [8, 15], lightLevelRange: [70, 100] }
];

const cameraManager = new CameraManager(hardwareCameras);

const desiredSubjectDistanceRange: [number, number] = [2, 12];
const desiredLightLevelRange: [number, number] = [30, 90];

const isSufficient = cameraManager.isCameraSetSufficient(
    desiredSubjectDistanceRange,
    desiredLightLevelRange
);

console.log("Is camera set sufficient?", isSufficient);
