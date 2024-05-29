import { Camera, CameraManager } from '../src/CameraManager';

describe('CameraManager', () => {
    let cameraManager: CameraManager;

    beforeEach(() => {
        const hardwareCameras: Camera[] = [
            { name: "cam1", subjectDistanceRange: [0, 5], lightLevelRange: [20, 50] },
            { name: "cam2", subjectDistanceRange: [3, 10], lightLevelRange: [40, 80] },
            { name: "cam3", subjectDistanceRange: [8, 15], lightLevelRange: [70, 100] }
        ];
        cameraManager = new CameraManager(hardwareCameras);
    });

    test('isCameraSetSufficient returns true when sufficient cameras are available', () => {
        const desiredSubjectDistanceRange: [number, number] = [2, 12];
        const desiredLightLevelRange: [number, number] = [30, 90];

        const result = cameraManager.isCameraSetSufficient(
            desiredSubjectDistanceRange,
            desiredLightLevelRange
        );

        expect(result).toBe(true);
    });

    test('isCameraSetSufficient returns false when sufficient cameras are not available', () => {
      const desiredSubjectDistanceRange: [number, number] = [600, 200];
      const desiredLightLevelRange: [number, number] = [10, 130];
  
      const result = cameraManager.isCameraSetSufficient(
          desiredSubjectDistanceRange,
          desiredLightLevelRange
      );
  
      expect(result).toBe(false);
  });

    // Add more test cases as needed
});
