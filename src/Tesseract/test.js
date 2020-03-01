const { createWorker } = require("tesseract.js");
const worker = createWorker();

class TesseractObject {
  constructor() {
    this.name = "TesseractObject";
  }

  async getTextFromImage(img) {
    console.log(img);
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    let result = await worker.detect(img);
    //console.log("detect", result.data);
    result = await worker.recognize(img);
    console.log("recognize", result.data);
    await worker.terminate();
    return result.data;
  }
}

export default new TesseractObject();
