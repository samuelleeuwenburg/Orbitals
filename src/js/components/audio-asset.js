class AudioAsset {
  constructor(path) {

    this.context = new AudioContext();

    this.jsNode = this.context.createScriptProcessor(2048, 1, 1);
    this.jsNode.connect(this.context.destination);

    this.analyserChan1 = this.context.createAnalyser();
    this.analyserChan1.smoothingTimeConstant = 0.0;
    this.analyserChan1.fftSize = 1024;

    this.analyserChan2 = this.context.createAnalyser();
    this.analyserChan2.smoothingTimeConstant = 0.0;
    this.analyserChan2.fftSize = 1024;

    this.sourceNode = this.context.createBufferSource();
    this.splitter = this.context.createChannelSplitter();
    this.sourceNode.connect(this.splitter);

    this.splitter.connect(this.analyserChan1, 0, 0);
    this.splitter.connect(this.analyserChan2, 1, 0);

    this.analyserChan1.connect(this.jsNode);

    this.sourceNode.connect(this.context.destination);

    this.jsNode.onaudioprocess = () => { this.processAudio() }

    this.p = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', path, true);
      request.responseType = 'arraybuffer';

      request.onload = () => {
        this.context.decodeAudioData(request.response, (buffer) => {
          resolve(buffer);
        });
      }

      request.send()
    });

    this.p.then((buffer) => {
      this.sourceNode.buffer = buffer;
    });
  }

  get promise() {
    return this.p;
  }

  play() {
    this.sourceNode.start(0);
  }

  processAudio() {
    this.freqsChan1 = this.getByteFrequencyData(this.analyserChan1);
    this.volumeChan1 = this.getAverageVolume(this.freqsChan1);

    this.freqsChan2 = this.getByteFrequencyData(this.analyserChan2);
    this.volumeChan2 = this.getAverageVolume(this.freqsChan2);
  }

  getByteFrequencyData(analyser) {
    let freqs = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqs);
    return freqs;
  }

  getAverageVolume(array) {
    let value = 0;

    for (let i = 0; i < array.length; i++) {
      value += array[i];
    }

    return value / array.length;

  }

}
