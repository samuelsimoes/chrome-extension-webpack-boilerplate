import { PosenetStream } from './posenet-stream.js';
function monkeyPatchMediaDevices() {
  const enumerateDevicesFn = MediaDevices.prototype.enumerateDevices;
  const getUserMediaFn = MediaDevices.prototype.getUserMedia;

  MediaDevices.prototype.enumerateDevices = async function () {
    const res = await enumerateDevicesFn.call(navigator.mediaDevices);
    // We could add "Virtual VHS" or "Virtual Median Filter" and map devices with filters.
    res.push({
      deviceId: 'virtual',
      groupID: 'uh',
      kind: 'videoinput',
      label: 'Carespace Virtual  Webcam',
    });
    return res;
  };

  MediaDevices.prototype.getUserMedia = async function () {
    const args = arguments;
    console.log(args[0]);
    if (args.length && args[0].video && args[0].video.deviceId) {
      if (
        args[0].video.deviceId === 'virtual' ||
        args[0].video.deviceId.exact === 'virtual'
      ) {
        // This constraints could mimick closely the request.
        // Also, there could be a preferred webcam on the options.
        // Right now it defaults to the predefined input.
        const constraints = {
          video: {
            facingMode: args[0].facingMode,
            advanced: args[0].video.advanced,
            width: args[0].video.width,
            height: args[0].video.height,
          },
          audio: false,
        };
        const res = await getUserMediaFn.call(
          navigator.mediaDevices,
          constraints
        );
        if (res) {
          // const filter = new FilterStream(res, shader);
          const filter = new PosenetStream(res);
          return filter.outputStream;
        }
      }
    }
    const res = await getUserMediaFn.call(navigator.mediaDevices, ...arguments);
    return res;
  };

  console.log('CARESPACE VIRTUAL WEBCAM INSTALLED.');
}

export { monkeyPatchMediaDevices };
