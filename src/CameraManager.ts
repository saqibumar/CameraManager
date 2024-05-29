// CameraManager.ts
export interface Camera {
    name: string;
    subjectDistanceRange: [number, number];
    lightLevelRange: [number, number];
}

export class CameraManager {
    private hardwareCameras: Camera[];

    constructor(hardwareCameras: Camera[]) {
        this.hardwareCameras = hardwareCameras;
    }

    isCameraSetSufficient(
        desiredSubjectDistanceRange: [number, number],
        desiredLightLevelRange: [number, number]
    ): boolean {
        // Check if there's at least one camera for each desired range
        const camerasForSubjectDistance = this.hardwareCameras.some(camera =>
            this.isRangeOverlap(desiredSubjectDistanceRange, camera.subjectDistanceRange)
        );
        const camerasForLightLevel = this.hardwareCameras.some(camera =>
            this.isRangeOverlap(desiredLightLevelRange, camera.lightLevelRange)
        );

        // Log camera names and results
        this.hardwareCameras.forEach(camera => {
            console.log(`${camera.name}: Cameras for Subject Distance: ${camerasForSubjectDistance}`);
            console.log(`${camera.name}: Cameras for Light Level: ${camerasForLightLevel}`);
        });

        // Return false if no camera is available for either range
        return camerasForSubjectDistance && camerasForLightLevel;
    }

    private isRangeOverlap(range1: [number, number], range2: [number, number]): boolean {
        return range1[0] <= range2[1] && range1[1] >= range2[0];
    }
}
