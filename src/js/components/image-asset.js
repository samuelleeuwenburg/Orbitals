class ImageAsset {
  constructor(path) {

    this.p = new Promise((resolve, reject) => {
      let img = new Image();
      img.src = path;
      img.onload = () => resolve(img);
    });

    this.p.then((img) => {
      this.img = img;
      this.loaded = true;
    });
  }

  get promise() {
    return this.p;
  }
  get image() {
    return this.img;
  }

}
