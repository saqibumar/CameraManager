# Challenge:
General
[The author of this story problem is neither a photographer nor a hardware engineer, so please forgive any implausibility.] Suppose we want to construct a versatile software camera by combining many inflexible hardware cameras. Each hardware camera works well for a particular range of subject distances and for a particular range of light levels. The software camera will measure the light level and subject distance of each shot and choose an appropriate hardware camera to capture it. Write a function that takes the desired characteristics of the software camera (range of subject distances and range of light levels that it should support) and a list of hardware cameras with their respective characteristics, and tests whether that set of hardware cameras will suffice.
# CameraManager
Demo to select best match for camera according to the subject distance and light level range
# To RUN:
```npm run start```

index.ts contains the values to test

# Unit test
```npm test```
test/index.test.ts contains unit tests
